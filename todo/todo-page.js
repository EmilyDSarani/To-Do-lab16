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

//my plan is to bring the lable over and do an eventListener to render the completed items through it...idk if that makes sense, but wanted to make a note. 
// can set this up so checkbox input and text for to is wrapped inside a label, and as long as those two things are in the label, you can click on the text and the checkbox will check. Can use CSS to make text be underline-- but it wont affect the completed data, still need an event listener on the label so that when the label is clicked the function is called that completes the tasks
