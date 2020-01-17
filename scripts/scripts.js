AOS.init({
  duration: 1200
});

// AOS.init({
//   disable: 'mobile'
// });

AOS.init({
  disable: function () {
    var maxWidth = 760;
    return window.innerWidth < maxWidth;
  }
});

var scroll = new SmoothScroll('a[href*="#"]', {
  offset: 70
});

$(function () {
  $(".menuOpener").on("click keypress", function () {
    $(".menuOpener, .menuOpenerInner, .menu").toggleClass("active");
  });
});