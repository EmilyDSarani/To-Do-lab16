import data from '../universal/data.js';

export function render(todo) {
    const list = document.getElementById('todo');
    const item = document.createElement('li');
    //const input = document.createElement('check');

    // input.setAttribute('type', 'radio');
    // input.setAttribute('name', 'addItem');
    // input.setAttribute('value', userAdd.id);
  
    item.textContent = todo;

    
    list.append(
        item
    );

    
}

export function listcomplete(user){
    for (let list of data) {
        const isComplete = user.completed[list.id];
        if (isComplete){
            return true;
        }
    }
    return false;
}

