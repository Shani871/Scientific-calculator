// script.js

document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.body.classList.add(`${savedTheme}-theme`);
});

function insertNumber(number) {
    display.value += number;
}

function insertOperator(operator) {
    display.value += operator;
}

function clearDisplay() {
    display.value = '';
}

function deleteDigit() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        const expression = display.value
            .replace(/√/g, 'Math.sqrt')
            .replace(/sin/g, 'Math.sin')
            .replace(/cos/g, 'Math.cos')
            .replace(/tan/g, 'Math.tan')
            .replace(/ln/g, 'Math.log')
            .replace(/log/g, 'Math.log10')
            .replace(/\^/g, '**');

        const result = eval(expression);
        display.value = result;

        saveToHistory(`${expression} = ${result}`);
    } catch (e) {
        display.value = 'Error';
    }
}

function saveToHistory(entry) {
    let history = JSON.parse(localStorage.getItem('calcHistory')) || [];
    history.push(entry);
    localStorage.setItem('calcHistory', JSON.stringify(history));
}

function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

function viewHistory() {
    window.location.href = 'history.html'; // Ensure the path is correct
}

function switchTheme() {
    const currentTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.body.classList.remove(`${currentTheme}-theme`);
    document.body.classList.add(`${newTheme}-theme`);

    localStorage.setItem('theme', newTheme);
}

function chooseTheme() {
    alert('Choosing theme...');
}

function viewPrivacyPolicy() {
    alert('Viewing privacy policy...');
}

function sendFeedback() {
    alert('Sending feedback...');
}

function getHelp() {
    alert('Getting help...');
}
