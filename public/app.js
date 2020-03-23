let exercises = [];
let workoutTitle = [];
const exTable = $("#ExerciseTableBody");
const workoutHeader = $("#workoutName");

getTableData();
getWorkoutName();

$("#workoutForm").on("submit", event => {
    event.preventDefault();

    var newWorkout = {
        workoutName: $("#workout").val().trim()
    }
    console.log(newWorkout);

    $.ajax("/api/workouts", {
        type: "POST",
        data: newWorkout
    }).then(() => {
        $.ajax("/api/exercises", {
            type: "PUT"
        })
        // console.log(newWorkout.workoutName + " time to get shredded!");
    });
});

$("#exerciseForm").on("submit", event => {

    var newExercise = {
        exercise: $("#exercise").val().trim(),
        reps: $("#reps").val().trim(),
        sets: $("#sets").val().trim()
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

function getWorkoutName() {
    fetch("/api/workouts")
        .then(response => response.json())
        .then(data => {
            workoutTitle = data;
            console.log(workoutTitle);
            workoutHeader.html(workoutTitle[0].workoutName);
        });
}

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
