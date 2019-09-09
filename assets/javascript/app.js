                //*GAME LOAD*//

//Sets timer to 60 and answer variables equal to zero.
var timerDisplay = 60;

//Hides trivia game
$("#triviaGame").hide();

//Hides score
$("#endGame").hide();

                //*GAME START*//
//Hides game instructions and shows trivia game when user clicks to start game.
$("#startGame").click(function(){
        $("#gameStart").hide();
        $("#triviaGame").show();
//Changes from trivia game to score when time runs out
setTimeout(function countdown(){
        $("#triviaGame").hide();
        $("#endGame").show();
        checkAnswers();
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
});

                //*GAME*//

//Checks the players selected answers for accuracy and to store variables.
function checkAnswers(){
        var correctAnswer = 0;
        var wrongAnswer = 0;
        var Unanswered = 0;
        for(var i = 1; i < 9; i++){
                var Q = $("#Q" + i + " input[type='radio']:checked").val(); 
        
                if (Q === "0"){
                        wrongAnswer++;
                } else if (Q === "1"){
                        correctAnswer++;
                };

                if (Q == undefined){
                        Unanswered++;
                };
        }
        //console.log("Number Correct: " + correctAnswer + 
        //"Number Wrong: " + wrongAnswer +
        //"Unanswered: " + Unanswered);
//Displays number of correct, wrong and unanswered to front-end/HTML.
        $("#correctAnswers").text(correctAnswer);
        $("#wrongAnswers").text(wrongAnswer);
        $("#Unanswered").text(Unanswered);
};

window.setInterval(function(){
        checkAnswers();
    }, 1000);

        //*GAME END*//

//Hides other page divs and shows final score div.
$("#submitTrivia").click(function(){
        $("#gameStart").hide();
        $("#triviaGame").hide();
        $("#endGame").show();
//Displays number of correct, wrong and unanswered to front-end/HTML.
        $("#correctAnswers").text(correctAnswer);
        $("#wrongAnswers").text(wrongAnswer);
        $("#Unanswered").text(Unanswered); 
});
