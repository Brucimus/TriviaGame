//variables
var questionTimeAmt = 15;
var intervalID;
var questionsAndAnswers = [
    Q1 = {
        questions: "What is the answer to life, the universe, and everything?",
        possibleAnswers: [
            "Love",
            "42",
            "There is none.",
            "Jesus"
        ],
        correctAnswer: "42"
    },
    Q2 = {
        questions: "What is the airspeed velocity of an unladen swallow?",
        possibleAnswers: [
            "24 mph",
            "36 mph",
            "African or European Swallow?",
            "It's only a flesh wound."
        ],
        correctAnswer: "African or European Swallow?"
    },
    Q2 = {
        questions: "Hello in there. Hey! What's so important? What you got here that's worth living for?",
        possibleAnswers: [
            "To Blave",
            "Mutton, Lettuce, and Tomato Sandwich",
            "True Love",
            "Humperdinck"
        ],
        correctAnswer: "True Love"
    }
];
var answeredCorrectly = 0;
var questionIteration = 0;
var listedQuestion;

//stop timer function
function stopTimer() {
   clearInterval(intervalId);
}

//Clear Elements Function
function clear() {
    $("#timeLeft").empty();
    $("#questionDisplay").empty();
    $("#answersContainer").empty();
    $("#answerResult").empty();
}



//go to next question
function nextQuestion() {
    setTimeout(redisplay, 1000 * 5);
    console.log("something");
    // debugger;
}

// what happens upon timeout
function timeOutFunc () {
    $("#answerResult").html("Time's up. The correct answer is: " + listedQuestion.correctAnswer);
        questionIteration++;
        temp = questionTimeAmt;
        nextQuestion();
}

    //show time remaining
    //decrement function
    var temp = questionTimeAmt;
    function decrement() {
        temp--;
        $("#timeLeft").html("<h2>" + temp + "</h2>");
        if (temp === 0) {
            stopTimer();
            timeOutFunc();
        }
    }

function redisplay() {
    //randomize questions

    //clear display
    clear();
    if ( questionIteration === questionsAndAnswers.length) {

        $("#questionDisplay").html("<h2>You got " + answeredCorrectly + "/" + questionsAndAnswers.length + "</h2>");
    }
    else {
        //set timer function
        intervalId = setInterval(decrement, 1000);
        listedQuestion = questionsAndAnswers[questionIteration];
        //display question using random number
        $("#questionDisplay").html(questionsAndAnswers[questionIteration].questions);
        $("#timeLeft").html("<h2>" + questionTimeAmt + "</h2>");
        //loop through display corresponding answer possibilities
        for (var i = 0; i < listedQuestion.possibleAnswers.length ; i++) {
            var holder = $("<ul>" + listedQuestion.possibleAnswers[i] + "</ul>");
            holder.attr({
                "id": i
            })
            holder.addClass('answer');
            $("#answersContainer").append(holder);
        }

        onClickFunc();
    }
}

redisplay();

function onClickFunc() {
    //on click compare to correct answer index
    $(".answer").on("click", function() {
        
        //if correct stop timer and display answered correctly
        if (listedQuestion.possibleAnswers[document.getElementById(this.id).id] === listedQuestion.correctAnswer) {

        //correct answer ++
        $("#answerResult").html("CORRECT!");
        answeredCorrectly++;
        stopTimer();
        questionIteration++;
        temp = questionTimeAmt;
        nextQuestion();
        }

        //if incorrect stop timer and display answered incorrectly and display correct answer
        else {
        $("#answerResult").html("Incorrect. The correct answer is: " + listedQuestion.correctAnswer);
        stopTimer();
        questionIteration++;
        temp = questionTimeAmt;
        nextQuestion();
        }
    });
}