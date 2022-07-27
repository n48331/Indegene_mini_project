$(document).ready(function () {
  if ($(window).width() < 800) {
    $("#highlights__container").addClass("owl-carousel owl-theme");
  } else {
    $("#highlights__container").removeClass("owl-carousel owl-theme");
  }
  if ($(window).width() < 800) {
    $("#deliverables__container").addClass("owl-carousel owl-theme");
    var divs = $("#deliverables__container > div.item");
    for (var i = 0; i < divs.length; i += 4) {
      divs.slice(i, i + 4).wrapAll("<div></div>");
    }
  } else {
    $("#highlights__container").removeClass("owl-carousel owl-theme");
    $("#deliverables__container").removeClass("owl-carousel owl-theme");
  }

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

// $(window)
//   .bind("resize", function () {
//     console.log($(this).width());
//     if ($(this).width() > 800) {
//       $("#highlights__container")
//         .removeClass("owl-carousel owl-theme")
//         .addClass("card__container");
//     } else {
//       $("#highlights__container").addClass(
//         "card__container owl-carousel owl-theme"
//       );
//     }
//   })
//   .trigger("resize");
