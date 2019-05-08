
'use strict';

(function ($) {

  $(document).ready(function () {


    /* Menu Mobile */

    var $btnMenu = $('.menu-mobile');

    if ($btnMenu.length) {
      var $header = $('#header'),
        $mainMenu = $('.menu-list', $header),
        $closeMenu = $('.btn-close');


      $btnMenu.on('click', function () {
        $header.addClass('active');
        $btnMenu.addClass('active');
      });

      $closeMenu.on('click', function () {
        $header.removeClass('active');
        $btnMenu.removeClass('active');
      });
      $('.cover').on('click', function () {
        $closeMenu.trigger('click');
      });
      $(document).on('keydown', function (e) {
        if (e.keyCode === 27) {
          $closeMenu.trigger('click');
        }
      });
      $('.menu-item-has-children > a', $mainMenu).on('click', function (event) {
        var ww = $(window).width();

        if (ww <= 991) {
          event.preventDefault();

          var $target = $(event.target).closest('.menu-item-has-children').children('a'),
            $subMenu = $target.next('ul');

          $target.toggleClass('active');

          if ($target.hasClass('active')) {
            $subMenu.slideDown(400);
          }
          else {
            $subMenu.slideUp(400);
          }
        }
      });
    }


  });
})(jQuery);