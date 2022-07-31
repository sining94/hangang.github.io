(function ($ ,window) {

  const mainSlider = new Swiper('.swiper', {
    loop: true,
    autoplay: {
      delay: 2500,
    }
  });

  const $menu = $('.gnb > li');
  const $menuEls = $('.gnb > li > ul');
  
  $menu.hover(function(){
    if($(this).find('ul').hasClass('on') === false){
      $(this).find('ul').addClass('on');
    }
    else {
      $(this).find('ul').removeClass('on');
    }

  });




})(window.jQuery, window);