$(document).ready(function () {

  $(".gallery-slider").owlCarousel({
    pagination: true,
    autoPlay: 5000,
    itemsDesktop: [1500, 4],
    itemsDesktopSmall: [979, 3]
  });

  // Gallery Popup
  $('.image-popup').magnificPopup({
    type: 'image'
  });

  // animation scroll js
  var html_body = $('html, body');
  $('.page-scroll').on('click', function () { //use page-scroll class in any HTML tag for scrolling
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        html_body.animate({
          scrollTop: target.offset().top - 0
        }, 1500, "easeInOutExpo");
        return false;
      }
    }
  });

  // easeInOutExpo Declaration
  jQuery.extend(jQuery.easing, {
    easeInOutExpo: function (x, t, b, c, d) {
      if (t == 0) return b;
      if (t == d) return b + c;
      if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
      return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    }
  });

  //switch words effect
  var titleLeft = ['LovesMatter', 'DoneMatter', 'WorksMatter', 'SecureMatter', 'UXMatter', 'UIMatter', 'UsableMatter', 'FastMatter'];
  var titleRight = ['Mobile Apps', 'CRM Software', 'ERP Dashboard', 'Booking Apps', 'Micro Payments', 'Topup Billing', 'Point of Sales'];    
  $wordLeft = $('.title-left');
  $wordRight = $('.title-right');

  setInterval(function (){
      $wordLeft.fadeOut(function () {
          $wordLeft.text('#'+titleLeft[rnd(0,titleLeft.length-1)]).fadeIn();
      });
  }, 3000);

  setInterval(function (){
    $wordRight.fadeOut(function () {
        $wordRight.text(titleRight[rnd(0,titleRight.length-1)]).fadeIn();
    });
  }, 5000);

  function rnd(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);;
  }

});