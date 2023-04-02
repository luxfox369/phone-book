axios.defaults.baseURL = 'git commit -m "first commit"';
const token = localStorage.getItem('token');
axios.defaults.headers.common.Authorization = `Bearer ${token}`;

export const addUser = async (user) => {
    try {
        const { data } = await axios.post('/users/signup', user)
        return data;
    }
    catch (error) {
        console.log(error);
    }
}
export const loginUser = async (user) => {
  try {
    const { data } = await axios.post("/users/login", user);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
export const addContact = async (contact) => {
  try {
    const { data } = await axios.post("/contacts", contact);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
export const getContacts = async () => {
  try {
    const { data } = await axios.get("/contacts");
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
export const deleteContact = async (contactId) => {
  try {
    const { data } = await axios.delete(`/contacts/${contactId}`);
  } catch (error) {
    console.log(error.message);
  }
};

