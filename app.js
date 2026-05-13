

particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 90
        }
      },
      "opacity": {
        "value": 0.8,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 1.5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 1,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 100,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 50
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  });

function clicks(){

  $('#homeid').click(function() {
    $(".fa-home").css({"color": "#00FFD7"})
    $(".fa-user-secret").css({"color": "#4D4D4E"})
    $(".fa-code").css({"color": "#4D4D4E"})
    $(".fa-picture-o").css({"color": "#4D4D4E"})
    $(".fa-envelope-o").css({"color": "#4D4D4E"})

    $('#homesection').removeClass('hidden')
    $('#aboutsection').addClass('hidden')
    $('#skillssection').addClass('hidden')
    $('#worksection').addClass('hidden')
    $('#contactsection').addClass('hidden')

  }) 
  $('#aboutid').click(function() {
    $(".fa-home").css({"color": "#4D4D4E"})
    $(".fa-user-secret").css({"color": "#00FFD7"})
    $(".fa-code").css({"color": "#4D4D4E"})
    $(".fa-picture-o").css({"color": "#4D4D4E"})
    $(".fa-envelope-o").css({"color": "#4D4D4E"})

    $('#aboutsection').removeClass('hidden')
    $('#homesection').addClass('hidden')
    $('#skillssection').addClass('hidden')
    $('#worksection').addClass('hidden')
    $('#contactsection').addClass('hidden')
  })
  $('#skillsid').click(function() {
    $(".fa-home").css({"color": "#4D4D4E"})
    $(".fa-user-secret").css({"color": "#4D4D4E"})
    $(".fa-code").css({"color": "#00FFD7"})
    $(".fa-picture-o").css({"color": "#4D4D4E"})
    $(".fa-envelope-o").css({"color": "#4D4D4E"})

    $('#skillssection').removeClass('hidden')
    $('#homesection').addClass('hidden')
    $('#aboutsection').addClass('hidden')
    $('#worksection').addClass('hidden')
    $('#contactsection').addClass('hidden')
  })
  $('#workiconid').click(function() {
     
    $(".fa-home").css({"color": "#4D4D4E"})
    $(".fa-user-secret").css({"color": "#4D4D4E"})
    $(".fa-code").css({"color": "#4D4D4E"})
    $(".fa-picture-o").css({"color": "#00FFD7"})
    $(".fa-envelope-o").css({"color": "#4D4D4E"})

    $('#worksection').removeClass('hidden')
    $('#homesection').addClass('hidden')
    $('#aboutsection').addClass('hidden')
    $('#skillssection').addClass('hidden')
    $('#contactsection').addClass('hidden')
  })
  $('#contactid').click(function() {
    $(".fa-home").css({"color": "#4D4D4E"})
    $(".fa-user-secret").css({"color": "#4D4D4E"})
    $(".fa-code").css({"color": "#4D4D4E"})
    $(".fa-picture-o").css({"color": "#4D4D4E"})
    $(".fa-envelope-o").css({"color": "#00FFD7"})

    $('#contactsection').removeClass('hidden')
    $('#homesection').addClass('hidden')
    $('#aboutsection').addClass('hidden')
    $('#skillssection').addClass('hidden')
    $('#worksection').addClass('hidden')
  })

 $('#btnanimation').click(function() {
    $(".fa-home").css({"color": "#4D4D4E"})
    $(".fa-user-secret").css({"color": "#4D4D4E"})
    $(".fa-code").css({"color": "#4D4D4E"})
    $(".fa-picture-o").css({"color": "#4D4D4E"})
    $(".fa-envelope-o").css({"color": "#00FFD7"})

    $('#contactsection').removeClass('hidden')
    $('#homesection').addClass('hidden')
    $('#aboutsection').addClass('hidden')
    $('#skillssection').addClass('hidden')
    $('#worksection').addClass('hidden')
  })


}
  

function zindex(){
  $(".slide-in").css({"z-index": "0"})
  $('#homeid,#aboutid,#skillsid,#workiconid,#contactid,#btnanimation').css({"pointer-events": "visible"})      
  
}
function slideBack(){ 
 $('.slide-in').toggleClass('show');
 setTimeout('zindex()', 1000);
}


