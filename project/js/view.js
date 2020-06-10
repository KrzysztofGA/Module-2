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

//--------------------------
//
//  Content functions
//
//---------------------------

//Generating content - notes
function content() {
    //grupa, user page, dodaj notatkę
    //użytkownik

    //sprawdzić jak działają funkcje pobierania danych
    //jak dane są zwracane, tu wygląda na to, że jako kod.
    //ustalić jakich danych potrzebuje funkcja wyświetlania
    //co zwraca funkcja
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

//Genereting note
function showNote() {
    //jakie parametry musi przyjmować funkcja by poprawnie wyświetlać notatkę
    //test
}
