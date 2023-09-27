const passwordInput = document.querySelector(".password-box input"),
copyIcon = document.querySelector(".password-box .copy-icon"),
rangeInput = document.querySelector(".range-box input"),
sliderNumber = document.querySelector(".range-box .slider-number"),
generateButton = document.querySelector(".generate-button");

//Characters of alphabet(a-z/A-Z), numbers(0-9) and Symbols($%&[]...)
let allCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!$%&[](){}+-#@";

//this function will be called on, page reload, generateButton clicked & rangeInput slide
const generatePassword = () => {
let newPassword = "";

//for loop will run till rangeInput value
for (let i = 0; i < rangeInput.value; i++) {
  let randomNumbers = Math.floor(Math.random() * allCharacters.length);
  newPassword += allCharacters[randomNumbers];
}
passwordInput.value = newPassword;
copyIcon.classList.replace("uil-file-check-alt", "uil-copy"); //replace icon
};

rangeInput.addEventListener("input", () => {
sliderNumber.innerText = rangeInput.value;
generatePassword();
});

//copy passInput's value on copyIcon click
//copy passInput's value on copyIcon click
copyIcon.addEventListener("click", () => {
navigator.clipboard.writeText(passwordInput.value);
copyIcon.classList.replace("uil-copy", "uil-file-check-alt"); //replace icon
});

generatePassword();
generateButton.addEventListener("click", generatePassword);