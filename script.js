const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const filterBtns = document.querySelectorAll('.filter-btn');

let tasks = [
    { id: 1, text: 'Complete assignment', completed: false },
    { id: 2, text: 'Read a book', completed: true },
    { id: 3, text: 'Attend class', completed: false },
    { id: 4, text: 'Workout', completed: true },
    { id: 5, text: 'Prepare for exam', completed: false }
];

let currentFilter = 'all';

function renderTasks() {
    taskList.innerHTML = '';
    let filteredTasks = tasks;

    if (currentFilter === 'pending') {
        filteredTasks = tasks.filter(t => !t.completed);
    } else if (currentFilter === 'completed') {
        filteredTasks = tasks.filter(t => t.completed);
    }

    filteredTasks.forEach(task => {
        const li = document.createElement('li');
        li.className = `task-item ${task.completed ? 'completed' : ''}`;
        li.innerHTML = `
            <input type="checkbox" ${task.completed ? 'checked' : ''} onchange="toggleTask(${task.id})">
            <span class="task-text">${task.text}</span>
            <div class="action-btns">
                <button class="complete-btn" onclick="toggleTask(${task.id})"><i class="fa-solid fa-check"></i></button>
                <button class="delete-btn" onclick="deleteTask(${task.id})"><i class="fa-solid fa-trash"></i></button>
            </div>
        `;
        taskList.appendChild(li);
    });
    updateStats();
}

function addTask() {
    const text = taskInput.value.trim();
    if (text) {
        tasks.push({ id: Date.now(), text, completed: false });
        taskInput.value = '';
        renderTasks();
    }
}

window.toggleTask = function(id) {
    tasks = tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t);
    renderTasks();
}

window.deleteTask = function(id) {
    tasks = tasks.filter(t => t.id !== id);
    renderTasks();
}

function updateStats() {
    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;
    const pending = total - completed;

    document.getElementById('allCount').innerText = total;
    document.getElementById('pendingCount').innerText = pending;
    document.getElementById('completedCount').innerText = completed;
    document.getElementById('pendingStat').innerText = `${pending} pending`;
    document.getElementById('completedStat').innerText = `${completed} completed`;
}

addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        renderTasks();
    });
});

renderTasks();