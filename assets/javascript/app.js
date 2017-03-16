$(document).ready(function() {
    console.log("ready!");



    // var body = document.getElementsByTagName("body");
    // console.log(body);
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
    // hit submit to get score


    //  Variable that will hold our setInterval that runs the stopwatch
    var intervalId;

    $("#start").click(function() { // when you click start do this code this is annonymus function
        $("#container").show(); // show the questions
        quizTime.start();
    });

    var quizTime = {
        time: 60,

        reset: function() {
            quizTime.time = 60;
            // DONE: Change the "display" div to "00:00."
            $("#display").html("01:00");
        },

        start: function() {
            console.log("starting timer");
            // DONE: Use setInterval to start the count here.
            intervalId = setInterval(quizTime.decrement, 1000);
        },

        stop: function() {
            // DONE: Use clearInterval to stop the count here.
            clearInterval(intervalId);
        },

        decrement: function() {
            console.log(quizTime.time);
            // DONE: increment time by 1, remember we cant use "this" here.
            quizTime.time--;
            if (quizTime.time === 0) {
                quizTime.stop();
            }

            // DONE: Get the current time, pass that into the quizTime.timeConverter function,
            //       and save the result in a variable.
            var converted = quizTime.timeConverter(quizTime.time); //taking the time in seconds and calls timeConverter function which is a method inside of quizTIme
            console.log(converted);

            // DONE: Use the variable we just created to show the converted time in the "display" div.
            $("#display").html(converted);
        },

        timeConverter: function(t) {
            var minutes = Math.floor(t / 60);
            var seconds = t - (minutes * 60);
            if (seconds < 10) {
                seconds = "0" + seconds;
            }
            if (minutes === 0) {
                minutes = "00";
            } else if (minutes < 10) {
                minutes = "0" + minutes;
            }
            return minutes + ":" + seconds;
        }
    }; //closes quizTime
    console.log(quizTime);


    console.log("does this work")





    
    // console.log(this.type)
    // console.log(this.id)

    // function onSubmit(){ //when user hits submit once quiz is complete
    //     var userScore = 0;
    //     var correctAns = ["1"]

    // var q1 = document.forms["quiz"]["q1"].value;
    // var q2 = document.forms["quiz"]["q2"].value;
    // var q3 = document.forms["quiz"]["q3"].value;
    // var q4 = document.forms["quiz"]["q4"].value;
    // var q5 = document.forms["quiz"]["q5"].value;
    // var q6 = document.forms["quiz"]["q6"].value;
    // var q7 = document.forms["quiz"]["q7"].value;

    // console.log (q1);
    // console.log (q2);
    // console.log (q3);
    // console.log (q4);
    // console.log (q5);

    // $("#score").html 
    // if (correctAns.checked) === q1.answersArr[2]{
    //     userScore++;
    // }
    // }
// var answerArr = [1]    
// var correctAns = ["1"];
    
 
    function onSubmit() {

        var correctAns = 0;
        var wrongAnswers = 0;
        $(".correct").html("Correct Answers: " + correctAns);
        $(".wrong").html("Wrong Answers: " + wrongAnswers);
        for (var i = 0; i < correctAns.length; i++) {

            var radios = $(".name")
            if (radio.value === "[1]" && radio.checked) {
                correctAns++
            } else if (radio.value === "wrong" && radio.checked) {
                wrongAnswers++


            }


     $("#myButton").on("click") // my button on click jQuery
    console.log("this is working BUTTON");
    //     parsChildren()
    console.log(this)

        }
    }

        

       //   $(".answer").click(function){ //from the radio input
       // answer += parseInt($(this).attr("value"));}
       


        

        


    // }
    //     console.log(onSubmit());


    // });



    // var question1 = document.getElementById("question1");
    // console.log(question1);
    // console.log(question1.children[1].children);

    // if (correctAns.checked === question1.children[1].children) {
    //         userScore++;
    //     }


    // var question2Arr = question2.children[1].children;
    // var question3Arr = question3.children[1].children;
    // var question4Arr = question4.children[1].children;
    // var question5Arr = question5.children[1].children;
    // var question6Arr = question6.children[1].children;
    // var question6Arr = question7.children[1].children;


    // var parsChildren = function() {
    //  for (var i = 0; i < question1Arr.length; i++) {
    //         console.log(question1Arr[i]);
    //         if (question1Arr[i].checked) {
    //             console.log("i am checked");
    //             console.log(question1Arr[i]);

    //         }
    //     }
    // }

    // parsChildren()



    // if (correctAns.checked === true){
    //   console.log("the answer is correct")

    // }
    // else{
    //   console.log("NOT RIGHT!!")
    // }



    // function start(){
    //  var score = 0;
    //  var numQuestions = 7;


    //  var questions = {
    //    question1: "Who holds the record for the most victories in a row on the professional golf tour?",
    //    question2: "Which of the following items was owned by the fewest U.S. homes in 1990?",
    //    question3: "Who is third behind Hank Aaron and Babe Ruth in major league career home runs?",
    //    question4: "Which of these characters turned 40 years old in 1990?",
    //    question5: "In 1990, in what percentage of U.S. married couples did the wife earn more money than the husband?",
    //    question6: "In 1985, five percent of U.S. households had telephone answering machines. By 1990 what percentage of homes had answering machines?",
    //    question7: "What did the 'D' in 'D-Day' stand for?"
    //  }


    //  var ansArr = {
    //    question1: "c",
    //    question2: "b",
    //    question3: "c",
    //    question4: "a",
    //    question5: "b",
    //    question6: "c",
    //    question7: "b",
    //  }

    //  var answers = function(){
    //    console.log(this);
    //    var ansArr = function() {


    //    }
    //  } 
    // };





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







    // end of var questions ojbect and method array




















}); // end of $(document).ready(function() {
