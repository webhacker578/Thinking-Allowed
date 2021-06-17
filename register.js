let registerForm = document.querySelector(".app-form");
registerForm.addEventListener("submit", function (e) {
    setTimeout(function () {
        registerForm.reset();
    }, 3000);
})