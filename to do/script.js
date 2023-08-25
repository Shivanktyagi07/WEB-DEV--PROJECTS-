const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', addTodo);

function addTodo(event) {
  event.preventDefault();
  
  const todoText = todoInput.value;
  
  if (todoText) {
    const todoItem = document.createElement('li');
    const todoTextSpan = document.createElement('span');
    const deleteButton = document.createElement('button');
    
    todoTextSpan.textContent = todoText;
    deleteButton.textContent = 'Delete';
    
    deleteButton.addEventListener('click', deleteTodo);
    
    todoItem.appendChild(todoTextSpan);
    todoItem.appendChild(deleteButton);
    
    todoList.appendChild(todoItem);
    
    todoInput.value = '';
  }
}

function deleteTodo() {
  const todoItem = this.parentElement;
  todoList.removeChild(todoItem);
}
