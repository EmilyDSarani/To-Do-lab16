import { getUser, getTodos } from '../universal/local-storage.js';

const logIn = document.getElementById('log');
const noAccount = document.getElementById ('no-account');
const formEl = document.forms.oldform;

logIn.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(formEl);
    const password = formData.get('password');

    getUser(password);
    getTodos(password);

    if (password === 'password'){
        window.location = 'todo';
    } else {
        alert('Incorrect Password');
    }
});



noAccount.addEventListener('click', () =>{
    window.location.href = '../newuser/index.html';

});