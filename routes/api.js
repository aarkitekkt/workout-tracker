const router = require("express").Router();
const Exercise = require("../models/exercises.js");
const Workout = require("../models/workouts.js");


router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
        .then(workoutDB => {
            console.log(workoutDB);
            res.status(200).json(workoutDB);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.post("/api/exercises", ({ body }, res) => {

    console.log("Adding " + body.exercise + " to " + body.workoutName);

    Exercise.create({ exercise: body.exercise, reps: body.reps, sets: body.sets })
        .then(({ _id }) => Workout.findOneAndUpdate({ workoutName: body.workoutName }, { $push: { exercises: _id } }, { new: true }))
        .then(workoutDB => {
            console.log(workoutDB);
            res.status(200).json(workoutDB);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

// router.put("/api/exercises", (req, res) => {
//     Exercise.deleteMany({})
//         .then(workoutDB => {
//             res.status(200).json(workoutDB);
//         })
//         .catch(err => {
//             res.status(400).json(err);
//         });
// });

router.get("/api/workouts", (req, res) => {
    Workout.find({})
        .then(workoutDB => {
            res.json(workoutDB);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("/api/workouts/:workoutName", (req, res) => {
    Workout.find({ workoutName: req.params.workoutName })
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