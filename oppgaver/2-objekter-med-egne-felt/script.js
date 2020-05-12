// Model
var tasks = [
    {description: 'Handle til middag', isDone: true},
    {description: 'Lage middag', isDone: false},
    {description: 'Spise middag', isDone: false},
];

// Controller
var taskDescriptionInput = document.getElementById('taskDescription');

function addTask() {
    tasks.push({
        description: taskDescriptionInput.value,
        isDone: false,
    });
    taskDescriptionInput.value = '';
    show();
}

// View
var tasksTable = document.getElementById('tasksTable');
show();

function show() {
    let html = `
                        <tr>
                            <th>Oppgave</th>
                            <th>Gjort</th>
                            <th></th>
                        </tr>`;
    for (let i = 0; i < tasks.length; i++) {
        html += createHtmlRow(i);
    }
    tasksTable.innerHTML = html;
}

function createHtmlRow(i) {
    const task = tasks[i];
    const checkedHtml = task.isDone ? 'checked="checked"' : '';
    if (!task.editMode)
        return `<tr>
                            <td>${task.description}</td>
                            <td><input onchange="changeIsDone(this, ${i})" type="checkbox" ${checkedHtml} /></td>
                            <td>
                                <button onclick="deleteTask(${i})">Slett</button>
                                <button onclick="editTask(${i})">Rediger</button>
                            </td>
                        </tr>
                        `;
    return `<tr>
                            <td><input id="editDescription${i}" type="text" value="${task.description}"/></td>
                            <td><input onchange="changeIsDone(this, ${i})" type="checkbox" ${checkedHtml} /></td>
                            <td>
                                <button onclick="updateTask(${i})">Lagre</button>
                            </td>
                        </tr>
                        `;
}

function changeIsDone(checkbox, index) {
    tasks[index].isDone = checkbox.checked;
    show();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    show();
}

function editTask(index) {
    tasks[index].editMode = true;
    show();
}

function updateTask(index) {
    const id = `editDescription${index}`;
    const inputTag = document.getElementById(id);
    const task = tasks[index];
    task.description = inputTag.value;
    task.editMode = false;
    show();
}
