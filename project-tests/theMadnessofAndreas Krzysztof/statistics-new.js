function allwordsList() {
    const totalList = [];
    const words = model.notes.map((n) => n.content);
    const wordUnique = words.filter((n, i) => words.indexOf(n) >= i);

    for (const word of wordUnique) {
        const filteredObjects = model.notes.filter((n) => n.content == word);
        for (const object of filteredObjects) {
            const wordToAdd = {
                word: object.content,
                agree: 0,
                redAgreeRed: 0,
                redAgreeGreen: 0,
                redAgreeBlue: 0,
                greenAgreeRed: 0,
                greenAgreeGreen: 0,
                greenAgreeBlue: 0,
                blueAgreeRed: 0,
                blueAgreeGreen: 0,
                blueAgreeBlue: 0,
                disagree: 0,
                about: model.groups.filter((c) => c.name == object.group)[0]
                    .color,
            };
            for (const user of object.agree) {
                const userColor = model.users.filter((u) => u.name == user)[0]
                    .color;
                if (wordToAdd.about == 'red') {
                }
                console.log(wordToAdd.about, object.content, user, wordToAdd);
            }
        }
    }
    return totalList;
}

function xxx() {
    let totalList = [];
    let testList = [];

    for (let wordToAdd of model.notes) {
        let agreeRedAboutRed = 0;
        let agreeGreenAboutRed = 0;
        let agreeBlueAboutRed = 0;
        let agreeRedAboutGreen = 0;
        let agreeGreenAboutGreen = 0;
        let agreeBlueAboutGreen = 0;
        let agreeRedAboutBlue = 0;
        let agreeGreenAboutBlue = 0;
        let agreeBlueAboutBlue = 0;
        let disagree = wordToAdd.disagree;

        //kolekcjonuje informacje jaki kolor o jakim kolorze pisał
        //sumoje ogólnie ze wszystkich słów
        if (wordToAdd.aboutColor === 'red') {
            agreeRedAboutRed = wordToAdd.redAgree;
            agreeGreenAboutRed = wordToAdd.greenAgree;
            agreeBlueAboutRed = wordToAdd.blueAgree;
        } else if (wordToAdd.aboutColor === 'green') {
            agreeRedAboutGreen = wordToAdd.redAgree;
            agreeGreenAboutGreen = wordToAdd.greenAgree;
            agreeBlueAboutGreen = wordToAdd.blueAgree;
        } else if (wordToAdd.aboutColor === 'blue') {
            agreeRedAboutBlue = wordToAdd.redAgree;
            agreeGreenAboutBlue = wordToAdd.greenAgree;
            agreeBlueAboutBlue = wordToAdd.blueAgree;
        }

        //sumuje słowa i ich wartości i kontrolnie dodaje już sprawdzone słowa do testList[]
        if (testList.includes(wordToAdd.content) === false) {
            for (let noteInformation of model.notes) {
                if (
                    wordToAdd.ID != noteInformation.ID &&
                    wordToAdd.content === noteInformation.content
                ) {
                    if (wordToAdd.aboutColor === 'red') {
                        agreeRedAboutRed =
                            agreeRedAboutRed + noteInformation.redAgree;
                        agreeGreenAboutRed =
                            agreeGreenAboutRed + noteInformation.greenAgree;
                        agreeBlueAboutRed =
                            agreeBlueAboutRed + noteInformation.blueAgree;
                    } else if (wordToAdd.aboutColor === 'green') {
                        agreeRedAboutGreen =
                            agreeRedAboutGreen + noteInformation.redAgree;
                        agreeGreenAboutGreen =
                            agreeGreenAboutGreen + noteInformation.greenAgree;
                        agreeBlueAboutGreen =
                            agreeBlueAboutGreen + noteInformation.blueAgree;
                    } else if (wordToAdd.aboutColor === 'blue') {
                        agreeRedAboutBlue =
                            agreeRedAboutBlue + noteInformation.redAgree;
                        agreeGreenAboutBlue =
                            agreeGreenAboutBlue + noteInformation.greenAgree;
                        agreeBlueAboutBlue =
                            agreeBlueAboutBlue + noteInformation.blueAgree;
                    }
                }
            }
            let agree =
                agreeRedAboutRed +
                agreeGreenAboutRed +
                agreeBlueAboutRed +
                agreeRedAboutGreen +
                agreeGreenAboutGreen +
                agreeBlueAboutGreen +
                agreeRedAboutBlue +
                agreeGreenAboutBlue +
                agreeBlueAboutBlue;
            testList.push(wordToAdd.content);
            totalList.push({
                word: wordToAdd.content,
                agree: agree,
                redAgreeRed: agreeRedAboutRed,
                redAgreeGreen: agreeRedAboutGreen,
                redAgreeBlue: agreeRedAboutBlue,
                greenAgreeRed: agreeGreenAboutRed,
                greenAgreeGreen: agreeGreenAboutGreen,
                greenAgreeBlue: agreeGreenAboutBlue,
                blueAgreeRed: agreeBlueAboutRed,
                blueAgreeGreen: agreeBlueAboutGreen,
                blueAgreeBlue: agreeBlueAboutBlue,
                disagree: disagree,
                about: wordToAdd.aboutColor,
            });
        }
    }
    return totalList;
}
