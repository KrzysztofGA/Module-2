const model = {
    users: [
        {name: 'Tom', color: 'blue'},
        {name: 'Bob', color: 'green'},
        {name: 'Adam', color: 'red'},
    ],
    activeGroup: {name: 'Red 1', color: 'red'},
};

//version 1
show();
function show() {
    let listColorUsers = '';
    if (model.activeGroup.color == 'red') {
        listColorUsers = listUsers(model.users, 'red');
    }
    contentDiv.innerHTML = `
        <div>
            ${listColorUsers}        
        </div>
        `;
}
function listUsers(users, color) {
    let listUsersHtml = '';
    if ((color = 'red')) {
        for (let i = 0; i < users.length; i++) {
            if ((users[i].color = 'red')) {
                listUsersHtml += `
                    <li>${users[i].name}</li>
                `;
            }
        }
    }
    return `
    <ol>
        ${listUsersHtml}
    </ol>
    `;
}

//version 2
show();
function show() {
    let listColorUsers = '';
    if (model.activeGroup.color == 'red') {
        listColorUsers = listUsers('red');
    }
    contentDiv.innerHTML = `
        <div>
            ${listColorUsers}        
        </div>
        `;
}
function listUsers(color) {
    const users = model.users;
    let listUsersHtml = '';
    if ((color = 'red')) {
        for (let i = 0; i < users.length; i++) {
            if ((users[i].color = 'red')) {
                listUsersHtml += `
                    <li>${users[i].name}</li>
                `;
            }
        }
    }
    return `
    <ol>
        ${listUsersHtml}
    </ol>
    `;
}
