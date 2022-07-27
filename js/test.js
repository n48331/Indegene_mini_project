$(document).ready(function () {
  $(window).resize(function () {
    if ($(window).width() <= 800) {
      location.reload(true);
    }
  });

  if ($(window).width() < 1100) {
    $("#highlights__container").addClass("owl-carousel owl-theme");
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
      items: 1,
      margin: 20,
      loop: false,
      nav: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
        },
        1100: {
          items: 1,
        },
      },
    });
  });
  $(function () {
    // Owl Carousel
    var owl = $(".owl-carousel");
    owl.owlCarousel({
      items: 1,
      margin: 20,
      loop: false,
      nav: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
        },
        1100: {
          items: 1,
        },
      },
    });
  });
});

// $(document).ready(function () {
//     var divs = $("div > div");
//     for(var i = 0; i < divs.length; i+=4) {
//       divs.slice(i, i+4).wrapAll("<div class='new'></div>");
//     }
// });
