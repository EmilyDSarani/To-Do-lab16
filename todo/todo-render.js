import data from '../universal/data.js';


export function render(todo) {
    const list = document.getElementById('todo');
    const item = document.createElement('li');
    const input = document.createElement('input');
  

    input.setAttribute('type', 'checkbox');
    input.setAttribute('name', 'todo');
    input.setAttribute('value', todo.id);
    

    item.textContent = todo;

    item.classList.add('done');

    //list.style.textDecoration = 'line-through';
    
    list.append(
        item,
        input
    );

    
}

export function listcomplete(item){
    for (let todo of data) {
        const isComplete = item.completed[todo.id];
        if (isComplete){
            return true;
        }
    }
    return false;
}

