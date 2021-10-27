var schedule = require("./schedule_model");
var router = require("express").Router();

const getSchedule = (req, res) => {
    schedule.findSchedules((error, schedules) => {
        if (error) console.log(error);
        res.json(schedules);
    });
};

router.get("/schedule", getSchedule);

module.exports = router;