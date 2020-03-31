const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date
    },
    exercises: [{
        type: {
            type: String,
            required: "Enter an exercise type"
        },
        name: {
            type: String,
            required: "Enter an exercise name"
        },
        duration: {
            type: Number,
            required: "Enter an exercise duration in minutes"
        },
        weight: {
            type: Number,
            required: "Enter weight"
        },
        reps: {
            type: Number,
            required: "Enter amount of reps"
        },
        sets: {
            type: Number,
            required: "Enter amount of sets"
        },
        distance: {
            type: Number,
            required: "Enter distance"
        }
    }],
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;