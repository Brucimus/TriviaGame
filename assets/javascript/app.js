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
var answeredCorrectly = "";

//stop timer function
function stopTimer() {
   clearInterval(intervalId);
}



//randomize questions
var randomizeQuestions = questionsAndAnswers[Math.floor(Math.random() * questionsAndAnswers.length)];
//set timer function
    intervalId = setInterval(decrement, 1000);
    // clearInterval(intervalId);

// setTimeout(questionTime, 1000 * questionTimeAmt);

// function questionTime() {

    // var temp = questionTimeAmt;
    //show time remaining
    //decrement function
    var temp = questionTimeAmt;
    function decrement() {
        temp--;
        $("#timeLeft").html("<h2>" + temp + "</h2>");
        if (temp === 0) {
            stop();
            alert("Time Up!");
        }
    }
    //display question using random number

    //loop through display corresponding answer possibilities

    //on click compare to correct answer index
        
        //if correct stop timer and display answered correctly
            
            //correct answer ++

        //if incorrect stop timer and display answered incorrectly and display correct answer
// }