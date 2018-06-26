//variables
var questionTimeAmt = 15;
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

//randomize questions
var randomizeQuestions = questionsAndAnswers[Math.floor(Math.random() * questionsAndAnswers.length)];
//set timer function
// setTimeout(questionTime, 1000 * questionTimeAmt);
setTimeout(displayTime, 1000);

// function questionTime() {

    var temp = questionTimeAmt;
    //show time remaining
    for (var i = temp; temp > 0; temp--) {
    function displayTime() {
        $("#timeLeft").html("<h2>" + temp + "</h2>");
        console.log(temp);
        temp--;
      }
    }
    //display question using random number

    //loop through display corresponding answer possibilities

    //on click compare to correct answer index
        
        //if correct stop timer and display answered correctly
            
            //correct answer ++

        //if incorrect stop timer and display answered incorrectly and display correct answer
// }