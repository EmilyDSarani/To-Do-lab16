import { addTodo, getTodos } from '../universal/local-storage.js';
import { render } from './todo-render.js';




const addButton = document.querySelector('#add');


addButton.addEventListener('submit', (e) => {
    e.preventDefault();
    const newItem = document.getElementById('item').value;
    const items = getTodos();

    if (newItem) {

        addTodo(newItem);

        document.getElementById('item').value = '';

        for (let item of items){
            render(item);
        }
    } else {
        alert('you forgot to type in your task!');
    }
});


//ask Erich if there is a way to loop the data something similiar to "If there is a user, get todo, else set todo list"