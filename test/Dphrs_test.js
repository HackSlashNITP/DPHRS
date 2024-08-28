const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("DPHRS", function () {
    let Dphrs; //contract factory for dphrs contract
    let dphrs; // Instance of the deployed Dphrs contract
    let owner; //account deploying contract
    let addr1; // account used for testing
    let addr2; // account used for testing

    // This function runs before each test
    beforeEach(async function () {
        // Deploy the contract
        Dphrs = await ethers.getContractFactory("DPHRS");
        [owner, addr1, addr2] = await ethers.getSigners();
        dphrs = await Dphrs.deploy(); // Deploy a new instance of the contract
        await dphrs.waitForDeployment(); // wait for deployment
    });


  // Test case: Register a new patient
    it("Should register a new patient", async function () {
      // Call the registerPatient function
        const tx = await dphrs.registerPatient("Aman", "photo_url", 20);
      // wait for transaction mining
        await tx.wait();

        const patientId = await dphrs.addressToPatientId(owner.address);
        const patientDetails = await dphrs.patientDetails(patientId);

        expect(patientDetails.name).to.equal("Aman");
        expect(patientDetails.photo).to.equal("photo_url");
        expect(patientDetails.age).to.equal(20);
        expect(patientDetails.isRegistered).to.equal(true);
    });

    it("Should grant access to another address", async function () {
        const tx = await dphrs.registerPatient("John Doe", "photo_url", 30);
        await tx.wait();

        const patientId = await dphrs.addressToPatientId(owner.address);

        const grantTx = await dphrs.grantAccess(patientId, addr1.address);
        await grantTx.wait();

        const isAuthorized = await dphrs.authorizedAddresses(patientId, addr1.address);
        expect(isAuthorized).to.equal(true);
    });

    it("Should remove access from another address", async function () {
        const tx = await dphrs.registerPatient("John Doe", "photo_url", 30);
        await tx.wait();

        const patientId = await dphrs.addressToPatientId(owner.address);

        const grantTx = await dphrs.grantAccess(patientId, addr1.address);
        await grantTx.wait();

        const revokeTx = await dphrs.removeAccess(patientId, addr1.address);
        await revokeTx.wait();

        const isAuthorized = await dphrs.authorizedAddresses(patientId, addr1.address);
        expect(isAuthorized).to.equal(false);
    });

    it("Should register health data by authorized address", async function () {
        const tx = await dphrs.registerPatient("John Doe", "photo_url", 30);
        await tx.wait();

        const patientId = await dphrs.addressToPatientId(owner.address);

        const grantTx = await dphrs.grantAccess(patientId, addr1.address);
        await grantTx.wait();

        const healthTx = await dphrs.connect(addr1).registerHealthData(patientId, "data_hash", "Blood Test");
        await healthTx.wait();

        const healthData = await dphrs.patientData(patientId, 0);

        expect(healthData.dataHash).to.equal("data_hash");
        expect(healthData.dataType).to.equal("Blood Test");
        // expect(healthData.DataAddedBy).to.equal(addr1.address);
    });

    it("Should fail to register health data by unauthorized address", async function () {
        const tx = await dphrs.registerPatient("John Doe", "photo_url", 30);
        await tx.wait();

        const patientId = await dphrs.addressToPatientId(owner.address);

        await expect(
            dphrs.connect(addr2).registerHealthData(patientId, "data_hash", "Blood Test")
        ).to.be.revertedWith("Not authorized to register data");
    });
});
