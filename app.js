(async function () {
  if (typeof loadSlim === 'function' && typeof tsParticles !== 'undefined') {
    await loadSlim(tsParticles);
  }
  await tsParticles.load({
    id: 'particles-js',
    options: {
      fpsLimit: 60,
      background: { color: 'transparent' },
      particles: {
        number: { value: 100, density: { enable: true, area: 900 } },
        color: { value: ['#ffffff', '#08fdd8', '#73fbd9'] },
        shape: { type: 'circle' },
        opacity: { value: { min: 0.3, max: 0.7 } },
        size: { value: { min: 1, max: 2.6 } },
        links: {
          enable: true,
          distance: 150,
          color: '#ffffff',
          opacity: 0.35,
          width: 1
        },
        move: {
          enable: true,
          speed: 1.1,
          direction: 'none',
          outModes: { default: 'out' }
        }
      },
      interactivity: {
        detectsOn: 'window',
        events: {
          onHover: {
            enable: true,
            mode: ['grab', 'bubble'],
            parallax: { enable: true, force: 30, smooth: 12 }
          },
          onClick: { enable: true, mode: 'push' },
          resize: true
        },
        modes: {
          grab: { distance: 160, links: { opacity: 0.8 } },
          bubble: { distance: 180, size: 4.5, duration: 0.4, opacity: 1 },
          repulse: { distance: 100, duration: 0.4 },
          push: { quantity: 4 }
        }
      },
      detectRetina: true
    }
  });
})();

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


/* ==========================================================
   Engagement layer: typing intro, counters, scroll reveal,
   magnetic nav. Vanilla JS with light jQuery interop.
   ========================================================== */

