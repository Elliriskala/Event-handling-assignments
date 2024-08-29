'use strict';
// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here

function todoTasks(todo) {
  const ulElement = document.querySelector('ul');
  const liElement = document.createElement('li');

  const inputElement = document.createElement('input');
  inputElement.type = 'checkbox';
  inputElement.id = `todo-${todo.id}`;
  if (todo.completed) {
    inputElement.checked = true;
  }
  // Update the todoList array when a user checks an item to be done.
  inputElement.addEventListener('change', function () {
    todo.completed = inputElement.checked;
    console.log(`Task: ${todo.task}, Completed: ${todo.completed}`);
    console.log(`Updated to do list:`, todoList);
  });

  const labelElement = document.createElement('label');
  labelElement.htmlFor = `todo-${todo.id}`;
  labelElement.textContent = todo.task;

  // Creating remove button
  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  removeButton.addEventListener('click', function () {
    ulElement.removeChild(liElement);
    todoList.pop(todo.task);

    console.log(`Removed task: ${todo.task}`);
    console.log(`Updated to do list:`, todoList);
  });
  liElement.appendChild(inputElement);
  liElement.appendChild(labelElement);
  liElement.appendChild(removeButton);

  ulElement.appendChild(liElement);
}

todoList.forEach(todoTasks);

// Displaying the add item modal
const addItem = document.querySelector('.add-btn');
const modal = document.querySelector('dialog');
const itemForm = modal.querySelector('form');
const input = itemForm.querySelector('input');

addItem.addEventListener('click', function () {
  modal.showModal();
});

itemForm.addEventListener('submit', function (evt) {
  evt.preventDefault();

  const newTask = input.value;
  if (newTask != '') {
    const newTodo = {
      id: todoList.length + 1,
      task: newTask,
      completed: false,
    };

    todoList.push(newTodo);
    todoTasks(newTodo);
    console.log(`Updated to do list:`, todoList);

    input.value = '';
    modal.close();
  }
});
