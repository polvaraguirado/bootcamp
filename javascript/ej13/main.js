let array = [];

function updateDisplay() {
  document.getElementById("arrayDisplay").textContent = JSON.stringify(array);
}

function push() {
  array.push(Math.floor(Math.random() * 100));
  updateDisplay();
}

function unshift() {
  array.unshift(Math.floor(Math.random() * 100));
  updateDisplay();
}

function insertAt() {
  const index = parseInt(document.getElementById("insertIndex").value);
  array.splice(index, 0, Math.floor(Math.random() * 100));
  updateDisplay();
}

function pop() {
  array.pop();
  updateDisplay();
}

function shift() {
  array.shift();
  updateDisplay();
}

function removeAt() {
  const index = parseInt(document.getElementById("removeIndex").value);
  array.splice(index, 1);
  updateDisplay();
}
