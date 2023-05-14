const prescription = require("./prescription_model");
var router = require("express").Router();

function readPrescription(req, res) {
    const pid = req.body.pid;
    const did = req.body.did;
    
    prescription.readPrescription([pid, did], (err, result) => {
        if (err) {
            console.log(err);
            res.json({ errMsg: "Error: Failed on reading prescription." });

        }
        res.json({ res: result, Msg: "Successfully read the prescription"})
    })
}

function writePrescription(req, res) {
    const pid = req.body.pid;
    const did = req.body.did;
    const department = req.body.department;
    const date = req.body.date;
    const description = req.body.description;
    const caution = req.body.caution;
    const count = req.body.count;
    
    prescription.writePrescription([pid, did, department, date, description, caution, count], (err, result) => {
        if (err) {
            console.log(err);
            res.json({ errMsg: "Error: Failed on writing prescription." });
        }
        res.json({Msg: "Successfully inserted the prescription"})
    })
}

router.post("/readPrescription", readPrescription);
router.post("/writePrescription", writePrescription);
module.exports = router;