//import { listcomplete } from '../universal/utils';

export function render(todo) {
    
    const item = document.createElement('li');
    const input = document.createElement('input');
    const label = document.createElement ('label');
  

    input.setAttribute('type', 'checkbox');
    input.setAttribute('name', 'todo');
    input.setAttribute('value', todo.id);
    

    item.textContent = todo.todo;

    input.classList.add('done');

    //list.style.textDecoration = 'line-through';
    
    label.append(
        item,
        input
    );

    return label; 
}


// can set this up so checkbox input and text for to is wrapped inside a label, and as long as those two things are in the label, you can click on the text and the checkbox will check. Can use CSS to make text be underline-- but it wont affect the completed data, still need an event listener on the label so that when the label is clicked the function is called that completes the tasks
//most people are rendering text and button within each li and the button will have a listener that will change it. 
