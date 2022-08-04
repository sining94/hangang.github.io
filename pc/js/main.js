(function ($ ,window) {

  const mainSlider = new Swiper('.swiper', {
    loop: true,
    autoplay: {
      delay: 2500,
    }
  });

  const $menu = $('.gnb > li');
  const $menuEls = $('.gnb > li > ul');
  
  $menu.on({
    mouseenter: function(){
      $(this).find('ul').addClass('on');
    },
    mouseleave: function(){
      $(this).find('ul').removeClass('on');
    }
  });




})(window.jQuery, window);