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
var firebaseConfig = {
  apiKey: "AIzaSyDAj-MVIfgsrc5ZlmFgQWm5cUxfQdQPVsQ",
  authDomain: "thinking-allowed.firebaseapp.com",
  projectId: "thinking-allowed",
  storageBucket: "thinking-allowed.appspot.com",
  messagingSenderId: "443277934701",
  appId: "1:443277934701:web:a4a0044866540bda07ff64",
  measurementId: "G-FHW74TTRVN"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
let contactInfo = firebase.database().ref("contacts");

let form  = document.querySelector("#contact");
form.addEventListener("submit",function(e){
  e.preventDefault();
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let phone = document.querySelector(".phone").value;
  let message = document.querySelector(".message").value;
  
  let newContactInfo = contactInfo.push();
  form.reset();
  document.querySelector('.alert').style.display = 'block';

  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);
  newContactInfo.set({
    username: name,
    email: email,
    phone: phone,
    message: message,
  });
})
$(document).on('keyup keypress', 'form input', function(e) {
  if(e.which == 13) {
    e.preventDefault();
    return false;
  }
});