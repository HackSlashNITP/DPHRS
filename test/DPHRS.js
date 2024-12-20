const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("DPHRS Contract", function () {
  let DPHRS;
  let dphrs;
  let owner, patient, doctor;

  beforeEach(async function () {
    [owner, patient, doctor] = await ethers.getSigners();

    DPHRS = await ethers.getContractFactory("DPHRS");
    dphrs = await DPHRS.deploy();
    await dphrs.waitForDeployment();
  });

  it("Should register a patient", async function () {
    await dphrs.connect(patient).registerPatient("John Doe", 30, "photoHash");

    const patientId = await dphrs.addressToPatientId(patient.address);
    const patientDetails = await dphrs.patientDetails(patientId);

    expect(patientDetails.name).to.equal("John Doe");
    expect(patientDetails.age).to.equal(30);
    expect(patientDetails.photo).to.equal("photoHash");
    expect(patientDetails.isRegistered).to.be.true;
  });

  it("Should register a doctor", async function () {
    await dphrs.connect(doctor).registerDoctor("Dr. Smith", "Cardiology");

    const doctorId = await dphrs.addressToDoctorId(doctor.address);
    const doctorDetails = await dphrs.doctorDetails(doctorId);

    expect(doctorDetails.doctorName).to.equal("Dr. Smith");
    expect(doctorDetails.specialization).to.equal("Cardiology");
    expect(doctorDetails.isRegistered).to.be.true;
  });

  it("Should create an appointment", async function () {
    await dphrs.connect(patient).registerPatient("John Doe", 30, "photoHash");
    await dphrs.connect(doctor).registerDoctor("Dr. Smith", "Cardiology");

    const patientId = await dphrs.addressToPatientId(patient.address);
    const doctorId = await dphrs.addressToDoctorId(doctor.address);

    await dphrs.connect(patient).createAppointment(patientId, doctorId, 1700000000, "appointmentHash");

    const appointment = await dphrs.appointments(patientId, 0);

    expect(appointment.patientId).to.equal(patientId);
    expect(appointment.doctorId).to.equal(doctorId);
    expect(appointment.date).to.equal(1700000000);
    expect(appointment.appointmentHash).to.equal("appointmentHash");
    expect(appointment.isModifiedByDoctor).to.be.false;
    expect(appointment.isAcceptedByPatient).to.be.false;
  });

  it("Should allow a doctor to add health data", async function () {
    await dphrs.connect(patient).registerPatient("John Doe", 30, "photoHash");
    await dphrs.connect(doctor).registerDoctor("Dr. Smith", "Cardiology");

    const patientId = await dphrs.addressToPatientId(patient.address);

    await dphrs.connect(doctor).addHealthData(patientId, "dataHash", "BloodTest");

    const healthData = await dphrs.patientData(patientId, 0);

    expect(healthData.dataHash).to.equal("dataHash");
    expect(healthData.dataType).to.equal("BloodTest");
    expect(healthData.addedBy).to.equal(doctor.address);
    expect(healthData.isAcceptedByPatient).to.be.false;
  });

  it("Should allow a patient to accept health data", async function () {
    await dphrs.connect(patient).registerPatient("John Doe", 30, "photoHash");
    await dphrs.connect(doctor).registerDoctor("Dr. Smith", "Cardiology");

    const patientId = await dphrs.addressToPatientId(patient.address);

    await dphrs.connect(doctor).addHealthData(patientId, "dataHash", "BloodTest");

    await dphrs.connect(patient).acceptHealthData(patientId, 0);

    const healthData = await dphrs.patientData(patientId, 0);

    expect(healthData.isAcceptedByPatient).to.be.true;
  });

  it("Should allow a doctor to modify an appointment", async function () {
    await dphrs.connect(patient).registerPatient("John Doe", 30, "photoHash");
    await dphrs.connect(doctor).registerDoctor("Dr. Smith", "Cardiology");

    const patientId = await dphrs.addressToPatientId(patient.address);
    const doctorId = await dphrs.addressToDoctorId(doctor.address);

    await dphrs.connect(patient).createAppointment(patientId, doctorId, 1700000000, "appointmentHash");

    await dphrs.connect(doctor).modifyAppointment(patientId, 0, "newAppointmentHash");

    const appointment = await dphrs.appointments(patientId, 0);

    expect(appointment.appointmentHash).to.equal("newAppointmentHash");
    expect(appointment.isModifiedByDoctor).to.be.true;
  });

  it("Should allow a patient to accept appointment modification", async function () {
    await dphrs.connect(patient).registerPatient("John Doe", 30, "photoHash");
    await dphrs.connect(doctor).registerDoctor("Dr. Smith", "Cardiology");

    const patientId = await dphrs.addressToPatientId(patient.address);
    const doctorId = await dphrs.addressToDoctorId(doctor.address);

    await dphrs.connect(patient).createAppointment(patientId, doctorId, 1700000000, "appointmentHash");
    await dphrs.connect(doctor).modifyAppointment(patientId, 0, "newAppointmentHash");
    await dphrs.connect(patient).acceptAppointmentModification(patientId, 0);

    const appointment = await dphrs.appointments(patientId, 0);

    expect(appointment.isAcceptedByPatient).to.be.true;
  });
});
