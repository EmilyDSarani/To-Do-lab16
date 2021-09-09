import { addTodo, completeTodo, setTodos } from '../universal/local-storage.js';
import { listcomplete } from './todo-utils.js';
import { findById } from '../universal/array.js';

export function render(userAdd) {
    const list = document.getElementById('todo');
    const item = document.createElement('li');
    const button = document.createElement('div');
    const input = document.createElement('check');

    input.setAttribute('type', 'radio');
    input.setAttribute('name', 'addItem');
    input.setAttribute('value', userAdd.id);
  
    button.classList.add('buttons');

    item.append(
        button
    );
    list.append(
        item
    );
}
