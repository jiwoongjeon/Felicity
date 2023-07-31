const prescription = require("./prescription_model");
var router = require("express").Router();

function readPrescription(req, res) {
    const rid = req.body.rid;
    const pid = req.body.pid;
    const did = req.body.did;
    
    prescription.readPrescription([rid, pid, did], (err, result) => {
        if (err) {
            console.log(err);
            res.json({ errMsg: "Error: Failed on reading prescription." });

        }
        res.json({ res: result, Msg: "Successfully read the prescription"})
    })
}

function writePrescription(req, res) {
    console.log(req.body)
    const rid = req.body.rid;
    const pid = req.body.pid;
    const did = req.body.did;
    const department = req.body.department;
    const date = req.body.date;
    const medicine = req.body.medicine;
    const amount = req.body.amount;
    const drugRoute = req.body.drugRoute;
    const caution = req.body.caution;
    
    prescription.writePrescription([rid, pid, did, department, date, medicine, amount, drugRoute, caution], (err, result) => {
        if (err) {
            console.log(err);
            res.json({ errMsg: "Error: Failed on writing prescription." });
        }
        res.json({Msg: "Successfully inserted the prescription"})
    })
}

function readDepartment(req, res) {
    const did = req.body.doctorId;
    prescription.readDepartment(did, (err, result) => {
        if(err) {
            console.log(err);
            res.json({errMsg: "Error: Failed on reading reservation based on the rid"});
        }
        res.json(result);
    })
}
router.post("/readPrescription", readPrescription);
router.post("/writePrescription", writePrescription);
router.post("/readDepartment", readDepartment);
module.exports = router;