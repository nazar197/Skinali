$(window).load(function () {
  // Before/after image changer
  $(".before-after").twentytwenty({
    before_label: 'Без скіналі', // Set a custom before label
    after_label: 'Зі скіналі' // Set a custom after label
  });
  // Slider
  $('.comparation-slider').slick({
    draggable: false,
    dots: true,
    swipe: false,
    dotsClass: 'comparation-slider__dots',
    prevArrow: $('.arrow-left'),
    nextArrow: $('.arrow-right')
  });
});