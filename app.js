$(document).ready(function () {
  $('.navbar-toggler').on('click', function () {
    $('.navbar-toggle-icon').toggleClass('open');
  });
});

$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});

let form = document.querySelector("#contact");
form.addEventListener("submit", function () {
  setTimeout(function () {
    form.reset();
  }, 3000);
})


<<<<<<< HEAD

=======
>>>>>>> b008712e6f72dbf431f5d7606d49f0f70770fc86
$(document).on('keyup keypress', 'form input', function (e) {
  if (e.which == 13) {
    e.preventDefault();
    return false;
  }
});



