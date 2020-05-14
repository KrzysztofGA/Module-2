// Model
const tasks = [
    {
        description: 'Handle til middag',
        person: 'Adam',
        date: '2020-03-23',
        isDone: true,
        completed: '2020-03-27',
    },
    {
        description: 'Lage middag',
        person: 'Peter',
        date: '2020-03-24',
        isDone: false,
        completed: '',
    },
    {
        description: 'Spise middag',
        person: 'Axel',
        date: '2020-03-25',
        isDone: false,
        completed: '',
    },
];

// Controller
const taskDescriptionInput = document.getElementById('taskDescription');
const personDescriptionInput = document.getElementById('personDescription');
const dateDescriptionInput = document.getElementById('dateDescription');

function addTask() {
    tasks.push({
        description: taskDescriptionInput.value,
        person: personDescriptionInput.value,
        date: dateDescriptionInput.value,
        isDone: false,
        completed: '',
    });
    taskDescriptionInput.value = '';
    personDescriptionInput.value = '';
    dateDescriptionInput.value = '';
    show();
}

// View
const tasksTable = document.getElementById('tasksTable');
show();

function show() {
    let html = `<tr>
                    <th>Oppgave</th>
                    <th>Person</th>
                    <th>Frist</th>
                    <th>Gjort</th>
                    <th>Gjort dato</th>
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
                    <td>${task.person}</td>
                    <td>${displayLocalDate(task.date)}</td>
                    <td><input onchange="changeIsDone(this, ${i})" type="checkbox" ${checkedHtml} /></td>
                    <td>${displayLocalDate(task.completed)}</td>
                    <td>
                        <button onclick="deleteTask(${i})">Slett</button>
                        <button onclick="editTask(${i})">Rediger</button>
                    </td>
                </tr>`;
    return `<tr>
                <td><input id="editDescription${i}" type="text" value="${task.description}"/></td>
                <td><input id="editPerson${i}" type="text" value="${task.person}"/></td>
                <td><input id="editDate${i}" type="date" value="${task.date}"/></td>
                <td><input onchange="changeIsDone(this, ${i})" type="checkbox" ${checkedHtml} /></td>
                <!-- <td><input id="editCopleted${i}" type="date" value="${task.completed}"/></td> -->
                <!-- allows editing complited -->
                <td>${displayLocalDate(task.completed)}</td>
                <td>
                    <button onclick="updateTask(${i})">Lagre</button>
                </td>
            </tr>`;
}

function changeIsDone(checkbox, index) {
    tasks[index].isDone = checkbox.checked;
    checkbox.checked
        ? (tasks[index].completed = new Date().toISOString().substr(0, 10))
        : (tasks[index].completed = '');
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
    const idDescription = `editDescription${index}`;
    const inputDescritpion = document.getElementById(idDescription);
    const idPerson = `editPerson${index}`;
    const inputPerson = document.getElementById(idPerson);
    const idDate = `editDate${index}`;
    const inputDate = document.getElementById(idDate);
    // const idCompleted = `editCompleted${index}`; //allows editing completed
    // const inputCompleted = document.getElementById(idCompleted); //allows editing completed
    const task = tasks[index];
    task.description = inputDescritpion.value;
    task.person = inputPerson.value;
    task.date = inputDate.value;
    task.editMode = false;
    // task.completed = inputCompleted.value;  //allows editing completed
    show();
}

function displayLocalDate(dateIso) {
    return dateIso ? new Date(dateIso).toLocaleDateString() : '';
}
