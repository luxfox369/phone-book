import { addUser }  from './api.js';
const refs = {
    form: document.querySelector('form'),
}
refs.form.addEventListener('submit', onSubmit);
  function onSubmit(e){
    e.preventDefault();
    const { name, email, password } = e.currentTarget.elements;
    // console.log(name.value);
    // console.log(email.value);
    // console.log(password.value);
    addUser({
      name: name.value,
      email: email.value,
      password: password.value,
    })
      .then(data => console.log(data));
}