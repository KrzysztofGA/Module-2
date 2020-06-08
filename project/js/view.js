show();
function show() {
    contentDiv.innerHTML = `
        <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
            <div class="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul class="navbar-nav mr-auto">
                    ${menuBlue()}
                    ${menuGreen()}
                    ${menuRed()}
                    <a class="navbar-brand" href="#">+ ADD NOTE +</a>
                </ul>
                <ul class="navbar-nav">
                    ${menuUser()}   
                </ul>
            </div>
        </nav>
        ${content()}
            `;
}

//Ultimately, the menu generation must be combined into one menu-generating function for each color
function menuBlue() {
    return `
    <li class="nav-item dropdown">
        <a
            class="nav-link dropdown-toggle navbar-brand"
            href="#"
            id="dropdownBlue"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            >Blue groups</a
        >
        <div class="dropdown-menu" aria-labelledby="dropdown01">
            <a class="dropdown-item" href="#">Blue 1</a>
            <a class="dropdown-item" href="#">Blue 2</a>
            <a class="dropdown-item" href="#">Blue 3</a>
        </div>
    </li>
    `;
}
function menuGreen() {
    return `
    <li class="nav-item dropdown">
        <a
            class="nav-link dropdown-toggle navbar-brand"
            href="#"
            id="dropdownGreen"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            >Green groups</a
        >
        <div class="dropdown-menu" aria-labelledby="dropdown01">
            <a class="dropdown-item" href="#">Green 1</a>
        </div>
    </li>
    `;
}
function menuRed() {
    return `
    <li class="nav-item dropdown">
        <a
            class="nav-link dropdown-toggle navbar-brand"
            href="#"
            id="dropdownRed"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            >Red groups</a
        >
        <div class="dropdown-menu" aria-labelledby="dropdown01">
            <a class="dropdown-item" href="#">Red 1</a>
            <a class="dropdown-item" href="#">Red 2</a>
        </div>
    </li>
    `;
}

//Generating user menu
function menuUser() {
    return `
    <li class="nav-item dropdown">
    <a
        class="nav-link dropdown-toggle navbar-brand"
        href="#"
        id="dropdownUser"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        >Change user</a
    >
    <div class="dropdown-menu" aria-labelledby="dropdown01">
        <a class="dropdown-item" href="#">Mr. Blue</a>
        <a class="dropdown-item" href="#">Mr. Green</a>
        <a class="dropdown-item" href="#">Mr. Red</a>
    </div>
    </li>
    `;
}

//Generating content - notes
function content() {
    return `
    <div class="container">
        <div id="mydiv">
            <div id="mydivheader">Click here to move</div>
            <p>Move</p>
            <p>this</p>
            <p>DIV</p>
        </div>
    </div>
    `;
}

//Make the DIV element draggable:
dragElement(document.getElementById('mydiv'));

function dragElement(elmnt) {
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
    if (document.getElementById(elmnt.id + 'header')) {
        /* if present, the header is where you move the DIV from:*/
        document.getElementById(elmnt.id + 'header').onmousedown = dragMouseDown;
    } else {
        /* otherwise, move the DIV from anywhere inside the DIV:*/
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = elmnt.offsetTop - pos2 + 'px';
        elmnt.style.left = elmnt.offsetLeft - pos1 + 'px';
    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
