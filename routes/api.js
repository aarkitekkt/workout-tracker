const router = require("express").Router();
const Exercise = require("../models/exercises.js");
const Workout = require("../models/workouts.js");


router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
        .then(workoutDB => {
            console.log(workoutDB);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.post("/api/exercises", ({ body }, res) => {
    Exercise.create(body)
        .then(({ _id }) => Workout.findOneAndUpdate({}, { $push: { exercises: _id } }, { new: true }))
        .then(workoutDB => {
            console.log(workoutDB);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("/api/workouts", (req, res) => {
    Workout.find({})
        .then(workoutDB => {
            res.json(workoutDB);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("/api/exercises", (req, res) => {
    Exercise.find({})
        .then(workoutDB => {
            res.json(workoutDB);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("/api/getshredded", (req, res) => {
    Workout.find({})
        .populate("exercises")
        .then(workoutDB => {
            res.json(workoutDB);
        })
        .catch(err => {
            res.status(400).json(err);
        })
});

module.exports = router;