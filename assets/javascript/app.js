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


    //  Variable that will hold our setInterval that runs the quizTime
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

    



   
    var correctAns = 0;
    var incorrectAns = 0;

    // below are my answers givin in an array of each question
    var question1Arr = question1.children[2];
    var question2Arr = question2.children[1];
    var question3Arr = question3.children[2];
    var question4Arr = question4.children[0];
    var question5Arr = question5.children[1];
    var question6Arr = question6.children[2];
    var question6Arr = question7.children[1];
 

    $("#correct").html("Correct Answers: " + correctAns);
    
    $("#wrong").html ("Wrong Answers: " + incorrectAns);
  
    // $("#myButton").on(click, onSubmit()){
    // var radioMatch = function() {
    
     // if (radio.checked === question1Arr){
     //         correctAns++;
     //     }
     

    
    

    
     
}); // !!!!!!!!!!!!!!!!!!!!END OF!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! $(document).ready(function()
    // var questions = {
    //     question1: "Who holds the record for the most victories in a row on the professional golf tour?",
    //     question2: "Which of the following items was owned by the fewest U.S. homes in 1990?",
    //     question3: "Who is third behind Hank Aaron and Babe Ruth in major league career home runs?",
    //     question4: "Which of these characters turned 40 years old in 1990?",
    //     question5: "In 1990, in what percentage of U.S. married couples did the wife earn more money than the husband?",
    //     question6: "In 1985, five percent of U.S. households had telephone answering machines. By 1990 what percentage of homes had answering machines?",
    //     question7: "What did the 'D' in 'D-Day' stand for?"
    //     }


    //   var ansArr = {
    //     answer1: "c",
    //     answer2: "b",
    //     answer3: "c",
    //     answer4: "a",
    //     answer5: "b",
    //     answer6: "c",
    //     answer7: "b"
    //   }
    

    //         if (question1.answer1){
    //             correctAns ++;
    //             }
    //             else{
    //             console.log("incorrect anwser")
    //             }
    //     }
     
    

   

     // var question1 = document.getElementById("question1");
     // var question2 = document.getElementById("question2");
     // var question3 = document.getElementById("question3");
     // var question4 = document.getElementById("question4");
     // var question5 = document.getElementById("question5");
     // var question6 = document.getElementById("question6");
     // var question6 = document.getElementById("question7");
     // console.log(question1);
    
   
     // var question1Arr = question1.children[2];
     // var question2Arr = question2.children[1];
     // var question3Arr = question3.children[2];
     // var question4Arr = question4.children[0];
     // var question5Arr = question5.children[1];
     // var question6Arr = question6.children[2];
     // var question6Arr = question7.children[1];

     // var radio = $( "input:checked" );
    

     // var radioMatch = function() {
    
     // if (radio.checked === question1Arr){
     //         correctAns++;
     //     }
     

     // var parsChildren = function() {
     //  for (var i = 0; i < question1Arr.length; i++) {
     //         console.log(question1Arr[i]);
     //         if (question1Arr[i].checked) {
     //             correctAns++;
     //         else{
     //             console.log("incorrect")
     //         }
     //             console.log("i am checked");

     //             console.log(question1Arr[i]);

     //         }
     //     }
     // }

     // parsChildren()


 



//     var correctAns1 = getElementById("a3")
//     if (correctAns1 === true){
//         score++
//         console.log("score is adding!!!");
//     }
//     else{
//         console.log("this is incorrectAns")
//     }
// }




// function onSubmit() {
//         var q1 = document.getElementsByName("q1");
//         var answer;
//         for (var i = 0; i < q1.length; i++) {
//             if (q1[i].checked === true) { answer = q1[i].value;
//                 break } }
//         if (answer === "1") { console.log("correct") } else { console.log("incorrect") } };





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


    // function onSubmit() {
    //     var answerArr = [1];
    //     var correctAns = ["1"];
    //     var wrongAnswers = 0;
    //     var userScore = 0;
    //     var radios = getElementsByName()
    //     $(".correct").html("Correct Answers: " + userScore);
    //     $(".wrong").html("Wrong Answers: " + wrongAnswers);
    //     for (var i = 0; i < correctAns.length; i++) {


    //         if (radio.value === correctAns && radio.checked) {
    //             userScore++
    //         } else if (radio.value === "wrong" && radio.checked) {
    //             wrongAnswers++


    //         }


    //         $("#myButton").on("click") // my button on click jQuery
    //         console.log("this is working BUTTON");
    //         //     parsChildren()
    //         console.log(this)

    //     }
    // }
    // var getElementById = function() {
    //     for (var i = 1; i < 11; i++) {
    //         var radios = document.getElementsByName("q" + i);
    //         for (var j = 0; j < radios.length; j++) {
    //             var radio = radios[j];
    //             if (radio.value == "correct" && radio.checked) {
    //                 correctAnswers++
    //             } else if (radio.value == "wrong" && radio.checked) {
    //                 wrongAnswers++

    //             }

    //         }
    //     }
    // }


    // $('.correct').html("Correct Answers: " + correctAnswers);
    // $('.wrong').html("Wrong Answers: " + wrongAnswers);
    // $('.unanswered').html("Not Answered: " + unanswered);

    // onSubmit()

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
    
    

    // function onSumbit(){
    
     

    // var questions = {
    //     question1: "Who holds the record for the most victories in a row on the professional golf tour?",
    //     question2: "Which of the following items was owned by the fewest U.S. homes in 1990?",
    //     question3: "Who is third behind Hank Aaron and Babe Ruth in major league career home runs?",
    //     question4: "Which of these characters turned 40 years old in 1990?",
    //     question5: "In 1990, in what percentage of U.S. married couples did the wife earn more money than the husband?",
    //     question6: "In 1985, five percent of U.S. households had telephone answering machines. By 1990 what percentage of homes had answering machines?",
    //     question7: "What did the 'D' in 'D-Day' stand for?"
    //     }


    //   var ansArr = {
    //     answer1: "c",
    //     answer2: "b",
    //     answer3: "c",
    //     answer4: "a",
    //     answer5: "b",
    //     answer6: "c",
    //     answer7: "b"
    //   }

    //     if (question1.answer1){
    //         score ++;
    //         }
    //         else{
    //         console.log("incorrect anwser")
    //         }
    // }
     
    //  console.log(onSubmit())

   

