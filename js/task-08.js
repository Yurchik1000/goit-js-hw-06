
const form = document.querySelector('.login-form')

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault()
  
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === '' || password === '') {
    return alert ('Всі поля повинні бути заповнені!')
  }     
  const formData = {
    email: email,
    password: password
  }
    console.log(formData);

  form.reset()
}