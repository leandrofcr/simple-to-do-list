// ALTERA A CLASSE DO ELEMENTO PARA 'selected'.
function selectedClass() {
  const currentSelected = document.querySelector('.selected');
  if (currentSelected !== null) {
    currentSelected.classList.remove('selected');
  }
  this.classList.add('selected');
}

// ADICIONA A CLASSE 'completed' CASO NAO TENHA, OU REMOVE CASO TENHA.
function completedClass() {
  if (this.className.includes('completed')) {
    this.classList.remove('completed');
  } else {
    this.classList.add('completed');
  }
}

// ADICIONA O TEXTO DE INPUT NA LISTA DE TAREFAS.
function addTask() {
  const inputText = document.querySelector('#texto-tarefa');
  const taskList = document.querySelector('#lista-tarefas');

  const newElem = document.createElement('li');
  newElem.innerText = inputText.value;
  newElem.className = 'list-item';
  taskList.appendChild(newElem);

  inputText.value = '';

  newElem.addEventListener('click', selectedClass);
  newElem.addEventListener('dblclick', completedClass);

  console.log(newElem.innerHTML);
}

const addButton = document.getElementById('criar-tarefa');
addButton.addEventListener('click', addTask);

// BOTÃO PARA LIMPAR TODA LISTA DE TAREFAS
function clearList() {
  const taskList = document.getElementById('lista-tarefas');
  taskList.innerHTML = '';
}

const clearButton = document.getElementById('apaga-tudo');
clearButton.addEventListener('click', clearList);

// BOTÃO PARA REMOVER AS TAREFAS FINALIZADAS
function clearCompleted() {
  const completedList = document.getElementsByClassName('completed');
  for (let index = 0; index <= completedList.length; index += 1) {
    completedList[index].parentNode.removeChild(completedList[index]);
  }
}

const completedButton = document.getElementById('remover-finalizados');
completedButton.addEventListener('click', clearCompleted);
