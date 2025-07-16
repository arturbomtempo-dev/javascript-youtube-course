const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

document.getElementById('addTaskBtn').addEventListener('click', () => {
    const task = taskInput.value.trim();

    if (!task) {
        alert("Digite uma tarefa válida.");
        return;
    }

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push({ text: task, done: false });
    localStorage.setItem('tasks', JSON.stringify(tasks));

    taskInput.value = "";
    alert("Tarefa adicionada!");
});

document.getElementById('loadTasksBtn').addEventListener('click', () => {
    taskList.innerHTML = "";
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    if (tasks.length === 0) {
        taskList.innerHTML = "<li>Nenhuma tarefa salva.</li>";
        return;
    }

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task.text;
        taskList.appendChild(li);
    });
});