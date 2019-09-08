var timerDisplay = 60;
        //GAME START - index.html//

//Changes from trivia window to score window when time runs out
setTimeout(function countdown(){
    window.location.href = 'score.html';
 }, 60000);

//Decreases the timer by one and displays the timer countdown to user
function countdownDisplay(){
        timerDisplay--;
        $("#timeLeft").text(timerDisplay);
};

//Refreshes the timer countdown function every second
window.setInterval(function(){
    countdownDisplay();
}, 1000);

                //GAME - trivia.html//



function checkAnswers(){
        var correctAnswer = 0;
        var wrongAnswer = 0;
        var Unanswered = 0;
        for(var i = 1; i < 9; i++){
                var Q = $("#Q" + i + " input[type='radio']:checked").val();
                console.log(Q);  
        
                if (Q === "0"){
                        wrongAnswer++;
                } else if (Q === "1"){
                        correctAnswer++;
                }
        }
        console.log("Wrong " + wrongAnswer + "Correct " + correctAnswer);
        sessionStorage.setItem("correctAns", correctAnswer);
        sessionStorage.setItem("wrongAns", wrongAnswer);
};
        


function test(){
        var Q1 = $("#Q1 input[type='radio']:checked").val();
        var Q2 = $("#Q2 input[type='radio']:checked").val();
        var Q3 = $("#Q3 input[type='radio']:checked").val();
        checkAnswers();
};



        //GAME ENDS -score.html//
        
//Displays number of correct, wrong and unanswered
var correctAnswers = sessionStorage.getItem("correctAns");
var wrongAnswers = sessionStorage.getItem("wrongAns");
$("#correctAnswers").text(correctAnswers);
$("#wrongAnswers").text(wrongAnswers);
$("#Unanswered").text(Unanswered);