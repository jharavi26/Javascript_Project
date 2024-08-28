const input = document.querySelector('input');
const addtodo = document.querySelector('#addtodo');
const output = document.querySelector('#output');

addtodo.addEventListener('click', () =>{
    const todo = input.value;
    if(todo === ' ')
    {
        alert('Please enter a ToDo');
        return;

    }

    else{
        const li=document.createElement('li');
        li.innerHTML = `<span>${todo}</span>
        <button id = "listBtn" onclick="removeTodo(this)">Remove</button>`
        output.appendChild(li);
        input.value = " ";
    }
});


function removeTodo(element){
    console.log(element.parentNode)
    console.log("Inside remove Todo")
    element.parentNode.remove();
}