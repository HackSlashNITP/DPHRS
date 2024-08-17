// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract DataRegistration {
    
    // to first time register a patient
    struct PatientDetails {
        string name;
        string photo; //hash of the patient's photo
        uint256 age;
        bool isRegistered; 
    }

    // to first time register a doctor
    struct DoctorDetails {
        string name;
        string specialization; // Specialization of doctor
        string licenseNumber; // Unique license number of doctor
        bool isRegistered;
    }

    // To add health data of registered patient
    struct HealthData {
        uint256 timestamp;
        string dataHash; // Off-chain store data and compute hash 
        string dataType; // Data type (like "Blood Test")
        address dataAddedBy; // Address of the patient or authorized person 
    }

    // Unique patient ID to patient details
    mapping(uint256 => PatientDetails) public patientDetails;
    
    // Unique doctor ID to doctor details
    mapping(uint256 => DoctorDetails) public doctorDetails;

    // Patient ID to their array of health data
    mapping(uint256 => HealthData[]) public patientData;
    
    // Patient ID to authorized addresses
    mapping(uint256 => mapping(address => bool)) public authorizedAddresses;

    // Address of patient account to unique patient ID
    mapping(address => uint256) public addressToPatientId;

    // Address of doctor account to unique doctor ID
    mapping(address => uint256) public addressToDoctorId;

    // Event when patient details are registered
    event PatientRegistered(
        uint256 indexed patientId,
        string name,
        string photo,
        uint256 age
    );

    // Event when doctor details are registered
    event DoctorRegistered(
        uint256 indexed doctorId,
        string name,
        string specialization,
        string licenseNumber
    );

    // Event when data gets registered
    event DataRegistered(
        uint256 indexed patientId, 
        uint256 indexed timestamp,
        string dataType,
        string dataHash
    );

    // Event when a patient grants access to an address
    event AccessGranted(uint256 indexed patientId, address indexed authorizedAddress);

    // Event when a patient removes access from an address
    event AccessRemoved(uint256 indexed patientId, address indexed authorizedAddress);

    // Unique ID for each patient
    uint256 private nextPatientId = 2401; // Unique ID initialized with 2401

    // Unique ID for each doctor
    uint256 private nextDoctorId = 1001; // Unique ID initialized with 1001

    modifier onlyAuthorized(uint256 _patientId) {
        uint256 patientId = addressToPatientId[msg.sender];
        require(
            _patientId == patientId || authorizedAddresses[_patientId][msg.sender],
            "Not authorized to register data"
        );
        _;
    }

    // Function to register a new patient
    function registerPatient(string memory _name, string memory _photo, uint256 _age) public {
        uint256 patientId = nextPatientId;
        nextPatientId++;

        patientDetails[patientId] = PatientDetails({
            name: _name,
            photo: _photo,
            age: _age,
            isRegistered: true
        });

        addressToPatientId[msg.sender] = patientId; // Assign unique ID to a patient

        emit PatientRegistered(patientId, _name, _photo, _age);
    }

    // Function to register a new doctor
    function registerDoctor(string memory _name, string memory _specialization, string memory _licenseNumber) public {
        uint256 doctorId = nextDoctorId;
        nextDoctorId++;

        doctorDetails[doctorId] = DoctorDetails({
            name: _name,
            specialization: _specialization,
            licenseNumber: _licenseNumber,
            isRegistered: true
        });

        addressToDoctorId[msg.sender] = doctorId; // Assign unique ID to a doctor

        emit DoctorRegistered(doctorId, _name, _specialization, _licenseNumber);
    }

    // Function for the patient to grant access to another address
    function grantAccess(uint256 _patientId, address _authorizedAddress) public {
        require(patientDetails[_patientId].isRegistered, "Patient not registered");
        authorizedAddresses[_patientId][_authorizedAddress] = true;
        emit AccessGranted(_patientId, _authorizedAddress);
    }

    // Function for the patient to remove access from another address
    function removeAccess(uint256 _patientId, address _authorizedAddress) public {
        require(patientDetails[_patientId].isRegistered, "Patient not registered");
        authorizedAddresses[_patientId][_authorizedAddress] = false;
        emit AccessRemoved(_patientId, _authorizedAddress);
    }

    // Function to register new health data, only by patient or authorized address
    function registerHealthData(uint256 _patientId, string memory _dataHash, string memory _dataType) public onlyAuthorized(_patientId) {
        HealthData memory newData = HealthData({
            timestamp: block.timestamp,
            dataHash: _dataHash,
            dataType: _dataType,
            dataAddedBy: msg.sender
        });

        patientData[_patientId].push(newData);

        emit DataRegistered(_patientId, block.timestamp, _dataType, _dataHash);
    }
}
