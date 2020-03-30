jQuery(document).ready(function( $ ) {

jQuery(window).scroll(function() {
    let links = $('#lista a')
   	if (jQuery(this).scrollTop() > 0) {
      jQuery('#header').addClass('header-scrolled');
      for(let i=0; i<links.length; i++){links[i].classList.add('text-color')}
      $('#iso').addClass('iso-top')
      $('#logotipo').addClass('logo-top')
    } else {
      jQuery('#header').removeClass('header-scrolled');
      for(let i=0; i<links.length; i++){links[i].classList.remove('text-color')}
      $('#iso').removeClass('iso-top')
      $('#logotipo').removeClass('logo-top')
    }
 });

$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
});
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;

});

$('.nav-menu a').on('click',function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    if (target.length) {
      var top_space = 0;

      if ($('#header').length) {
        top_space = $('#header').outerHeight();

        if (!$('#header').hasClass('header-fixed')) {
          top_space = top_space + 20;
        }
      }

      $('html, body').animate({
        scrollTop: target.offset().top - top_space
      }, 1500, 'easeInOutExpo');

      if ($(this).parents('.nav-menu').length) {
        $('.nav-menu .menu-active').removeClass('menu-active');
        $(this).closest('li').addClass('menu-active');
      }
      return false;
    }
  }
});

});



