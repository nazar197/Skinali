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

  // Hamburger menu
  $('.menu-button').on('click', function () {
    $('.menu').toggleClass('menu_active');
  });

  // Select settings
  $('.select_checked').on('click', function () {
    $('.select__dropdown').toggleClass('select__dropdown_open');
  });

  $('.select__option').on('click', function () {
    let value = $(this).attr('data-value');
    $('#select-type').val(value);
    $('.select_checked').text(value);
    $('.select__dropdown').toggleClass('select__dropdown_open');
  });

  // Page link navigation settings
  $('a[href^="#"]').click(function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top - 135 + 'px'
    }, 500);
  });

  // Phone input mask
  $('[type="tel"]').mask('+380 (99) 999-99-99');

});