function slide(){
  $('#homeid,#aboutid,#skillsid,#workiconid,#contactid,#btnanimation').click(function() {
    var clicked = $(this).attr('id');
    if($('#'+clicked).hasClass('active') === true){
      $('#'+clicked).addClass('activeColor')
      $(".slide-in").css({"z-index": "9"})
      $('.slide-in').toggleClass('show');
      $('#homeid,#aboutid,#skillsid,#workiconid,#contactid,#btnanimation').css({"pointer-events": "none"})      
      setTimeout('slideBack()', 3000);
    }
  })    
}

function active(){

         

  $('#homeid,#aboutid,#skillsid,#workiconid,#contactid,#btnanimation').click(function() {
    var selectedicon = $(this).attr('id');
    var array= ['homeid','aboutid','skillsid','workiconid','contactid','btnanimation']
    if(selectedicon){
      for (var i = 0; i <array.length; i++) {
        if(array[i] === selectedicon){
          $('#'+array[i]).addClass('active');
          var spliced = array.splice(i, 1); 
        }
      }
      for (var i = 0; i< array.length; i++) {
        $('#'+array[i]).removeClass('active');
      }
    }
  })    
}


active()
slide()
clicks()


function getClientContext() {
  var nav = navigator || {};
  var scr = screen || {};
  var navStart = (performance && performance.timing && performance.timing.navigationStart) || Date.now();
  var timeOnPage = Math.round((Date.now() - navStart) / 1000);
  var intl = (Intl && Intl.DateTimeFormat) ? Intl.DateTimeFormat().resolvedOptions() : {};

  return {
    browser_userAgent: nav.userAgent || '',
    browser_language: nav.language || '',
    browser_platform: nav.platform || '',
    browser_cores: nav.hardwareConcurrency || '',
    screen_size: (scr.width || '?') + 'x' + (scr.height || '?'),
    viewport_size: window.innerWidth + 'x' + window.innerHeight,
    pixel_ratio: window.devicePixelRatio || 1,
    color_scheme: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
    timezone: intl.timeZone || '',
    locale: intl.locale || '',
    local_time: new Date().toString(),
    page_url: location.href,
    referrer: document.referrer || 'direct',
    time_on_page_seconds: timeOnPage
  };
}

function fetchIpGeo() {
  return $.ajax({
    url: 'https://ipapi.co/json/',
    dataType: 'json',
    timeout: 3000
  }).then(function(d) {
    return {
      geo_ip: d.ip || '',
      geo_city: d.city || '',
      geo_region: d.region || '',
      geo_country: d.country_name || '',
      geo_country_code: d.country_code || '',
      geo_postal: d.postal || '',
      geo_isp: d.org || '',
      geo_latitude: d.latitude || '',
      geo_longitude: d.longitude || '',
      geo_timezone: d.timezone || ''
    };
  });
}

function submitForm($form, extraData) {
  var $btn = $('#sendtextbtnid');
  var $status = $('#formStatus');
  var data = $form.serializeArray();

  Object.keys(extraData).forEach(function(k) {
    data.push({ name: k, value: extraData[k] });
  });

  $.ajax({
    type: 'POST',
    url: $form.attr('action'),
    data: $.param(data),
    dataType: 'json',
    headers: { 'Accept': 'application/json' },
    success: function() {
      $btn.text('Send').prop('disabled', false);
      $form[0].reset();
      $status.css('color', '#08fdd8').text('Thanks! Your message was sent.').show();
    },
    error: function() {
      $btn.text('Send').prop('disabled', false);
      $status.css('color', '#ff6b6b').text('Something went wrong. Please try again or email simgill89@gmail.com.').show();
    }
  });
}

$('#contactForm').on('submit', function(e) {
  e.preventDefault();

  var $form = $(this);
  var $btn = $('#sendtextbtnid');
  var $status = $('#formStatus');

  $btn.text('Sending...').prop('disabled', true);
  $status.hide();

  var ctx = getClientContext();

  fetchIpGeo()
    .then(function(geo) {
      submitForm($form, $.extend({}, ctx, geo));
    }, function() {
      submitForm($form, ctx);
    });
});




  $( "#phonecall" ).click(function() {
    alert("browser calling will be comming soon :)")
  });
 
