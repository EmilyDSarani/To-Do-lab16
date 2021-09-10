import data from '../universal/data.js';


export function render(todo) {
    
    const item = document.createElement('li');
    const input = document.createElement('input');
  

    input.setAttribute('type', 'checkbox');
    input.setAttribute('name', 'todo');
    input.setAttribute('value', todo.id);
    

    item.textContent = todo.todo;

    input.classList.add('done');

    //list.style.textDecoration = 'line-through';
    
    item.append(
        input
    );

    return item; 
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

