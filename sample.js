// Create initial state object

var state = {

    questions: [{
        questionNumber: 1,
        questionText: "What is the home town of the Simpsons?",
        questionAnswers: ["Washington", "Hollywood", "Springfield", "Pasadena"],
        correctAnswer: "2",
        correctAnswerText: "Springfield.",
    }, {
        questionNumber: 2,
        questionText: "Who is Homer's wife?",
        questionAnswers: ["Marge", "Peggy", "Mary", "Susan"],
        correctAnswer: "0",
        correctAnswerText: "Marge.",
    }, {
        questionNumber: 3,
        questionText: "How many months does it take to create a Simpsons episode?",
        questionAnswers: ["1", "2", "4", "6"],
        correctAnswer: "3",
        correctAnswerText: "6 months.",
    }, {
        questionNumber: 4,
        questionText: "What is the family dog's name?",
        questionAnswers: ["Santa's Little Helper", "Mr. Tiddlywinks", "Geronimo", "Brea the Breather"],
        correctAnswer: "0",
        correctAnswerText: "Santa's Little Helper.",
    }, {
        questionNumber: 5,
        questionText: "How many children are in the Simpson family?",
        questionAnswers: ["6", "2", "3", "5"],
        correctAnswer: "2",
        correctAnswerText: "3.",
    }],

    score: 0,
    correctAnsMsg: "Cowabunga!",
    wrongAnsMsg: "Doh!",
    counter: 0
};

// State manipulation functions

//To ensure an answer's been chosen and we're evaluating the correct question/answer pair.

function answerMatchesQuestion() {
    if (!($("input[type='radio'][name='answer']:checked").val())) {
        toastr.error("Please select an answer");
        return false;
    } else if (state.counter === 0) {
        checkAnswer(state, 0);
        renderNextQuestion();
    } else if (state.counter === 4) {
        checkAnswer(state, 4);
        score = state.score;
        renderFinalPage();
        resetCounter();
        resetScore();
    } else {
        checkAnswer(state, state.counter);
        renderNextQuestion();
    }
}

//Is the answer choice correct?  

function checkAnswer(state, index) {
    if ($("input[type='radio'][name='answer']:checked").val() === state.questions[index].correctAnswer) {
        showCorrectAnswerMessage();
        state.counter++;
        state.score++;
    } else {
        showIncorrectAnswerMessage();
        state.counter++;
    }
}

//Resets the counter

function resetCounter() {
    state.counter = 0;
}

//Resets the score

function resetScore() {
    state.score = 0;
}

//WIP - Radio Button Validation using JS
// function validateRadios() {
//   var radioButtons = document.getElementsByName('answer');
//     for (var i = 0; i < radioButtons.length; i++) {
//         if (radioButtons[i].checked) {
//             return true;
//         }
//         else {
//             alert("Please choose answer");
//             return false;
//         }
//     }
// }

//WIP - Radio Button Validation using jquery  

// $("input").prop('required', true);
// $("#myform").validator();

// jQuery.validator.setDefaults({
//     debug: true,
// //     success: "valid"
// // });
//         $("#myform").validate({
//             rules: {
//             answer1: {
//             require_from_group: [1, ".answer"]
//             }
//         //     // home_phone: {
//         //     // require_from_group: [1, ".phone-group"]
//         //     // },
//         //     // work_phone: {
//         //     //  require_from_group: [1, ".phone-group"]
//         //     // }
//         }
//         });


// // Render functions

//Hides Start Page and Renders Question Page

function advanceToQuizFromStartPage() {
    $('#div2').removeClass("hidden");
    $('#div1').addClass("hidden");
}

//Renders Question and Answers after advancing past Start Page

function createQuizItems(state, index) {
    // Renders question text, player progress, and player score.
    $('.question').html(state.questions[index].questionText);
    $('.progress').html("Progress: " + state.questions[index].questionNumber + " of 5");
    $('.score').html("Score: " + state.score);

    // Renders answer choice text inside of form label elements.
    $('.first-answer').html(state.questions[index].questionAnswers[0]);
    $('.second-answer').html(state.questions[index].questionAnswers[1]);
    $('.third-answer').html(state.questions[index].questionAnswers[2]);
    $('.fourth-answer').html(state.questions[index].questionAnswers[3]);
}

//Renders Correct Answer Message

function showCorrectAnswerMessage() {
    toastr.success(state.correctAnsMsg);
}

//Renders Incorrect Answer Message    

function showIncorrectAnswerMessage() {
    toastr.error(state.wrongAnsMsg + " Mr. Burns said the answer was " + state.questions[state.counter].correctAnswerText);
}

//Clears Radio Button and Renders Next Item Set

function renderNextQuestion() {
    $('input').prop('checked', false);
    createQuizItems(state, state.counter);
}

//Renders Final Page with Score and Option to Start Over 

function renderFinalPage(state, index) {
    // Renders Feedback page and Start Over Button, Hides Questions Form 
    $('#div3').removeClass("hidden");
    $('#div2').addClass("hidden");

    // Render Score on Feedback page. 
    $('.overall-score').html("Have a Duff. You correctly answered " + score + " of 5 questions!");
}

//Hides Final Page and Renders Question Page

function advanceToBeginningFromEnd() {
    $('input').prop('checked', false);
    $('#div1').removeClass("hidden");
    $('#div3').addClass("hidden");
}

// Event handlers

// When start button is clicked.
$('#startButton').click(function(event) {
    event.preventDefault();
    advanceToQuizFromStartPage();
    createQuizItems(state, 0);
});

// When answer submit button is selected.
$('#submitButton').click(function(event) {
    event.preventDefault();
    answerMatchesQuestion();
});

// Restart button
$('.restart').click(function(event) {
    event.preventDefault();
    advanceToBeginningFromEnd();
});