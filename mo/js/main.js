(function ($ ,window) {

  const mainSlider = new Swiper('.swiper', {
    loop: true,
    autoplay: {
      delay: 2500,
    }
  });

  const $html = $('html');
  const $menu = $('.gnb > li');
  const $menuEls = $('.gnb > li > ul');

  


  $menu.on('click', function(){
    if($(this).hasClass('on') === false){
      $(this).addClass('on');
      $(this).find('ul').slideDown();

    }
    else{
      $(this).removeClass('on');
      $(this).find('ul').slideUp();
    }
  });


  const $open = $('.openBtn');
  const $close = $('.closeBtn');
  const $nav = $('nav'); 

  $open.on('click', function(){
    $nav.animate({'right':'0'}, 400);
  });
  $close.on('click', function(){
    $nav.animate({'right':'-100vw'}, 400);
  });
  


})(window.jQuery, window);