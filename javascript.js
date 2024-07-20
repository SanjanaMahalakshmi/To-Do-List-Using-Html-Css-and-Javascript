function addTask() {
    const taskInput = document.getElementById('taskinput');
    const taskList = document.getElementById('taskList');


    const li = document.createElement('li');
    li.textContent = taskInput.value;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'DELETE';
    deleteButton.onclick = function() {
        taskList.removeChild(li);
    };

    li.appendChild(deleteButton);
    taskList.appendChild(li);

    taskInput.value = '';
}