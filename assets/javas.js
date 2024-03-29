$(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
      $('.fixed-top').addClass('scrolled');
    } else {
      $('.fixed-top').removeClass('scrolled');
    }
  });