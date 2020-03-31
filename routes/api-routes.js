const Workout = require("../models/workout.js")
const router = require("express").Router();



router.get("/api/workouts", function(req, res) {
    Workout.find()
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })
});

router.post("/api/workouts", function(req, res) {
    Workout.create({})
        .then(data => res.json(data))
        .catch(err => {
            console.log(err)
            res.json(err)
        })
});

router.put("/api/workouts/:id", function(req, res) {
    Workout.findByIdAndUpdate(
            req.params.id, { $push: { exercises: req.body } },
        )
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err);
        });
});

router.get("/api/workouts/range", (req, res) => {
    Workout.find({ day: { $gte: req.query.start, $lte: req.query.end } })
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err);
        });
});


module.exports = router