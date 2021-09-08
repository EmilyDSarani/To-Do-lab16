
const submit = document.getElementById('submit');
const haveAccount = document.getElementById ('have-account');


submit.addEventListener('submit', (e) => {
    e.preventDefault();

    window.location = 'todo';
});

haveAccount.addEventListener('click', () =>{
    window.location = 'olduser';

});
