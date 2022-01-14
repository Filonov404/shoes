$(function () {
  $(".slide-big").slick({
    asNavFor: ".slide-thumb",
    focusOnSelect: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: false,
    adaptiveHeight: true,
    arrows: false,
  });
  $(".slide-thumb").slick({
    asNavFor: ".slide-big",
    draggable: false,
    fade: true,
    arrows: false,
  });

  $(".slide-bigMobile").slick({
    asNavFor: ".slide-thumbMobile",
    slidesToShow: 3,
    slidesToScroll: 3,
    vertical: true,
    adaptiveHeight: true,
    focusOnSelect: true,
    mobileFirst: true
  });

  $(".slide-thumbMobile").slick({
    asNavFor: ".slide-bigMobile",
    fade: true,
    arrows: false,
  });
  $(".burger-menu ").on("click", ".bar", function () {
    $(".menu").slideToggle();
    $(".bar").toggleClass("change");
    $(".menu li").slideRight();
  });
});
