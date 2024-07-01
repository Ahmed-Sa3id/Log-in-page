let signinBtn = document.getElementById("signinBtn");
let signupBtn = document.getElementById("signupBtn");
let title = document.getElementById("title");
let nameField = document.getElementById("nameField");
let mussageForget = document.getElementById("mussageForget");

// Hide the mussageForget element initially
mussageForget.style.display = 'none';

signinBtn.onclick = function() {
  nameField.style.maxHeight = "0";
  title.innerHTML = "Sign In";
  signupBtn.classList.add("disable");
  signinBtn.classList.remove("disable");

  // Show the mussageForget element when signing in
  mussageForget.style.display = 'block';
};

signupBtn.onclick = function() {
  nameField.style.maxHeight = "60px";
  title.innerHTML = "Sign Up";
  signinBtn.classList.add("disable");
  signupBtn.classList.remove("disable");

  // Hide the mussageForget element when signing up
  mussageForget.style.display = 'none';
};
