var firebaseConfig2 = {
    apiKey: "AIzaSyBrCytg9YG8bB6eWmxqiw70vsxH5xn_5gg",
    authDomain: "thinking-register.firebaseapp.com",
    databaseURL: "https://thinking-register-default-rtdb.firebaseio.com",
    projectId: "thinking-register",
    storageBucket: "thinking-register.appspot.com",
    messagingSenderId: "193097788609",
    appId: "1:193097788609:web:3138b0567eccd18f9eb840",
    measurementId: "G-X7MFBX6RV7"
  };
  firebase.initializeApp(firebaseConfig2);
  let registerInfo = firebase.database().ref("registered");
  
  let registerForm  = document.querySelector("#app-form");
  registerForm.addEventListener("submit",function(e){
    // e.preventDefault();
    let regName = document.querySelector("#regname").value;
    let schoolName = document.querySelector("#regschool").value;
    let schoolEmail = document.querySelector("#regemail").value;
    let contact = document.querySelector("#regcontact").value;
    
    let newRegInfo = registerInfo.push();
  
    setTimeout(function(){
      registerForm.reset();   },3000);
      
    newRegInfo.set({
      regName: regName ,
      schoolName: schoolName,
      schoolEmail: schoolEmail,
      contact: contact,
    });
    


  })
  $(document).on('keyup keypress', 'form input', function(e) {
    if(e.which == 13) {
      e.preventDefault();
      return false;
    }
  });
  