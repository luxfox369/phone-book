1. Створити 4 файли html:
     - index.html
     - register.html
     - login.html
     - contacts.html

2. У файлі index.html створити список із трьох посилань: Sign Up, Log In, Contacts
3. У файлі register.html має бути три поля (такі як вказано у документації бекенда)
4. У файлі login.html має бути два поля (такі як вказано у документації бекенда)
5. У файлі contacts.html має бути бути два поля (такі як вказано у документації бекенда), та список, в який будемо додавати контакти
6. Для запитів використовуємо бібілотеку axios
7. При логінізації потрібно додавати token в localStorage та потім використовувати його для створення контактів

Необхідно реалізувати реєстрацію користувача, логінізацію та додавання контактів.


Підключення бібліотеки: <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

Запит на бекенд - axios.defaults.baseURL = 'https://connections-api.herokuapp.com/'
axios.defaults.headers.common.Authorization = `Bearer ${token}`

Посилання на документацію бекенда - https://connections-api.herokuapp.com/docs/#/
