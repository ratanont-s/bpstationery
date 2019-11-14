$(document).ready(function () {
  'use strict'

  $('[data-toggle="menu"]').on('click', function () {
    $(this).toggleClass('active');
    $('.nav-collapse').toggleClass('open');
  })

  $('.carousel').carousel({
    interval: 2000,
    pause: false,
    touch: false
  })

  var mySwiper = new Swiper('.swiper-container', {
    // initialSlide: 6,
    direction: 'vertical',
    mousewheel: true,
    keyboard: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'progressbar',
      progressbarOpposite: true,
    },
    on: {
      slideChangeTransitionEnd: function () {
        $('.swiper-slide').find('video').each(function () {
          this.pause();
          this.currentTime = 0;
        });
        $('.swiper-slide-active').find('video').each(function () {
          this.play();
        });
      },
    }
  });

  $('.toggle-icon').html('<svg xmlns="http://www.w3.org/2000/svg" width="31" height="20" viewBox="0 0 31 20"><g transform="translate(-264 -29)"><rect width="31" height="4" transform="translate(264 29)" fill="#50bd96"/><rect width="31" height="4" transform="translate(264 37)" fill="#50bd96"/><rect width="31" height="4" transform="translate(264 45)" fill="#50bd96"/></g></svg>')
});