const rankTable = document.getElementById('rankTable');
const refreshBtn = document.getElementById('refreshBtn');

function fetchData() {
    fetch('https://puzzle.qieee.top/api/rank')
        .then(response => response.json())
        .then(data => {
            updateTable(data);
        });
}

function updateTable(data) {
    rankTable.querySelector('tbody').innerHTML = '';
    data.forEach((item, index, 总得分) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${item.name}</td>
            <td>${item.id}</td>
            <td>${item.score[0].level}</td>
            <td class="${item.score[0].score >= 10 ? 'passed' : 'failed'}">${item.score[0].score}</td>
            <td>${item.score[1].level}</td>
            <td class="${item.score[1].score >= 10 ? 'passed' : 'failed'}">${item.score[1].score}</td>
            <td>${item.score[2].level}</td>
            <td class="${item.score[2].score >= 10 ? 'passed' : 'failed'}">${item.score[2].score}</td>
            <td>${item.score[3].level}</td>
            <td class="${item.score[3].score >= 10 ? 'passed' : 'failed'}">${item.score[3].score}</td>
            <td>${总得分=item.score[0].score+item.score[1].score+item.score[2].score+item.score[3].score+item.score[3].score}</td>
        `
        rankTable.querySelector('tbody').appendChild(row);
    });
}

fetchData();
refreshBtn.addEventListener('click', fetchData);
