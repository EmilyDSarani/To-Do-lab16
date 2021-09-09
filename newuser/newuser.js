import { setUser } from '../universal/local-storage.js';
import userCreate from './usercreate.js';


const haveAccount = document.getElementById ('have-account');

const form = document.getElementById('create-user');

//the user can set up their account by getting this data
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const user = userCreate(data);



    setUser(user); 
    window.location.href = '../todo/index.html';
});

//takes the user to a new page if they already have an account
haveAccount.addEventListener('click', () =>{
    window.location.href = '../olduser/index.html';

});
