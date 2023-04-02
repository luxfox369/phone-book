import {
  addContact,
  addUser,
  deleteContact,
  getContacts,
  loginUser,
} from "./api.js";

const formRef = document.querySelector("form");
const ulRef = document.querySelector("ul");

formRef.addEventListener("submit", onFormSubmit);
ulRef.addEventListener("click", removeContact);
async function onFormSubmit(e) {
  e.preventDefault();
  const { name, number } = e.currentTarget.elements;
  console.log(name.value, number.value);

  await addContact({
    name: name.value,
    number: number.value,
  }).then((data) => console.log(data));

  await getContacts().then((data) => markUpContacts(data));
}
function markUpContacts(contacts) {
  const markUp = contacts.map((contact) => {
    return `<li class="item"><p class="name">${contact.name}</p><p class="number">${contact.number}</p><button class="btn remove" id="${contact.id}">Стерти</button></li>`;
  });
  ulRef.innerHTML = markUp.join("");
}

getContacts().then((data) => markUpContacts(data));

async function removeContact(e) {
  if (e.target.nodeName !== "BUTTON") {
    return;
  }
  await deleteContact(e.target.id);
  await getContact().then((data) => markUpContacts(data));
}