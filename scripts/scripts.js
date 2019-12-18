AOS.init({
  duration: 1200
});

var scroll = new SmoothScroll('a[href*="#"]', {
  offset: 70
});

$(".menuOpener").click(function() {
  $(".menuOpener, .menuOpenerInner, .menu").toggleClass("active");
});
