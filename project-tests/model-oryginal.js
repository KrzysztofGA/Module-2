//model
const contentDiv = document.getElementById('contentDiv');
let posX, posY, posXMouse, posYMouse;
let currentSelectedPage = 0; //0 = group select 1 = aboutcolors 2 = summary 3 = peronal notes
let currentlySelectedGroup = 0; //0 = self 1 = next color 2 = next color
let generateGroups = {
    blue: 1,
    green: 1,
    red: 2,
};
let groups = [
    {
        groupName: 'Red1',
        groupColor: 'red',
        notes: [
            {
                // how the model of the notes would look.
                ID: 1,
                content: 'text',
                aboutColor: 'red',
                agree: 0,
                disagree: 0,
                posX: 100, //x
                posY: 300, //y
                zIndex: 1,
            },
        ],
    },
];
let words = [
    {
        word: 'Hjelpsom',
        aboutGreen: {green: 5, blue: 3, red: 2},
        aboutRed: {red: 0, blue: 0, green: 0},
        aboutBlue: {blue: 5, green: 3, red: 2},
    },
];
let updates = []; //insert fake news

/*
let groups = [{ group: 'thegroup', color: 'blue', words: [{word: 'word1', about: 'green', agree: 2, disagree: 1}]}];
let greenAbout = [{ word: 'Hjelpsom', green: 5, blue: 3, red: 2}];
*/
