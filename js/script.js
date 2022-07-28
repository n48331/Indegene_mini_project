$(document).ready(function () {
  $(window).resize(function () {
    if ($(window).width() <= 1100) {
      location.reload(true);
    }
  });

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

  $("#home_menu").click(function () {
    $("#deliver_menu").css("color", "");
    $(this).css({ color: "var(--menu-color-1)" });
  });
  $("#deliver_menu").click(function () {
    $("#home_menu").css("color", "");
    $(this).css("color", "var(--menu-color-1)");
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

// Contact US
$(document).ready(function () {
  $("#contact__form").validate({
    errorClass: "error fail-alert",
    validClass: "valid",
    rules: {
      name: {
        required: true,
        minlength: 4,
        // pattern: "^[a-zA-Z_]*$",
      },
      email: {
        required: true,
        email: true,
      },
      phone: {
        number: true,
        minlength: 10,
        maxlength: 10,
      },
    },
    messages: {
      name: {
        required: "Your name is required",
        minlength: "Enter at least 4 characters",
        // pattern: "Numbers are not allowed",
      },
      email: {
        required: "Your email is required",
        email: "Enter a valid email",
      },
      phone: {
        minlength: "10 digits is required",
        maxlength: "Not valid number.Enter only 10 digits",
      },
    },
    errorElement: "div",
    errorPlacement: function (error, element) {
      var placement = $(element).data("error");
      if (placement) {
        $(placement).append(error);
      } else {
        error.insertAfter(element);
      }
    },
  });
});
