

$(document).ready(function() {});
$('.button').click(function(){   
	alert("You have clicked the Products button, at this moment I don't do shit") 
	  });﻿


$('.aboutbutton').click(function(){   
	alert("You have clicked the about button, at this moment I don't do shit") 
	  });﻿

$('.loginbutton').click(function(){   
	alert("You have clicked the Login button, at this moment I don't do shit") 
	
	  });﻿




//==============THE QUIZ APP GAME -- Second Version ==========
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
    counter: 0};

$('#startgame').click(function(event){  
 event.preventDefault(); 
	$( "#game" ).addClass( "hidden" );
	$( "#gametext" ).addClass( "hidden" );
	$( "#startgame" ).addClass( "hidden" );
	$( "#questions" ).removeClass( "hidden" );
	$( "#Loopgame" ).addClass( "hidden" );
	createQuizItems(state, 0);
	  });﻿

function createQuizItems(state, index) {
    // Renders question text, player progress, and player score.
    $('.question').html(state.questions[index].questionText);
    $('.progress').html("Progress: " + state.questions[index].questionNumber + " of 5");
    $('.score').html("Score: " + state.score);

    // Renders answer choice text inside of form label elements.
    $('.first-answer').html(state.questions[index].questionAnswers[0]);
    $('.second-answer').html(state.questions[index].questionAnswers[1]);
    $('.third-answer').html(state.questions[index].questionAnswers[2]);
    $('.fourth-answer').html(state.questions[index].questionAnswers[3]);}

$('#submit').click(function(event){  
 event.preventDefault(); 
 checkanswer(state, state.counter);
 createQuizItems(state, state.counter);
 $('input').prop('checked', false);

	
	  });﻿

function checkanswer(state, index) {
    if (!$('input[name="selection"]:checked').val()) {
        
        return alert("please select an answer, before clicking submit");
        
    } else if (state.counter < 4 && $('input[name="selection"]:checked').val() === state.questions[index].correctAnswer) {
        state.counter++;
        state.score++;
        return alert("RIGHT");

    } 

    else if (state.counter === 4 && $('input[name="selection"]:checked').val() === state.questions[index].correctAnswer) {
        state.score++;
        $( "#Loopgame" ).removeClass( "hidden" );
        $( "#submit" ).addClass( "hidden" );
        $( "#form" ).addClass( "hidden" );
        $( "#mainquestion" ).addClass( "hidden" );
        $( ".progress" ).addClass( "hidden" );
        return alert("Game is done. Your final score is " + state.score + " out of 5" );


    } 

     else if (state.counter === 4 && $('input[name="selection"]:checked').val() != state.questions[index].correctAnswer) {
        $( "#Loopgame" ).removeClass( "hidden" );
        $( "#submit" ).addClass( "hidden" );
        $( "#form" ).addClass( "hidden" );
        $( "#mainquestion" ).addClass( "hidden" );
        $( ".progress" ).addClass( "hidden" );
        return alert("Game is done. Your final score is " + state.score + " out of 5");
   

    } else {
        state.counter++;
        return alert("WRONG");

    }}


$('#Loopgame').click(function(event){  
 event.preventDefault(); 
 loopsthegame();

   });﻿

function loopsthegame (){

	$( "#game" ).removeClass( "hidden" );
	$( "#gametext" ).removeClass( "hidden" );
	$( "#startgame" ).removeClass( "hidden" );
	$( "#questions" ).addClass( "hidden" );
	$( "#submit" ).removeClass( "hidden" );
	$( "#form" ).removeClass( "hidden" );
    $( "#mainquestion" ).removeClass( "hidden" );
    $( ".progress" ).removeClass( "hidden" );
   state.counter = 0;
   state.score = 0;
}










// ======================    CONNECTING TO AN QUANDL API ===================================


var OMDB_BASE_URL = 'https://www.quandl.com/api/v3/datasets/CMHC/HSDAA_BC.json?api_key=Uu3sLNQAgkN4NCQsFoGH';
function getDataFromApi(searchTerm, callback) {
     var query = { }
  $.getJSON(OMDB_BASE_URL, query, callback);
}

