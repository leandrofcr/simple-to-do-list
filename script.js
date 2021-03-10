

// ADICIONA O TEXTO DE INPUT NA LISTA DE TAREFAS.
function addTask() {

  let inputText = document.querySelector('#texto-tarefa');
  let taskList = document.querySelector('#lista-tarefas');

  let newElem = document.createElement('li');
  newElem.innerText = inputText.value;
  newElem.className = 'list-item';

  taskList.appendChild(newElem);

  inputText.value = '';
}

let button = document.getElementById('criar-tarefa');
button.addEventListener('click', addTask);
