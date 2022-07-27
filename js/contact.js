$(document).ready(function () {
  var date = new Date();
  var year = date.getFullYear();
  $("#contact__form").validate({
    errorClass: "error fail-alert",
    validClass: "valid",
    rules: {
      name: {
        required: true,
        minlength: 4,
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