(function () {
  var typingPlayed = false;
  var keywordTimer = null;

  /* HTML-aware tokenizer: splits a string into a stream of tags / entities /
     individual characters so we can render tags atomically (no half-tags). */
  function tokenizeHtml(html) {
    var tokens = [];
    var i = 0;
    while (i < html.length) {
      var ch = html[i];
      if (ch === '<') {
        var end = html.indexOf('>', i);
        if (end === -1) { tokens.push({ kind: 'text', value: ch }); i++; continue; }
        tokens.push({ kind: 'tag', value: html.slice(i, end + 1) });
        i = end + 1;
      } else if (ch === '&') {
        var semi = html.indexOf(';', i);
        if (semi !== -1 && semi - i <= 7) {
          tokens.push({ kind: 'text', value: html.slice(i, semi + 1) });
          i = semi + 1;
        } else {
          tokens.push({ kind: 'text', value: ch }); i++;
        }
      } else {
        tokens.push({ kind: 'text', value: ch });
        i++;
      }
    }
    return tokens;
  }

  /* LLM-style chunked streaming: variable chunk size and occasional micro-pauses */
  function typeLine(el, html, baseSpeed) {
    return new Promise(function (resolve) {
      el.classList.add('is-typing');
      var tokens = tokenizeHtml(html);
      var rendered = '';
      var idx = 0;
      function step() {
        if (idx >= tokens.length) {
          el.classList.remove('is-typing');
          resolve();
          return;
        }
        // Stream 1-3 text chars per tick to mimic LLM token streaming
        var chunkSize = 1 + Math.floor(Math.random() * 3);
        var consumed = 0;
        while (idx < tokens.length && (tokens[idx].kind === 'tag' || consumed < chunkSize)) {
          rendered += tokens[idx].value;
          if (tokens[idx].kind === 'text') consumed++;
          idx++;
        }
        el.innerHTML = rendered + '<span class="typing-cursor"></span>';
        var delay = baseSpeed + Math.random() * baseSpeed;
        if (Math.random() < 0.06) delay += 220;
        setTimeout(step, delay);
      }
      step();
    });
  }

  /* "Thinking" dots — quick AI-loading idiom shown before the first line */
  function showThinkingDots(el, ms) {
    return new Promise(function (resolve) {
      el.innerHTML = '<span class="thinking-dot"></span><span class="thinking-dot"></span><span class="thinking-dot"></span>';
      setTimeout(function () { el.innerHTML = ''; resolve(); }, ms);
    });
  }

  function runTypingIntro() {
    if (typingPlayed) return;
    typingPlayed = true;
    var lines = Array.prototype.slice.call(document.querySelectorAll('#homesection .typing-line'));
    if (!lines.length) return;
    lines.forEach(function (l) { l.innerHTML = ''; });
    showThinkingDots(lines[0], 650).then(function () {
      (function next(idx) {
        if (idx >= lines.length) {
          var last = lines[lines.length - 1];
          last.innerHTML = last.getAttribute('data-typed') + '<span class="typing-cursor steady"></span>';
          startFloatingKeywords();
          return;
        }
        var el = lines[idx];
        var html = el.getAttribute('data-typed') || '';
        typeLine(el, html, 22).then(function () {
          el.innerHTML = html;
          next(idx + 1);
        });
      })(0);
    });
  }

  function showFinalText() {
    typingPlayed = true;
    document.querySelectorAll('#homesection .typing-line').forEach(function (el) {
      el.innerHTML = el.getAttribute('data-typed') || '';
    });
    startFloatingKeywords();
  }

  /* Floating AI keywords drifting up in the home section background */
  var AI_KEYWORDS = [
    'GPT-4', 'RAG', 'embeddings', 'vector', 'LLM', 'tokens',
    'transformer', 'attention', 'inference', 'prompt',
    'fine-tune', 'context', 'agent', 'OpenAI', 'TensorFlow', 'PyTorch'
  ];

  function spawnKeyword() {
    var home = document.getElementById('homesection');
    if (!home || home.classList.contains('hidden')) return;
    var span = document.createElement('span');
    span.className = 'ai-keyword';
    span.textContent = AI_KEYWORDS[Math.floor(Math.random() * AI_KEYWORDS.length)];
    span.style.left = (40 + Math.random() * 55) + '%';
    span.style.bottom = (Math.random() * 30) + '%';
    span.style.fontSize = (11 + Math.random() * 4) + 'px';
    span.style.animationDuration = (9 + Math.random() * 7) + 's';
    home.appendChild(span);
    setTimeout(function () { span.remove(); }, 16000);
  }

  function startFloatingKeywords() {
    if (keywordTimer) return;
    keywordTimer = setInterval(spawnKeyword, 2200);
  }

  /* Counters --------------------------------------------------------- */

  function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }

  function animateCounter(el) {
    if (el.dataset.done === '1') return;
    el.dataset.done = '1';
    var target = parseFloat(el.getAttribute('data-target')) || 0;
    var prefix = el.getAttribute('data-prefix') || '';
    var suffix = el.getAttribute('data-suffix') || '';
    var duration = 1400;
    var start = performance.now();
    function tick(now) {
      var p = Math.min(1, (now - start) / duration);
      var v = Math.round(target * easeOutCubic(p));
      el.textContent = prefix + v + suffix;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  function triggerCountersIfWorkVisible() {
    var work = document.getElementById('worksection');
    if (!work || work.classList.contains('hidden')) return;
    document.querySelectorAll('#worksection .stat-num').forEach(animateCounter);
  }

  /* Scroll reveal --------------------------------------------------- */

  function setupScrollReveal() {
    var els = document.querySelectorAll('.projectholder');
    if (!('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('revealed'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    els.forEach(function (el) { io.observe(el); });
  }

  /* Magnetic nav icons ---------------------------------------------- */

  function setupMagneticNav() {
    var holders = document.querySelectorAll('.middle > div');
    holders.forEach(function (holder) {
      var icon = holder.querySelector('i');
      if (!icon) return;
      icon.classList.add('magnetic-icon');
      holder.addEventListener('mousemove', function (e) {
        var r = holder.getBoundingClientRect();
        var x = e.clientX - r.left - r.width / 2;
        var y = e.clientY - r.top - r.height / 2;
        icon.style.transform = 'translate(' + (x * 0.45) + 'px,' + (y * 0.45) + 'px)';
      });
      holder.addEventListener('mouseleave', function () {
        icon.style.transform = '';
      });
    });
  }

  /* Wire-up --------------------------------------------------------- */

  $(window).on('load', function () {
    setTimeout(runTypingIntro, 400);
    setupScrollReveal();
    setupMagneticNav();
  });

  // Re-trigger counters whenever the work section becomes visible
  $('#workiconid').on('click', function () {
    setTimeout(triggerCountersIfWorkVisible, 400);
  });

  // Skip typing if user navigates away mid-intro and back
  $('#aboutid, #skillsid, #workiconid, #contactid').on('click', function () {
    if (!typingPlayed) showFinalText();
  });

  /* ==========================================================
     Comprehensive Session Tracking — captures full visitor
     journey including sections, scroll depth, tab visibility,
     and timing. Sends ONE email per session when it ends
     (page unload or 30min idle timeout).
     ========================================================== */

  function isLocalDev() {
    return location.hostname === 'localhost' ||
           location.hostname === '127.0.0.1' ||
           location.protocol === 'file:';
  }

  function generateSessionId() {
    return 'sess_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }

  function setupSessionTracking() {
    if (isLocalDev()) return;

    var SESSION_ID_KEY = 'sg_session_id';
    var SESSION_SENT_KEY = 'sg_session_sent';
    var IDLE_TIMEOUT = 30 * 60 * 1000; // 30 minutes

    // Check if session already sent email
    if (sessionStorage.getItem(SESSION_SENT_KEY) === '1') return;

    // Get or create session ID
    var sessionId = sessionStorage.getItem(SESSION_ID_KEY);
    if (!sessionId) {
      sessionId = generateSessionId();
      sessionStorage.setItem(SESSION_ID_KEY, sessionId);
    }

    var session = {
      id: sessionId,
      startTime: Date.now(),
      lastActivityTime: Date.now(),
      activeViewingTime: 0,
      lastVisibleTime: Date.now(),
      isVisible: !document.hidden,
      sections: [],
      sectionTimes: {},
      sectionScrollDepths: {},
      visibilityChanges: [],
      maxScrollDepth: 0,
      initialReferrer: document.referrer || 'direct',
      initialUrl: location.href
    };

    var sectionMap = {
      homeid: 'home',
      aboutid: 'about',
      skillsid: 'skills',
      workiconid: 'work',
      contactid: 'contact',
      btnanimation: 'contact'
    };

    var idleTimer = null;
    var currentSection = 'home';

    // Track section visit
    function visitSection(section) {
      if (session.sections.indexOf(section) === -1) {
        session.sections.push(section);
      }
      if (!session.sectionTimes[section]) {
        session.sectionTimes[section] = {
          firstVisit: Date.now(),
          lastVisit: Date.now(),
          totalTime: 0,
          viewCount: 1
        };
      } else {
        session.sectionTimes[section].lastVisit = Date.now();
        session.sectionTimes[section].viewCount++;
      }
      currentSection = section;
      updateActivity();
    }

    // Track scroll depth
    function updateScrollDepth() {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      var docHeight = document.documentElement.scrollHeight - window.innerHeight;
      var scrollPercent = docHeight > 0 ? Math.round((scrollTop / docHeight) * 100) : 100;
      
      session.maxScrollDepth = Math.max(session.maxScrollDepth, scrollPercent);
      
      if (!session.sectionScrollDepths[currentSection]) {
        session.sectionScrollDepths[currentSection] = scrollPercent;
      } else {
        session.sectionScrollDepths[currentSection] = Math.max(
          session.sectionScrollDepths[currentSection],
          scrollPercent
        );
      }
      updateActivity();
    }

    // Update activity timestamp and reset idle timer
    function updateActivity() {
      var now = Date.now();
      session.lastActivityTime = now;
      
      // Update active viewing time if visible
      if (session.isVisible && session.lastVisibleTime) {
        session.activeViewingTime += now - session.lastVisibleTime;
        session.lastVisibleTime = now;
      }
      
      // Reset idle timer
      if (idleTimer) clearTimeout(idleTimer);
      idleTimer = setTimeout(sendSessionEmail, IDLE_TIMEOUT);
    }

    // Handle visibility changes
    function handleVisibilityChange() {
      var now = Date.now();
      var wasVisible = session.isVisible;
      session.isVisible = !document.hidden;
      
      session.visibilityChanges.push({
        time: now,
        visible: session.isVisible,
        elapsedSeconds: Math.round((now - session.startTime) / 1000)
      });
      
      if (wasVisible && !session.isVisible) {
        // Tab became hidden - stop counting active time
        session.activeViewingTime += now - session.lastVisibleTime;
      } else if (!wasVisible && session.isVisible) {
        // Tab became visible - start counting again
        session.lastVisibleTime = now;
      }
      
      updateActivity();
    }

    // Build session summary for email
    function buildSessionSummary() {
      var now = Date.now();
      var totalTimeSeconds = Math.round((now - session.startTime) / 1000);
      var activeTimeSeconds = Math.round(session.activeViewingTime / 1000);
      
      if (session.isVisible && session.lastVisibleTime) {
        activeTimeSeconds += Math.round((now - session.lastVisibleTime) / 1000);
      }
      
      var formatTime = function(seconds) {
        var mins = Math.floor(seconds / 60);
        var secs = seconds % 60;
        if (mins > 0) return mins + 'm ' + secs + 's';
        return secs + 's';
      };
      
      var sectionSummary = session.sections.map(function(section) {
        var sTime = session.sectionTimes[section];
        var timeSpent = Math.round((sTime.lastVisit - sTime.firstVisit) / 1000);
        var scroll = session.sectionScrollDepths[section] || 0;
        var visits = sTime.viewCount;
        return section + ' (' + visits + 'x, ' + scroll + '% scroll, ~' + formatTime(timeSpent) + ')';
      }).join(' → ');
      
      var visibilityLog = session.visibilityChanges.map(function(vc) {
        return (vc.visible ? '👁 visible' : '🚪 hidden') + ' at +' + vc.elapsedSeconds + 's';
      }).join(', ');
      
      return {
        totalTimeSeconds: totalTimeSeconds,
        totalTimeFormatted: formatTime(totalTimeSeconds),
        activeTimeSeconds: activeTimeSeconds,
        activeTimeFormatted: formatTime(activeTimeSeconds),
        sectionCount: session.sections.length,
        sectionSummary: sectionSummary,
        maxScrollDepth: session.maxScrollDepth,
        visibilityChangeCount: session.visibilityChanges.length,
        visibilityLog: visibilityLog || 'no tab switches'
      };
    }

    // Send the session email
    function sendSessionEmail() {
      // Prevent duplicate sends
      if (sessionStorage.getItem(SESSION_SENT_KEY) === '1') return;
      sessionStorage.setItem(SESSION_SENT_KEY, '1');
      
      if (idleTimer) clearTimeout(idleTimer);
      
      var summary = buildSessionSummary();
      var ctx = getClientContext();
      
      var sendIt = function(geo) {
        var messageText = 'Session Summary:\n\n' +
          '⏱️ Total Time: ' + summary.totalTimeFormatted + '\n' +
          '👁️ Active Viewing: ' + summary.activeTimeFormatted + '\n' +
          '📍 Sections: ' + summary.sectionCount + ' — ' + summary.sectionSummary + '\n' +
          '📜 Max Scroll Depth: ' + summary.maxScrollDepth + '%\n' +
          '🔄 Tab Visibility: ' + summary.visibilityChangeCount + ' changes — ' + summary.visibilityLog;
        
        var emailData = {
          _subject: '📊 Session Report · simgill.io · ' + summary.totalTimeFormatted,
          _template: 'table',
          name: 'Session Tracker',
          email: 'noreply+session@simgill.io',
          message: messageText,
          
          // Structured fields for filtering/analysis
          session_id: session.id,
          total_time_seconds: summary.totalTimeSeconds,
          active_time_seconds: summary.activeTimeSeconds,
          sections_visited: session.sections.join(', '),
          section_count: summary.sectionCount,
          max_scroll_depth: summary.maxScrollDepth,
          visibility_changes: summary.visibilityChangeCount,
          initial_referrer: session.initialReferrer,
          initial_url: session.initialUrl
        };
        
        var payload = $.extend({}, emailData, ctx, geo || {});
        
        // Use sendBeacon for reliability during unload, fallback to AJAX
        var data = $.param(payload);
        var url = 'https://formsubmit.co/ajax/simgill89@gmail.com';
        
        if (navigator.sendBeacon && typeof Blob !== 'undefined') {
          var blob = new Blob([data], { type: 'application/x-www-form-urlencoded' });
          navigator.sendBeacon(url, blob);
        } else {
          $.ajax({
            type: 'POST',
            url: url,
            data: data,
            dataType: 'json',
            headers: { 'Accept': 'application/json' },
            async: false
          });
        }
      };
      
      if (typeof fetchIpGeo === 'function') {
        fetchIpGeo().then(sendIt, function() { sendIt(null); });
      } else {
        sendIt(null);
      }
    }

    // Wire up event listeners
    
    // Section navigation
    visitSection('home');
    Object.keys(sectionMap).forEach(function(id) {
      var el = document.getElementById(id);
      if (el) {
        el.addEventListener('click', function() {
          visitSection(sectionMap[id]);
        });
      }
    });
    
    // Scroll tracking
    var scrollThrottle = null;
    window.addEventListener('scroll', function() {
      if (scrollThrottle) return;
      scrollThrottle = setTimeout(function() {
        updateScrollDepth();
        scrollThrottle = null;
      }, 250);
    }, { passive: true });
    
    // Visibility tracking
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    // Mouse/keyboard activity
    ['click', 'keydown', 'mousemove', 'touchstart'].forEach(function(event) {
      document.addEventListener(event, function() {
        updateActivity();
      }, { passive: true, capture: true });
    });
    
    // Session end: page unload
    window.addEventListener('pagehide', sendSessionEmail, false);
    window.addEventListener('beforeunload', sendSessionEmail, false);
    
    // Start idle timer
    idleTimer = setTimeout(sendSessionEmail, IDLE_TIMEOUT);
  }

  $(window).on('load', setupSessionTracking);
})();
