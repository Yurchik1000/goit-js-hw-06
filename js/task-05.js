
const nameInput = document.getElementById('name-input')
const nameOutput = document.getElementById('name-output')

nameInput.addEventListener('input', (e) => {
  if (nameInput.value.trim() !== "") {
    nameOutput.textContent = nameInput.value
  } else { nameOutput.textContent = 'Anonymous' }
})








console.log(nameOutput);