//model
const model = {
    user: {
        name: 'Terje',
        color: 'green'
    },
    currentSelectedPage: 0, //0 = group select 1 = aboutcolors 2 = summary 3 = peronal notes
    currentlySelectedGroup: 0, //0 = self 1 = next color 2 = next color
    groupCounts: {
        blue: 2,
        green: 2,
        red: 2,
    },
    groups: [
        {
            name: "red 1",
            color: "red",            
        },
        {
            name: "green 1",
            color: "green",            
        },
        {
            name: "blue 1",
            color: "blue",            
        },
        {
            name: "red 2",
            color: "red",            
        },
        {
            name: "green 2",
            color: "green",            
        },
        {
            name: "blue 2",
            color: "blue",            
        }
    ],
    notes: [
        {// how the model of the notes would look.
            ID: 1,
            content: "Social",
            aboutColor: "red",
            group: 'red 1',
            agree: 3,//['Terje', 'Per', 'Espen'],
            disagree: 0, //['Knut'],
            posX: 100, //x
            posY: 300, //y
            zIndex: 1
        }, 
        {// how the model of the notes would look.
            ID: 2,
            content: "Forstående",
            aboutColor: "red",
            group: 'red 1',
            agree: 5,//['Terje', 'Per', 'Espen'],
            disagree: 0, //['Knut'],
            posX: 150, //x
            posY: 250, //y
            zIndex: 2
        }, 
        {// how the model of the notes would look.
            ID: 3,
            content: "Lyttende",
            aboutColor: "red",
            group: 'red 1',
            agree: 1,//['Terje', 'Per', 'Espen'],
            disagree: 0, //['Knut'],
            posX: 200, //x
            posY: 100, //y
            zIndex: 3
        }, 
        {// how the model of the notes would look.
            ID: 4,
            content: "Hjelpsom",
            aboutColor: "red",
            group: 'red 1',
            agree: 2,//['Terje', 'Per', 'Espen'],
            disagree: 0, //['Knut'],
            posX: 100, //x
            posY: 500, //y
            zIndex: 4
        }, 
        {// how the model of the notes would look.
            ID: 5,
            content: "Kreativ",
            aboutColor: "green",
            group: 'green 1',
            agree: 6,//['Terje', 'Per', 'Espen'],
            disagree: 0, //['Knut'],
            posX: 100, //x
            posY: 300, //y
            zIndex: 1
        }, 
        {// how the model of the notes would look.
            ID: 6,
            content: "Inspirerende",
            aboutColor: "green",
            group: 'green 1',
            agree: 1,//['Terje', 'Per', 'Espen'],
            disagree: 0, //['Knut'],
            posX: 100, //x
            posY: 500, //y
            zIndex: 2
        },
        {// how the model of the notes would look.
            ID: 7,
            content: "Lederskap",
            aboutColor: "green",
            group: 'green 1',
            agree: 3,//['Terje', 'Per', 'Espen'],
            disagree: 0, //['Knut'],
            posX: 200, //x
            posY: 300, //y
            zIndex: 3
        }, 
        {// how the model of the notes would look.
            ID: 8,
            content: "Nytenkende",
            aboutColor: "green",
            group: 'green 1',
            agree: 4,//['Terje', 'Per', 'Espen'],
            disagree: 0, //['Knut'],
            posX: 200, //x
            posY: 500, //y
            zIndex: 4
        }, 
        {// how the model of the notes would look.
            ID: 9,
            content: "Logisk",
            aboutColor: "blue",
            group: 'blue 1',
            agree: 3,//['Terje', 'Per', 'Espen'],
            disagree: 0, //['Knut'],
            posX: 100, //x
            posY: 300, //y
            zIndex: 1
        }, 
        {// how the model of the notes would look.
            ID: 10,
            content: "Tenkende",
            aboutColor: "blue",
            group: 'blue 1',
            agree: 8,//['Terje', 'Per', 'Espen'],
            disagree: 0, //['Knut'],
            posX: 100, //x
            posY: 500, //y
            zIndex: 2
        },
        {// how the model of the notes would look.
            ID: 11,
            content: "Systematisk",
            aboutColor: "blue",
            group: 'blue 1',
            agree: 5,//['Terje', 'Per', 'Espen'],
            disagree: 0, //['Knut'],
            posX: 200, //x
            posY: 300, //y
            zIndex: 3
        }, 
        {// how the model of the notes would look.
            ID: 12,
            content: "Effektiv",
            aboutColor: "blue",
            group: 'blue 1',
            agree: 2,//['Terje', 'Per', 'Espen'],
            disagree: 0, //['Knut'],
            posX: 200, //x
            posY: 500, //y
            zIndex: 4
        },
        {// how the model of the notes would look.
            ID: 13,
            content: "Social",
            aboutColor: "red",
            group: 'green 1',
            agree: 6,//['Terje', 'Per', 'Espen'],
            disagree: 0, //['Knut'],
            posX: 100, //x
            posY: 300, //y
            zIndex: 1
        }, 
        {// how the model of the notes would look.
            ID: 14,
            content: "Forstående",
            aboutColor: "red",
            group: 'green 1',
            agree: 5,//['Terje', 'Per', 'Espen'],
            disagree: 0, //['Knut'],
            posX: 100, //x
            posY: 500, //y
            zIndex: 2
        }, 
        {// how the model of the notes would look.
            ID: 15,
            content: "Lyttende",
            aboutColor: "red",
            group: 'green 1',
            agree: 6,//['Terje', 'Per', 'Espen'],
            disagree: 0, //['Knut'],
            posX: 200, //x
            posY: 300, //y
            zIndex: 3
        }, 
        {// how the model of the notes would look.
            ID: 16,
            content: "Hjelpsom",
            aboutColor: "red",
            group: 'green 1',
            agree: 1,//['Terje', 'Per', 'Espen'],
            disagree: 0, //['Knut'],
            posX: 200, //x
            posY: 500, //y
            zIndex: 4
        }, 
        {// how the model of the notes would look.
            ID: 17,
            content: "Kreativ",
            aboutColor: "green",
            group: 'blue 1',
            agree: 8,//['Terje', 'Per', 'Espen'],
            disagree: 0, //['Knut'],
            posX: 100, //x
            posY: 300, //y
            zIndex: 1
        }, 
        {// how the model of the notes would look.
            ID: 18,
            content: "Inspirerende",
            aboutColor: "green",
            group: 'blue 1',
            agree: 5,//['Terje', 'Per', 'Espen'],
            disagree: 0, //['Knut'],
            posX: 100, //x
            posY: 500, //y
            zIndex: 2
        },
        {// how the model of the notes would look.
            ID: 19,
            content: "Lederskap",
            aboutColor: "green",
            group: 'blue 1',
            agree: 1,//['Terje', 'Per', 'Espen'],
            disagree: 0, //['Knut'],
            posX: 200, //x
            posY: 300, //y
            zIndex: 3
        }, 
        {// how the model of the notes would look.
            ID: 20,
            content: "Nytenkende",
            aboutColor: "green",
            group: 'blue 1',
            agree: 2,//['Terje', 'Per', 'Espen'],
            disagree: 0, //['Knut'],
            posX: 200, //x
            posY: 500, //y
            zIndex: 4
        }, 
        {// how the model of the notes would look.
            ID: 21,
            content: "Logisk",
            aboutColor: "blue",
            group: 'red 1',
            agree: 8,//['Terje', 'Per', 'Espen'],
            disagree: 0, //['Knut'],
            posX: 100, //x
            posY: 300, //y
            zIndex: 1
        }, 
        {// how the model of the notes would look.
            ID: 22,
            content: "Tenkende",
            aboutColor: "blue",
            group: 'red 1',
            agree: 4,//['Terje', 'Per', 'Espen'],
            disagree: 0, //['Knut'],
            posX: 100, //x
            posY: 500, //y
            zIndex: 2
        },
        {// how the model of the notes would look.
            ID: 23,
            content: "Systematisk",
            aboutColor: "blue",
            group: 'red 1',
            agree: 2,//['Terje', 'Per', 'Espen'],
            disagree: 0, //['Knut'],
            posX: 200, //x
            posY: 300, //y
            zIndex: 3
        }, 
        {// how the model of the notes would look.
            ID: 24,
            content: "Effektiv",
            aboutColor: "blue",
            group: 'red 1',
            agree: 5,//['Terje', 'Per', 'Espen'],
            disagree: 0, //['Knut'],
            posX: 200, //x
            posY: 500, //y
            zIndex: 4
        },
        {// how the model of the notes would look.
            ID: 25,
            content: "Social",
            aboutColor: "red",
            group: 'blue 1',
            agree: 6,//['Terje', 'Per', 'Espen'],
            disagree: 0, //['Knut'],
            posX: 100, //x
            posY: 300, //y
            zIndex: 1
        }, 
        {// how the model of the notes would look.
            ID: 26,
            content: "Forstående",
            aboutColor: "red",
            group: 'blue 1',
            agree: 7,//['Terje', 'Per', 'Espen'],
            disagree: 0, //['Knut'],
            posX: 100, //x
            posY: 500, //y
            zIndex: 2
        }, 
        {// how the model of the notes would look.
            ID: 27,
            content: "Lyttende",
            aboutColor: "red",
            group: 'blue 1',
            agree: 3,//['Terje', 'Per', 'Espen'],
            disagree: 0, //['Knut'],
            posX: 200, //x
            posY: 300, //y
            zIndex: 3
        }, 
        {// how the model of the notes would look.
            ID: 28,
            content: "Hjelpsom",
            aboutColor: "red",
            group: 'blue 1',
            agree: 1,//['Terje', 'Per', 'Espen'],
            disagree: 0, //['Knut'],
            posX: 200, //x
            posY: 500, //y
            zIndex: 4
        }, 
        {// how the model of the notes would look.
            ID: 29,
            content: "Kreativ",
            aboutColor: "green",
            group: 'red 1',
            agree: 4,//['Terje', 'Per', 'Espen'],
            disagree: 0, //['Knut'],
            posX: 100, //x
            posY: 300, //y
            zIndex: 1
        }, 
        {// how the model of the notes would look.
            ID: 30,
            content: "Inspirerende",
            aboutColor: "green",
            group: 'red 1',
            agree: 2,//['Terje', 'Per', 'Espen'],
            disagree: 0, //['Knut'],
            posX: 100, //x
            posY: 500, //y
            zIndex: 2
        },
        {// how the model of the notes would look.
            ID: 31,
            content: "Lederskap",
            aboutColor: "green",
            group: 'red 1',
            agree: 5,//['Terje', 'Per', 'Espen'],
            disagree: 0, //['Knut'],
            posX: 200, //x
            posY: 300, //y
            zIndex: 3
        }, 
        {// how the model of the notes would look.
            ID: 32,
            content: "Nytenkende",
            aboutColor: "green",
            group: 'red 1',
            agree: 4,//['Terje', 'Per', 'Espen'],
            disagree: 0, //['Knut'],
            posX: 200, //x
            posY: 500, //y
            zIndex: 4
        }, 
        {// how the model of the notes would look.
            ID: 33,
            content: "Logisk",
            aboutColor: "blue",
            group: 'green 1',
            agree: 5,//['Terje', 'Per', 'Espen'],
            disagree: 0, //['Knut'],
            posX: 100, //x
            posY: 300, //y
            zIndex: 1
        }, 
        {// how the model of the notes would look.
            ID: 34,
            content: "Tenkende",
            aboutColor: "blue",
            group: 'green 1',
            agree: 8,//['Terje', 'Per', 'Espen'],
            disagree: 0, //['Knut'],
            posX: 100, //x
            posY: 500, //y
            zIndex: 2
        },
        {// how the model of the notes would look.
            ID: 35,
            content: "Systematisk",
            aboutColor: "blue",
            group: 'green 1',
            agree: 2,//['Terje', 'Per', 'Espen'],
            disagree: 0, //['Knut'],
            posX: 200, //x
            posY: 300, //y
            zIndex: 3
        }, 
        {// how the model of the notes would look.
            ID: 36,
            content: "Effektiv",
            aboutColor: "blue",
            group: 'green 1',
            agree: 3,//['Terje', 'Per', 'Espen'],
            disagree: 0, //['Knut'],
            posX: 200, //x
            posY: 500, //y
            zIndex: 4
        },
        {// how the model of the notes would look.
            ID: 37,
            content: "Social",
            aboutColor: "red",
            group: 'red 2',
            agree: 3,//['Terje', 'Per', 'Espen'],
            disagree: 0, //['Knut'],
            posX: 100, //x
            posY: 300, //y
            zIndex: 1
        }, 
        {// how the model of the notes would look.
            ID: 38,
            content: "Forstående",
            aboutColor: "red",
            group: 'red 2',
            agree: 5,//['Terje', 'Per', 'Espen'],
            disagree: 0, //['Knut'],
            posX: 100, //x
            posY: 500, //y
            zIndex: 2
        }, 
        {// how the model of the notes would look.
            ID: 39,
            content: "Lyttende",
            aboutColor: "red",
            group: 'red 2',
            agree: 1,//['Terje', 'Per', 'Espen'],
            disagree: 0, //['Knut'],
            posX: 200, //x
            posY: 300, //y
            zIndex: 3
        }, 
        {// how the model of the notes would look.
            ID: 40,
            content: "Hjelpsom",
            aboutColor: "red",
            group: 'red 2',
            agree: 2,//['Terje', 'Per', 'Espen'],
            disagree: 0, //['Knut'],
            posX: 200, //x
            posY: 500, //y
            zIndex: 4
        }, 
        {// how the model of the notes would look.
            ID: 41,
            content: "Kreativ",
            aboutColor: "green",
            group: 'green 2',
            agree: 6,//['Terje', 'Per', 'Espen'],
            disagree: 0, //['Knut'],
            posX: 100, //x
            posY: 300, //y
            zIndex: 1
        }, 
        {// how the model of the notes would look.
            ID: 42,
            content: "Inspirerende",
            aboutColor: "green",
            group: 'green 2',
            agree: 1,//['Terje', 'Per', 'Espen'],
            disagree: 0, //['Knut'],
            posX: 100, //x
            posY: 500, //y
            zIndex: 2
        },
        {// how the model of the notes would look.
            ID: 43,
            content: "Lederskap",
            aboutColor: "green",
            group: 'green 2',
            agree: 3,//['Terje', 'Per', 'Espen'],
            disagree: 0, //['Knut'],
            posX: 200, //x
            posY: 300, //y
            zIndex: 3
        }, 
        {// how the model of the notes would look.
            ID: 44,
            content: "Nytenkende",
            aboutColor: "green",
            group: 'green 2',
            agree: 4,//['Terje', 'Per', 'Espen'],
            disagree: 0, //['Knut'],
            posX: 200, //x
            posY: 500, //y
            zIndex: 4
        }, 
        {// how the model of the notes would look.
            ID: 45,
            content: "Logisk",
            aboutColor: "blue",
            group: 'blue 2',
            agree: 3,//['Terje', 'Per', 'Espen'],
            disagree: 0, //['Knut'],
            posX: 100, //x
            posY: 300, //y
            zIndex: 1
        }, 
        {// how the model of the notes would look.
            ID: 46,
            content: "Tenkende",
            aboutColor: "blue",
            group: 'blue 2',
            agree: 8,//['Terje', 'Per', 'Espen'],
            disagree: 0, //['Knut'],
            posX: 100, //x
            posY: 500, //y
            zIndex: 2
        },
        {// how the model of the notes would look.
            ID: 47,
            content: "Systematisk",
            aboutColor: "blue",
            group: 'blue 2',
            agree: 5,//['Terje', 'Per', 'Espen'],
            disagree: 0, //['Knut'],
            posX: 200, //x
            posY: 300, //y
            zIndex: 3
        }, 
        {// how the model of the notes would look.
            ID: 48,
            content: "Effektiv",
            aboutColor: "blue",
            group: 'blue 2',
            agree: 2,//['Terje', 'Per', 'Espen'],
            disagree: 0, //['Knut'],
            posX: 200, //x
            posY: 500, //y
            zIndex: 4
        },
        {// how the model of the notes would look.
            ID: 49,
            content: "Social",
            aboutColor: "red",
            group: 'green 2',
            agree: 6,//['Terje', 'Per', 'Espen'],
            disagree: 0, //['Knut'],
            posX: 100, //x
            posY: 300, //y
            zIndex: 1
        }, 
        {// how the model of the notes would look.
            ID: 50,
            content: "Forstående",
            aboutColor: "red",
            group: 'green 2',
            agree: 5,//['Terje', 'Per', 'Espen'],
            disagree: 0, //['Knut'],
            posX: 100, //x
            posY: 500, //y
            zIndex: 2
        }, 
        {// how the model of the notes would look.
            ID: 51,
            content: "Lyttende",
            aboutColor: "red",
            group: 'green 2',
            agree: 6,//['Terje', 'Per', 'Espen'],
            disagree: 0, //['Knut'],
            posX: 200, //x
            posY: 300, //y
            zIndex: 3
        }, 
        {// how the model of the notes would look.
            ID: 52,
            content: "Hjelpsom",
            aboutColor: "red",
            group: 'green 2',
            agree: 1,//['Terje', 'Per', 'Espen'],
            disagree: 0, //['Knut'],
            posX: 200, //x
            posY: 500, //y
            zIndex: 4
        }, 
        {// how the model of the notes would look.
            ID: 53,
            content: "Kreativ",
            aboutColor: "green",
            group: 'blue 2',
            agree: 8,//['Terje', 'Per', 'Espen'],
            disagree: 0, //['Knut'],
            posX: 100, //x
            posY: 300, //y
            zIndex: 1
        }, 
        {// how the model of the notes would look.
            ID: 54,
            content: "Inspirerende",
            aboutColor: "green",
            group: 'blue 2',
            agree: 5,//['Terje', 'Per', 'Espen'],
            disagree: 0, //['Knut'],
            posX: 100, //x
            posY: 500, //y
            zIndex: 2
        },
        {// how the model of the notes would look.
            ID: 55,
            content: "Lederskap",
            aboutColor: "green",
            group: 'blue 2',
            agree: 1,//['Terje', 'Per', 'Espen'],
            disagree: 0, //['Knut'],
            posX: 200, //x
            posY: 300, //y
            zIndex: 3
        }, 
        {// how the model of the notes would look.
            ID: 56,
            content: "Nytenkende",
            aboutColor: "green",
            group: 'blue 2',
            agree: 2,//['Terje', 'Per', 'Espen'],
            disagree: 0, //['Knut'],
            posX: 200, //x
            posY: 500, //y
            zIndex: 4
        }, 
        {// how the model of the notes would look.
            ID: 57,
            content: "Logisk",
            aboutColor: "blue",
            group: 'red 2',
            agree: 8,//['Terje', 'Per', 'Espen'],
            disagree: 0, //['Knut'],
            posX: 100, //x
            posY: 300, //y
            zIndex: 1
        }, 
        {// how the model of the notes would look.
            ID: 58,
            content: "Tenkende",
            aboutColor: "blue",
            group: 'red 2',
            agree: 4,//['Terje', 'Per', 'Espen'],
            disagree: 0, //['Knut'],
            posX: 100, //x
            posY: 500, //y
            zIndex: 2
        },
        {// how the model of the notes would look.
            ID: 59,
            content: "Systematisk",
            aboutColor: "blue",
            group: 'red 2',
            agree: 2,//['Terje', 'Per', 'Espen'],
            disagree: 0, //['Knut'],
            posX: 200, //x
            posY: 300, //y
            zIndex: 3
        }, 
        {// how the model of the notes would look.
            ID: 60,
            content: "Effektiv",
            aboutColor: "blue",
            group: 'red 2',
            agree: 5,//['Terje', 'Per', 'Espen'],
            disagree: 0, //['Knut'],
            posX: 200, //x
            posY: 500, //y
            zIndex: 4
        },
        {// how the model of the notes would look.
            ID: 61,
            content: "Social",
            aboutColor: "red",
            group: 'blue 2',
            agree: 6,//['Terje', 'Per', 'Espen'],
            disagree: 0, //['Knut'],
            posX: 100, //x
            posY: 300, //y
            zIndex: 1
        }, 
        {// how the model of the notes would look.
            ID: 62,
            content: "Forstående",
            aboutColor: "red",
            group: 'blue 2',
            agree: 7,//['Terje', 'Per', 'Espen'],
            disagree: 0, //['Knut'],
            posX: 100, //x
            posY: 500, //y
            zIndex: 2
        }, 
        {// how the model of the notes would look.
            ID: 63,
            content: "Lyttende",
            aboutColor: "red",
            group: 'blue 2',
            agree: 3,//['Terje', 'Per', 'Espen'],
            disagree: 0, //['Knut'],
            posX: 200, //x
            posY: 300, //y
            zIndex: 3
        }, 
        {// how the model of the notes would look.
            ID: 64,
            content: "Hjelpsom",
            aboutColor: "red",
            group: 'blue 2',
            agree: 1,//['Terje', 'Per', 'Espen'],
            disagree: 0, //['Knut'],
            posX: 200, //x
            posY: 500, //y
            zIndex: 4
        }, 
        {// how the model of the notes would look.
            ID: 65,
            content: "Kreativ",
            aboutColor: "green",
            group: 'red 2',
            agree: 4,//['Terje', 'Per', 'Espen'],
            disagree: 0, //['Knut'],
            posX: 100, //x
            posY: 300, //y
            zIndex: 1
        }, 
        {// how the model of the notes would look.
            ID: 66,
            content: "Inspirerende",
            aboutColor: "green",
            group: 'red 2',
            agree: 2,//['Terje', 'Per', 'Espen'],
            disagree: 0, //['Knut'],
            posX: 100, //x
            posY: 500, //y
            zIndex: 2
        },
        {// how the model of the notes would look.
            ID: 67,
            content: "Lederskap",
            aboutColor: "green",
            group: 'red 2',
            agree: 5,//['Terje', 'Per', 'Espen'],
            disagree: 0, //['Knut'],
            posX: 200, //x
            posY: 300, //y
            zIndex: 3
        }, 
        {// how the model of the notes would look.
            ID: 68,
            content: "Nytenkende",
            aboutColor: "green",
            group: 'red 2',
            agree: 4,//['Terje', 'Per', 'Espen'],
            disagree: 0, //['Knut'],
            posX: 200, //x
            posY: 500, //y
            zIndex: 4
        }, 
        {// how the model of the notes would look.
            ID: 69,
            content: "Logisk",
            aboutColor: "blue",
            group: 'green 2',
            agree: 5,//['Terje', 'Per', 'Espen'],
            disagree: 0, //['Knut'],
            posX: 100, //x
            posY: 300, //y
            zIndex: 1
        }, 
        {// how the model of the notes would look.
            ID: 70,
            content: "Tenkende",
            aboutColor: "blue",
            group: 'green 2',
            agree: 8,//['Terje', 'Per', 'Espen'],
            disagree: 0, //['Knut'],
            posX: 100, //x
            posY: 500, //y
            zIndex: 2
        },
        {// how the model of the notes would look.
            ID: 71,
            content: "Systematisk",
            aboutColor: "blue",
            group: 'green 2',
            agree: 2,//['Terje', 'Per', 'Espen'],
            disagree: 0, //['Knut'],
            posX: 200, //x
            posY: 300, //y
            zIndex: 3
        }, 
        {// how the model of the notes would look.
            ID: 72,
            content: "Effektiv",
            aboutColor: "blue",
            group: 'green 2',
            agree: 3,//['Terje', 'Per', 'Espen'],
            disagree: 0, //['Knut'],
            posX: 200, //x
            posY: 500, //y
            zIndex: 4
        }
    ],  
    updates: [] //insert fake news
};