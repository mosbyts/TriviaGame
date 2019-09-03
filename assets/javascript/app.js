var correctAnswers = 0;
var wrongAnswers = 0;
var Unanswered = 0;
var timerDisplay = 60;

        //GAME START//
//Timer will begin counting down
setTimeout(function countdown(){
    window.location.href = 'score.html';
 }, 60000);

//Displays the countdown to user
function countdownDisplay(){
    timerDisplay--;
    $("#timeLeft").text(timerDisplay);
};

window.setInterval(function(){
    countdownDisplay();
}, 1000);


        //GAME//
//Push number of correct choices to correctAnswers var
//Push number of wrong choices to wrongAnswers var
//Push number of unanswered to Unanswered var

        //GAME ENDS//
//Displays number of correct, wrong and unanswered
$("#correctAnswers").text(correctAnswers);
$("#wrongAnswers").text(wrongAnswers);
$("#Unanswered").text(Unanswered);