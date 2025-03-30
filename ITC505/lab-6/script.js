document.addEventListener('DOMContentLoaded', function() {
    const celsiusButton = document.getElementById('celsiusButton');
    const addButton = document.getElementById('addButton');
    const palindromeButton = document.getElementById('palindromeButton');
    const lastModifiedSpan = document.getElementById('lastModified');

    celsiusButton.addEventListener('click', convertCelsius);
    addButton.addEventListener('click', addNumbers);
    palindromeButton.addEventListener('click', checkPalindrome);

    lastModifiedSpan.textContent = document.lastModified;
});

function convertCelsius() {
    const celsius = parseFloat(document.getElementById('celsiusInput').value);
    if (!isNaN(celsius)) {
        const fahrenheit = (celsius * 9/5) + 32;
        document.getElementById('fahrenheitResult').textContent = `${celsius}°C is ${fahrenheit}°F`;
    } else {
        document.getElementById('fahrenheitResult').textContent = "Invalid input.";
    }
}

function addNumbers() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    if (!isNaN(num1) && !isNaN(num2)) {
        const sum = num1 + num2;
        document.getElementById('sumResult').textContent = `${num1} + ${num2} = ${sum}`;
    } else {
        document.getElementById('sumResult').textContent = "Invalid input.";
    }
}

function checkPalindrome() {
    const str = document.getElementById('palindromeInput').value.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedStr = str.split('').reverse().join('');
    if (str === reversedStr) {
        document.getElementById('palindromeResult').textContent = "It's a palindrome!";
    } else {
        document.getElementById('palindromeResult').textContent = "It's not a palindrome.";
    }
}