function displayOMDBSearchData(data) {
    var query = $('.js-query').val();

    var noResults = true;
    for (var i = 0; i < data.dataset.data.length; i++) {
            if (data.dataset.data[i][0] === query) {

				
                $('.js-search-results').html('Total Homes sold    ' + data.dataset.data[i][5]);
                $('.js-search-results1').html('Total Single Family Homes sold   ' + data.dataset.data[i][1] + '<img src="Icon_home_renovation-01.png" />' );
                $('.js-search-results2').html('Total Semi-Detatched Homes sold   ' + data.dataset.data[i][2] + '<img src="Icon_home_renovation-02.png" />');
                $('.js-search-results3').html('Total Apartments Homes sold   ' + data.dataset.data[i][4] + '<img src="Icon_home_renovation-04.png" />');
                $('.js-search-results4').html('Total number of Row Homes sold ' + data.dataset.data[i][3] + '<img src="Icon_home_renovation-03.png" />');
                noResults = false;
            }

    }
    if (noResults == true) { 
    	
                $('.js-search-results').html('Sorry, no available results for ' + query );
                $('.js-search-results1').html(' ');
                $('.js-search-results2').html(' ');
                $('.js-search-results3').html(' ');
                $('.js-search-results4').html(' ');

    }}


function watchSubmit() {
    $('.js-search-form').submit(function(e) {
        e.preventDefault();
        var query = $('.js-query').val();
        $('.js-query').prop('clear', false);
        getDataFromApi(query, displayOMDBSearchData);
    });}
watchSubmit();





// ===========================   EXERSICE =====================================


$(function(){
      cycle();
      
      $('body :not(.nav), i:not(.ion-navicon)').click(function(){
      });

      function cycle(){
        var x = 0;
        setInterval(language, 5000);
        function language(){
          $('.hello').fadeOut(1000, function(){
            $(this).text(hello[x + 1]);
            $(this).fadeIn(1000);
            x++;        
            if (x > hello.length - 2) {
              x = -1;
            }
          }
        )};
      }
      var hello = [
        'Hello.',
        'Aloha.',
        'Bonjour.',
        'Hola.',
        'Hallo.',
        'Ciao.',
        'Bonghjornu.',
        'Ahoj.',
        'Dia dhuit.',
        'Moni.',
        'Pẹlẹ o.',
        'Salam.',
        'Sveiki.',
        'Zdravo.',
        'Բարեւ.'
      ]

    $('.btn1').click(function(event){  
    event.preventDefault();
    $( ".btn1" ).addClass( "btn1color" );
    $( ".btn2" ).removeClass( "btn2color" );
    $( ".btn3" ).removeClass( "btn3color" );
    $( "#project1pic" ).removeClass( "hidden" );
    $( "#project1description" ).removeClass( "hidden" ); 
    $( "#secondprojectpic" ).addClass( "hidden" );
    $( "#secondprojectdes" ).addClass( "hidden" );
    $( "#thirdprojectpic" ).addClass( "hidden" );
    $( "#thirdprojectdes" ).addClass( "hidden" );
      });﻿


    $('.btn2').click(function(event){  
    event.preventDefault();
    $( ".btn2" ).addClass( "btn2color" );
    $( ".btn1" ).removeClass( "btn1color" );
    $( ".btn3" ).removeClass( "btn3color" );
    $( "#secondprojectpic" ).removeClass( "hidden" );
    $( "#secondprojectdes" ).removeClass( "hidden" );
    $( "#project1pic" ).addClass( "hidden" );
    $( "#project1description" ).addClass( "hidden" );
    $( "#thirdprojectpic" ).addClass( "hidden" );
    $( "#thirdprojectdes" ).addClass( "hidden" );
    });﻿

    $('.btn3').click(function(event){  
    event.preventDefault();
    $( ".btn3" ).addClass( "btn3color" );
    $( ".btn1" ).removeClass( "btn1color" );
    $( ".btn2" ).removeClass( "btn2color" );
    $( "#thirdprojectpic" ).removeClass( "hidden" );
    $( "#thirdprojectdes" ).removeClass( "hidden" );
    $( "#secondprojectpic" ).addClass( "hidden" );
    $( "#secondprojectdes" ).addClass( "hidden" );
    $( "#project1pic" ).addClass( "hidden" );
    $( "#project1description" ).addClass( "hidden" );
    });﻿

    $(window).scroll(function() {

    if ($(this).scrollTop()>0)
     {
        $('#header').fadeOut();
     }
    else
     {
      $('#header').fadeIn();
     }
    });


    });



