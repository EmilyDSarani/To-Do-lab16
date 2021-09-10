
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

