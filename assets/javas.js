$(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
      $('.fixed-top').addClass('scrolled');
    } else {
      $('.fixed-top').removeClass('scrolled');
    }

    
  });

  $(document).ready(function() {
    $('#navbarButton').click(function() {
      $('.navbar').toggleClass('active');
    });

    function checkScreenWidth() {
      if ($(window).width() > 992) {
        $('.navbar').removeClass('active');
      }
      
    }
  
    $(window).resize(checkScreenWidth);
    checkScreenWidth();
  });