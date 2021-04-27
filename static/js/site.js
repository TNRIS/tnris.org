require('jquery');
require('bootstrap');
require('jquery-ui');

require('imports-loader?this=>window!holderjs');
require('lodash');
require('zurb-twentytwenty/js/jquery.event.move.js');
require('zurb-twentytwenty/js/jquery.twentytwenty.js');

require('bootstrap/dist/css/bootstrap.min.css');
require('zurb-twentytwenty/css/twentytwenty.css');
require('../../scss/tnris.scss');
require('ekko-lightbox/dist/ekko-lightbox.css');
require('ekko-lightbox/dist/ekko-lightbox.min.js');


var Clipboard = require('clipboard/dist/clipboard.min');

(function ($) {
  'use strict';

  $(function () {
    // Nav scroll spy
    $('body').scrollspy({ target: '.wms-nav-container', offset: 130 });

    // Tool Tip
    $('.copy-tip').tooltip({ 'placement': 'top' });

    // Beta/development alert message
    if (window.location.hostname !== 'tnris.org' && window.location.hostname !== 'localhost') {
      $('.alert-holder-2')
        .html('<div class="alert alert-warning beta-alert text-center"><strong>Warning!</strong> You are currently viewing a development version of the TNRIS website. For the official version, go to <a href="http://tnris.org">http://tnris.org</a>.</div>');
    }

    // from http://zenorocha.github.io/clipboard.js/assets/scripts/tooltips.js
    // not flawless, but close enough
    function fallbackMessage(action) {
      var actionMsg = '';
      var actionKey = (action === 'cut' ? 'X' : 'C');

      if (/iPhone|iPad/i.test(navigator.userAgent)) {
        actionMsg = 'Copy manually';
      }
      else if (/Mac/i.test(navigator.userAgent)) {
        actionMsg = 'Press ⌘-' + actionKey + ' to ' + action;
      }
      else {
        actionMsg = 'Press Ctrl-' + actionKey + ' to ' + action;
      }

      return actionMsg;
    }

    var clipboard = new Clipboard('.copy-url-btn', {
      target: function (trigger) {
        return trigger.parentElement.nextElementSibling;
      }
    });

    clipboard.on('success', function (e) {
      var $btn = $(e.trigger);
      var origInner = $btn.html();
      $btn.html('Copied!');
      setTimeout(function () {
        $btn.html(origInner)
      }, 4000);
      e.clearSelection();
    });

    clipboard.on('error', function (e) {
      var $btn = $(e.trigger);
      var origInner = $btn.html();
      $btn.html(fallbackMessage(e.action));
      setTimeout(function () {
        $btn.html(origInner)
      }, 4000);
    });


  });

  $(window).on('load', function () {
    // Image Slider
    $(".twentytwenty-container").twentytwenty({ default_offset_pct: .5 });
    $(".twentytwenty-2").twentytwenty({ default_offset_pct: .75 });
  });

  var smoothScrollLink;
  $('a.smooth-scroll').click(function (e) {
    $('ul.faq-list.list-clean li a.faq-active').removeClass("faq-active");
    smoothScrollLink = $(this);
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

      if (target.length && $(this).parent().parent()[0].className == "faq-list list-clean") {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, {
          duration: 1000,
          complete: function () {
            smoothScrollLink.addClass("faq-active");
          }
        });
        return false;
      }
      else if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  $('.carousel-inner div:first').addClass('active');

  $('video').click(function (e) {

    // handle click if not Firefox (Firefox supports this feature natively)
    if (typeof InstallTrigger === 'undefined') {

      // get click position
      var clickY = (e.pageY - $(this).offset().top);
      var height = parseFloat($(this).height());

      // avoids interference with controls
      if (clickY > 0.82 * height) return;

      // toggles play / pause
      this.paused ? this.play() : this.pause();
    }
  });

  $(function () {
    var callout = $('.data-callout').collapse();

    $('.carousel')
      .carousel();

    $('.carousel')
      .on('slide.bs.carousel', function (event) {
        var iframe = $(event.relatedTarget).find('iframe');

        if (iframe.length) {
          callout.hide();
        } else {
          callout.show();
        }
      });
  });

  $(document).on('click', '[data-toggle="lightbox"]', function (event) {
    event.preventDefault();
    $(this).ekkoLightbox();
  });

  // dismissible alert handling with local storage
  // $(function() {
  //   var dismissed = localStorage.getItem('alert-banner');
  //   if (dismissed != 'hide') {
  //     $('#alert-contents').html('<strong>NOTICE</strong>: Online Registration for the 2018 <span class="forum-alert-logo">Texas GIS Forum</span> closes on Friday, October 12.<br> Registration will be available <strong>on-site at the conference</strong>. <a class="btn btn-tnris btn-sm" href="https://www.regonline.com/builder/site/?eventid=2522100">Register Now</a>');
  //
  //     $('#alert-banner').on('closed.bs.alert', function () {
  //       localStorage.setItem('alert-banner', 'hide');
  //     });
  //   }
  //   else {
  //     $('#alert-holder').html('');
  //   }
  // });

  // non dismissible alert informing users about new data.tnris.org site;
  // only displays for data pages/routes
  // $(function() {
  //   $('#alert-banner').hide();
  //   var dataPages = [
  //     'maps-and-data',
  //     'order-data'
  //   ];
  //   dataPages.forEach(function(page) {
  //     if (window.location.pathname.search(page) !== -1) {
  // $('#alert-banner').show();
  // $('#alert-contents').html(
  //   "<strong>NOTICE</strong>: There is a NEW way to access TNRIS data, the <strong>DataHub</strong>! The DataHub replaces the Data Catalog, Data Search &amp; Download and Order Data sections of the site. To try it out now, visit <strong><a href='https://data.tnris.org'>data.tnris.org</a></strong> or click the DataHub button above. The existing methods to access TNRIS data will continue to be available until <strong>June 1st, 2019<strong>."
  // );
  //     }
  //   })
  // });

  // 2018 GeoRodeo speaker hover
  var headshotOrig;
  $(".2018-georodeo-speaker").hover(function () {
    headshotOrig = $(this).attr("src");
    $(this).attr("src", "https://cdn.tnris.org/images/starwars-developer.jpg");
  }, function () {
    $(this).attr("src", headshotOrig);
  })

})(jQuery);

// Home page carousel
// get carousel images from tnris api
function retrieveCarousel(queryField, queryValue) {
  var carouselUrl = 'https://api.tnris.org/api/v1/tnris_org/carousel_image';
  if (queryField) {
    carouselUrl = carouselUrl + "?" + queryField + "=" + queryValue;
  }
  return fetch(carouselUrl).then(function (response) {
    if (!response.ok) {
      throw new Error('Could not retrieve TNRIS API response for carousel images.');
    }
    return response.json();
  })
    .then(function (data) {
      data.results = data.results.sort(function (a, b) {
        return b.last_modified.localeCompare(a.last_modified)

      });
      data.results.forEach(function (t) {
        // use api values to create clean variables to use in html below
        $(document).ready(function () {
          for (let j = 0; j < 1; j++) {
            $('<div class="carousel-item"><img class="d-block img-fluid" src="' + t.image_url + '" alt="' + t.image_name + '"> <div class="carousel-caption"><p>' + t.carousel_caption + '</p> </div>  </div>').appendTo('.carousel-inner');

          }
          $('.carousel-item').first().addClass('active');
        });
      });

      data.results
      $(document).ready(function () {
        for (let i = 0; i < data.count; i++) {
          $('<li data-target="#tnris-carousel" data-slide-to="' + i + '"></li>').appendTo('.carousel-indicators')

        }
        $('.carousel-indicators > li').first().addClass('active');
      });
    })
}

$(document).ready(function () {
  retrieveCarousel();
});