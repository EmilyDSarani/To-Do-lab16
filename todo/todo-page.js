import { addTodo, getTodos } from '../universal/local-storage.js';
import { render } from './todo-render.js';

const list = document.getElementById('todo');
// const input = document.querySelector('.done');
const addButton = document.querySelector('#add');
const logOut = document.querySelector('#log-out');

const items = getTodos();
for (let item of items){
            
    const todoItem = render(item);
    list.append(todoItem);
}

addButton.addEventListener('click', (e) => {
    e.preventDefault();
    const newItem = document.getElementById('item');
    

    if (newItem.value) {

        addTodo(newItem.value);

        document.getElementById('item').value = '';

        const items = getTodos();

        list.textContent = '';

        for (let item of items){
            
            const todoItem = render(item);
            list.append(todoItem);
        }
    } else {
        alert('you forgot to type in your task!');
    }
});


logOut.addEventListener('click', () =>{
    window.location.href = '../olduser/index.html';

});


