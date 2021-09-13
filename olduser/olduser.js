import { getUser } from '../universal/local-storage.js';
//import data from '../universal/data.js';


const noAccount = document.getElementById ('no-account');
//const formEl = document.forms.oldform;
const formEl = document.querySelector('#oldform');

formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(formEl);
    const password = formData.get('password');
    const user = getUser();


    if (password === user.password){
        window.location = '../todo/index.html';
    } else {
        alert('Incorrect Password');
    }
});



noAccount.addEventListener('click', () =>{
    window.location.href = '../index.html';

});