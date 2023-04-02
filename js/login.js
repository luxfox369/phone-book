import { addUser, loginUser } from "./api.js";

const formRef = document.querySelector("form");

formRef.addEventListener("submit", onFormSubmit);
function onFormSubmit(e) {
  e.preventDefault();
  const { email, password } = e.currentTarget.elements;
  console.log("залогінився- ",email.value, password.value);
  //axios.post("/users/login", user)
  loginUser({
    email: email.value,
    password: password.value,
  }).then((data) => {
    console.log("data after loginUser ", data);
    localStorage.setItem("token", data.token)
});
}//записали в localStorage token отриманий від сервера