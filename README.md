# Workout-Tracker

Repository: https://github.com/aarkitekkt/workout-tracker

Deployed: https://aarkitekkt-workout.herokuapp.com/

## Overview
​
The purpose of this application is to track your workouts by logging the exercise information for a given workout.  Information from a previous workout can be recalled, or a new workout can be created.

### Gallery
​
Select Workout:
![Home](/public/assets/screengrabs/selectWorkout.gif "Select Workout")

Create New Workout:
![Home](/public/assets/screengrabs/newWorkout.gif "New Workout")

Responsive:
![Home](/public/assets/screengrabs/responsive.gif "Responsive")


​
### Problem

A challenge faced with this application was figureing out how to take a single exercise and put it into the correct workout object in the database.  This was difficult because values from both the exercise and workout collections were needed to populate the exercise into the correct workout in a single POST request.

### Solution
​
The solution I found was use jquery to determine the name of the workout and add that name to the exercise object that made up the body of the POST request. When writing the route for this specific request, I was then able to seperate the speicfic values from the object and put them into the query as needed to complete the task without having to make multiple API calls.

## Tech and Features Used
​
* MongoDB
* Mongoose
* Express npm
* Morgan npm
* Heroku
* Node JS
* Bootstrap
* CSS
* Jquery
​
## How to use
​
From the home page use the form to select a previous workout or type in a new workout and click the button to get started.  Once your workout is loaded, use the 'new exercise' form to add an exercise to the current workout. 

## Technical Overview
​
1. When the page is loaded, a function runs to retrieve all of the existing workouts from the database and populate the selection form.  
2. If a workout is selected from the form, a function makes an API call and retrieves the exercises associated with that workout and loops through the exercises, creates a new table row for each exercise populates the table with the exercise data.
3. When a new workout is submitted, jQueryis used to grab the workout name from the form and makes a POST request to create a new workout in the database. 
4. When a new exercise is submitted from the form, jQuery is used to grab the exercise data, and the workout name.  This data is used to make a request to the database.  The workout name us used to query the database to find the specific workout which is then populated with the exericse data gathered from the form.
5. Once the new exercise is created in the database, the function to populate the table runs and shows the newly added exercise.
6. If a different workout is selected, the table data is replaced with the exercise data for the new workout.
