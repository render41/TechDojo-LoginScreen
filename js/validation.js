/** @type {NodeList<HTMLElement>} */
let toggleEyes = document.getElementsByClassName("icon-eye");
/** @type {NodeListOf<HTMLInputElement>} */
let passwordInputs = document.querySelectorAll(
  "#password-input, #create-password-input, #confirm-password-input"
);

function togglePasswordVisibility(input, eyeIcon) {
  if (input.type === "password") {
    input.type = "text";
    eyeIcon.textContent = "visibility_off";
  } else {
    input.type = "password";
    eyeIcon.textContent = "visibility";
  }
}

for (let i = 0; i < passwordInputs.length; i++) {
  const passwordInput = passwordInputs[i];
  const toggleEye = toggleEyes[i];

  toggleEye.addEventListener("click", function () {
    togglePasswordVisibility(passwordInput, toggleEye);
  });
}
