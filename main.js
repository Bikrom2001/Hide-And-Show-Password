const eyeIcons = document.getElementById("eyeIcons");
const password = document.getElementById("password");

eyeIcons.onclick = function () {
  if (password.type == "password") {
    password.type = "text";
    eyeIcons.src = "eye-icons/eye-open.png";
  } else {
    password.type = "password";
    eyeIcons.src = "eye-icons/eye-close.png";
  }
};
