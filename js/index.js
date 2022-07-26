$(document).ready(function () {
  $(".header a").click(function () {
    $(this).css("color", "red");
  });

  $(function () {
    // Owl Carousel
    var owl = $(".owl-carousel");
    owl.owlCarousel({
      items: 2,
      margin: 20,
      loop: false,
      nav: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
        },

        800: {
          items: 2,
        },
      },
    });
  });
});
