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
// let form = document.querySelector(".container")
// let button = document.querySelector(".submit-btn");
// button.addEventListener("click",function(e){
//   e.preventDefault();
//   alert("Hello")
// })