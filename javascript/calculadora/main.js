let currentOperand = '';
let previousOperand = '';
let operator = undefined;

// Actualizar la pantalla
function updateDisplay() {
  const display = document.querySelector('.pantalla');
  display.innerText = currentOperand || '0'; // Muestra el número actual o 0 si está vacío
}

// Añadir un número
function appendNumber(number) {
  // Evitar más de un punto decimal
  if (number === '.' && currentOperand.includes('.')) return;

  currentOperand = currentOperand.toString() + number.toString();
  updateDisplay();
}

// Añadir un operador
function appendOperator(op) {
  if (currentOperand === '') return;
  if (previousOperand !== '') {
    calculate(); // Si hay un cálculo pendiente, resuélvelo primero
  }

  operator = op;
  previousOperand = currentOperand;
  currentOperand = '';
}

// Realizar el cálculo
function calculate() {
  let result;
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);

  if (isNaN(prev) || isNaN(current)) return;

  switch (operator) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      if (current === 0) {
        alert("Error: División por 0");
        clearDisplay();
        return;
      }
      result = prev / current;
      break;
    default:
      return;
  }

  currentOperand = result.toString();
  operator = undefined;
  previousOperand = '';
  updateDisplay();
}

// Borrar todo (C)
function clearDisplay() {
  currentOperand = '';
  previousOperand = '';
  operator = undefined;
  updateDisplay();
}

// Borrar el último carácter (DEL)
function deleteLast() {
  currentOperand = currentOperand.toString().slice(0, -1);
  updateDisplay();
}

clearDisplay();

