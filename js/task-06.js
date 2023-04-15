
const textInput = document.getElementById("validation-input");
const dataLength = textInput.getAttribute('data-length');


textInput.addEventListener('blur',() => {
  if(textInput.value.trim().length === Number(dataLength)) {
    textInput.classList.add('valid');
    textInput.classList.remove("invalid");
  } else {
    textInput.classList.add("invalid");
    textInput.classList.remove("valid");
  }
})
console.log(dataLength);


