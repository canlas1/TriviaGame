$(document).ready(function() {
    console.log("ready!");

// user presses start button 
// screen switched to a trivia game and the user has a set amount of time
// trivia game starts
// user is prompted to answer several quetions
// questions are multiple choice
// create an array of question
// create an array of answers asscociated with each specific question
// if the answer is correct user gets 1 point
// if the answser is wrong the computer logs "incorrect" associated with that question 
// setup html with a header div jumbotron and separate div question pannels
// create a button that starts a timer
// set time to 1 minute to answer all question
function start(){
	var score = 0;
	var numQuestions = 7;


	var questions = {
		question1: "Who holds the record for the most victories in a row on the professional golf tour?",
		question2: "Which of the following items was owned by the fewest U.S. homes in 1990?",
		question3: "Who is third behind Hank Aaron and Babe Ruth in major league career home runs?",
		question4: "Which of these characters turned 40 years old in 1990?",
		question5: "In 1990, in what percentage of U.S. married couples did the wife earn more money than the husband?",
		question6: "In 1985, five percent of U.S. households had telephone answering machines. By 1990 what percentage of homes had answering machines?",
		question7: "What did the 'D' in 'D-Day' stand for?"
	}


	var ansArr = {
		question1: "c",
		question2: "b",
		question3: "c",
		question4: "a",
		question5: "b",
		question6: "c",
		question7: "b",
	}

	var answers = function(){
		console.log(this);
		var ansArr = function() {


		}
	}	
};
	questions.answers();




// var cat = {
//       name: "Gus",
//       color: "gray",
//       age: 15,

//       printInfo: function() {

//         // What will this print? ("Object")
//         console.log(this);

//         // What will this print? ("Name: Gus Color: gray Age: 15")
//         console.log("Name:", this.name, "Color:", this.color, "Age:", this.age);

//         var nestedFunction = function() {

//           // What will this print? ("Window")
//           console.log(this);

//           // What will this print? ("Name:  Color: undefined Age: undefined")
//           console.log("Name:", this.name, "Color:", this.color, "Age:", this.age);
//         };

//         nestedFunction();
//       }
//     };

//     // calls the printInfo function. Which subsequently calls the nestedFunction()
//     cat.printInfo();

// var x = setInterval(function() {

//     // var questions ={
//     // 	question1: "A","B","C","D"
//     // 	console.log(questions);








    } // end of var questions ojbect and method array







 




	var timer;
		$("#start").click(function() {
	    timer = setInterval(function(){$("#next").trigger("click");},"50000");
	    console.log(timer);
		});










});// end of $(document).ready(function() {
