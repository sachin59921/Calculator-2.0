let inputString = '';

function addInput(input) {
  inputString += input;
  document.querySelector('.display').value = inputString;
}

function calculate() {
  let result = eval(inputString);
  document.querySelector('.display').value = result;
  inputString = '';
}

function clearDisplay() {
  inputString = '';
  document.querySelector('.display').value = '';
}
