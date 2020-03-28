let exercises = [];
let workouts = [];
let workoutTitle = [];
const exTable = $("#ExerciseTableBody");
const workoutSelector = $("#inputWorkout");
const workoutHeader = $("#workoutName");

getWorkoutsList();
getTableData();
// getWorkoutName();

$("#newWorkoutForm").on("submit", event => {

    event.preventDefault();

    var newWorkout = {
        workoutName: $("#workout").val().trim()
    }
    console.log(newWorkout);

    $.ajax("/api/workouts", {
        type: "POST",
        data: newWorkout
    }).then(() => {
        populateWorkoutName(newWorkout.workoutName);
        // $.ajax("/api/exercises", {
        //     type: "PUT"
    })
    // .then(() => {
    //     populateWorkoutName(newWorkout);
    // });
});

$("#selectWorkoutForm").on("submit", event => {

    event.preventDefault();

    var newWorkout = {
        workoutName: $("#inputWorkout").val()
    }

    populateWorkoutName(newWorkout.workoutName);
});


$("#exerciseForm").on("submit", event => {

    event.preventDefault();

    var newExercise = {
        exercise: $("#exercise").val().trim(),
        reps: $("#reps").val().trim(),
        sets: $("#sets").val().trim(),
        workoutName: $("#workoutName").html()
    }

    console.log(newExercise);

    $.ajax("/api/exercises", {
        type: "POST",
        data: newExercise
    }).then(function () {
        console.log("New Exercise Added!");
        getTableData();
    });
});

function getTableData() {
    fetch("/api/exercises")
        .then(response => response.json())
        .then(data => {
            exercises = data;
            console.log(exercises);
            populateExerciseTable(exercises);
        });
}

function getWorkoutsList() {
    fetch("/api/workouts")
        .then(response => response.json())
        .then(data => {
            workouts = data;
            console.log(workouts);
            populateWorkoutsSelector(workouts);
        })
}

function populateWorkoutName(name) {
    workoutHeader.html(name);
    console.log("Your workout is: " + name);
};

function populateWorkoutsSelector(wo) {
    for (let i = 0; i < wo.length; i++) {
        workoutSelector.append(
            `<option>${wo[i].workoutName}</option>`
        )
    };
};

function populateExerciseTable(ex) {
    exTable.empty();
    for (let i = 0; i < ex.length; i++) {
        exTable.append(
            `<tr>
            <td>${ex[i].exercise}</td>
            <td>${ex[i].reps}</td>
            <td>${ex[i].sets}</td>
            </tr>`
        )
    };
};
