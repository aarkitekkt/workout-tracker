$("#workoutForm").on("submit", event => {
    event.preventDefault();

    var newWorkout = {
        workoutName: $("#workout").val().trim()
    }
    console.log(newWorkout);

    $.ajax("/api/workouts", {
        type: "POST",
        data: newWorkout
    })
        .then(newWorkout => {
            console.log(newWorkout.workoutName + " time to get shredded!")
        });
});

$("#exerciseForm").on("submit", event => {
    event.preventDefault();

    var newExercise = {
        exercise: $("#exercise").val().trim(),
        reps: $("#reps").val().trim(),
        sets: $("#sets").val().trim()
    }
    console.log(newExercise);

    $.ajax("/api/exercises", {
        type: "POST",
        data: newExercise
    })
        .then(() => {
            console.log("New Exercise Added!")
        });
});