// Seleccionar elementos
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Array para almacenar las tareas
let tasks = [];

// Función para agregar una nueva tarea
function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText !== '') {
        const task = {
            text: taskText,
            completed: false
        };
        
        tasks.push(task);
        taskInput.value = '';
        renderTasks();
    }
}

// Función para renderizar la lista de tareas
function renderTasks() {
    taskList.innerHTML = '';
    
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task.text;
        
        if (task.completed) {
            li.classList.add('completed');
        }

        const completeBtn = document.createElement('button');
        completeBtn.textContent = '✓';
        completeBtn.addEventListener('click', function() {
            toggleCompleteTask(index);
        });

        li.appendChild(completeBtn);
        taskList.appendChild(li);
    });
}

// Función para marcar/desmarcar una tarea como completada
function toggleCompleteTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

// Evento para agregar tareas
addTaskBtn.addEventListener('click', addTask);
