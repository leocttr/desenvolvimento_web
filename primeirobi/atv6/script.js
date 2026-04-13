const input = document.getElementById('taskInput');
const btn = document.getElementById('addTaskButton');
const list = document.getElementById('taskList');

function addTask() {
    const taskText = input.value.trim();

    if (taskText !== "") {
        const li = document.createElement("li");

        li.innerHTML = `
            <span>
                <input type="checkbox" class="check-task">
                ${taskText}
            </span>
            <button class="remove-btn">Remover</button>
        `;
        list.appendChild(li);
        input.value = ""; 
        input.focus();    
    }
}


btn.addEventListener('click', addTask);

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});

list.addEventListener('click', (event) => {
    const target = event.target;

    if (target.classList.contains('remove-btn')) {
        target.closest('li').remove();
    }

    if (target.classList.contains('check-task')) {
        target.closest('li').classList.toggle('completed');
    }
});