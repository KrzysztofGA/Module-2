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
    contentDiv.innerHTML = (
        <div>
            <ol>${listUsers(model.users, model.activeGroup.color)}</ol>
        </div>
    );
}
function listUsers(users, color) {
    return users
        .filter((u) => u.color == color)
        .map((u) => <li>${u.name}</li>)
        .join('');
    // let listUsersHtml = '';
    // for (let i = 0; i < users.length; i++) {
    //     if (users[i].color = color) {
    //         listUsersHtml += <li>${users[i].name}</li>;
    //     }
    // }
    // return listUsersHtml;
}
