

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

$('a[href*="#"]')
 .not('[href="#"]')
 .not('[href="#0"]')
 .click(function(event) {
   if (
     location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
     &&
     location.hostname == this.hostname
   ) {
     var target = $(this.hash);
     target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
     if (target.length) {
       event.preventDefault();
       $('html, body').animate({
         scrollTop: target.offset().top
       }, 1000, function() {
         var $target = $(target);
         $target.focus();
         if ($target.is(":focus")) {
           return false;
         } else {
           $target.attr('tabindex','-1');
           $target.focus();
         };
       });
     }
   }
 });

});



