
const form = document.querySelector('.login-form')

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault()
  
  // const email = form.elements.email.value;
  // const password = form.elements.password.value;
const { email, password } = form.elements;


  if (email.value === '' || password.value.trim() === '') {
    return alert ('Всі поля повинні бути заповнені!')
  }     
  const formData = {
    email: email,
    password: password
  }
    console.log(formData);

  form.reset()
}