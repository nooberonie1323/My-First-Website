// script.js
let displayValue = '';

function appendValue(value) {
  displayValue += value;
  updateDisplay();
}

function clearDisplay() {
  displayValue = '';
  updateDisplay();
}

function calculate() {
  try {
    displayValue = eval(displayValue).toString(); // Calculate the expression
  } catch {
    displayValue = 'Error';
  }
  updateDisplay();
}

function updateDisplay() {
  const display = document.getElementById('display');
  display.textContent = displayValue || '0';
}
