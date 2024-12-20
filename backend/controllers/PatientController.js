const getPatientDetails = async (req, res) => {
    try {
        const { patientId } = req.params;
        const patientDetails = await req.contract.getPatientDetails(patientId);
        res.json(patientDetails);
    } catch (error) {
        res.status(500).send(error.toString());
    }
};

module.exports = { getPatientDetails };