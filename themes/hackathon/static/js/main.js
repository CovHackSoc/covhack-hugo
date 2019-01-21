/* Nav animation on scroll */
$(document).ready(function(){
  $(document).scroll(function(){
    if($(document).scrollTop() > ($( window ).height()-100))
      $('nav').addClass('nav-title-visible');
    else
      $('nav').removeClass('nav-title-visible');
  });
});

/* Scrolling */
// Checks for any a tags with the 'data-scroll-to-id' attribute set
$(document).ready(() => {
  $('a[data-scroll-to-id]').click(() => {
    return false;
  })

  $('a[data-scroll-to-id]').each(function() {
    const dataScrollToID = $(this).data("scroll-to-id")
    if(typeof dataScrollToID != 'undefined') {
      const target = $('#'+dataScrollToID);
      //Check if the target exists in the DOM
      if (target.length === 1) {
        $(this).click(function(){
          $('html, body').stop().animate({ scrollTop: ( target.offset().top - 0/*$('nav').outerHeight()*/ ) }, 1000);
        })
      } else {
        console.warn('Scroll to ID: The ID \'' + dataScrollToID + '\' was not found in DOM or apperas multiple times');
      }
    }
  });
});

/* Mobile nav */
$(document).ready(() => {
  //Hamburger btn animation
  $('#mobile-nav-btn').click(() => {
    $('#mobile-nav-btn').toggleClass('mobile-nav-btn-clicked');
    $('body').toggleClass('body-noscroll');
    $('nav').toggleClass('mobile-nav-visible');
  });

  //Close nav on link click
  $('nav > a').click(() => {
    $('#mobile-nav-btn').removeClass('mobile-nav-btn-clicked');
    $('body').removeClass('body-noscroll');
    $('nav').removeClass('mobile-nav-visible');
  });
});
