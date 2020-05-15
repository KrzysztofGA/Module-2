showBoard();
function showBoard() {
    const data = [
        {label: {txt: '', underline: 'underline'}, score: ['Per', 'Pål', 'Espen']},
        {label: {txt: 'Enere'}},
        {label: {txt: 'Toere'}},
        {label: {txt: 'Treere'}},
        {label: {txt: 'Firere'}},
        {label: {txt: 'Femere'}},
        {label: {txt: 'Seksere', underline: 'underline'}},
        {label: {txt: 'Sum'}},
        {label: {txt: 'Bonus'}},
        {label: {txt: '1 par'}},
        {label: {txt: '2 par'}},
        {label: {txt: '3 like'}},
        {label: {txt: '4 like'}},
        {label: {txt: 'Liten straight'}},
        {label: {txt: 'Stor straight'}},
        {label: {txt: 'Hus'}},
        {label: {txt: 'Sjanse'}},
        {label: {txt: 'Yatzy', underline: 'underline', bold: 'bold'}},
        {label: {txt: 'Totalsum'}},
    ];
    for (let i = 1; i < data.length; i++) {
        data[i].score = new Array(3);
    }

    data[11].score[2] = '18';
    data[15].score[1] = '18';

    let html = '<table>';

    for (let i = 0; i < data.length; i++) {
        const row = data[i];
        const score = row.score;
        html += `<tr class="${row.label.underline}">
                                <td class="label ${row.label.bold}">
                                    ${row.label.txt}
                                </td>`;
        for (let j = 0; j < score.length; j++) {
            html += `<td>${score[j] || '&nbsp;'}</td>`;
        }
        html += '</tr>';
    }
    html += '</table>';

    document.getElementById('scoreboard').innerHTML = html;
}
