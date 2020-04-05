AOS.init({
  duration: 1200,
  disable: "phone",
});

var scroll = new SmoothScroll('a[href*="#"]', {
  offset: 70,
});

$(function () {
  $(".menuOpener").on("click keypress", function () {
    $(".menuOpener, .menuOpenerInner, .menu").toggleClass("active");
  });
});
