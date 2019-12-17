var scroll = new SmoothScroll('a[href*="#"]', {
    offset: 70,
});

$(".menuOpener").click(function () {
    $(".menuOpener, .menuOpenerInner, .menu").toggleClass("active");
});
