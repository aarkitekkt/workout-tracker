const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    exercise: String,
    reps: Number,
    sets: Number
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;