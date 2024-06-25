// history.js

function goBack() {
    window.location.href = 'index.html'; // Ensure the path is correct
}

function loadHistory() {
    const historyList = document.getElementById('history-list');
    const history = JSON.parse(localStorage.getItem('calcHistory')) || [];

    historyList.innerHTML = history.length === 0
        ? '<p class="no-history">No history</p>'
        : history.map(item => `<div class="history-item">${item}</div>`).join('');
}

function clearHistory() {
    localStorage.removeItem('calcHistory');
    loadHistory();
}

window.onload = loadHistory;
