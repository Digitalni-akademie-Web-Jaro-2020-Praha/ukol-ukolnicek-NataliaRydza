'use strict';

console.log('funguju!');

const tasks = ['Vyprat ponožky', 'Naučit se funkce vyššího řádu', 'Nakoupit na víkend'];

const updateTasks = () => {
  const todoElm = document.querySelector('.todo__tasks');
  todoElm.innerHTML = ``;
  for (let i = 0; i < tasks.length; i++) {
    todoElm.innerHTML += `<div class="task">${tasks[i]}</div>`
  }
}

updateTasks()