let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");
let operators = document.querySelectorAll(".operator");
let clear = document.getElementById("clear");
let equals = document.getElementById("equals");

let current = '';
let previous = '';
let operator = '';

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function () {
    let value = this.getAttribute('value');
    if (value === '+' || value === '-' || value === '*' || value === '/') {
      previous = current;
      current = '';
      operator = value;
    } else if (value === '.') {
      current += '.';
    } else if (value === 'C') {
      current = '';
      previous = '';
      operator = '';
    } else if (value === '=') {
        if(operator === '+') {
            current = parseFloat(previous) + parseFloat(current);
        } else if(operator === '-') {
            current = parseFloat(previous) - parseFloat(current);
        } else if(operator === '*') {
            current = parseFloat(previous) * parseFloat(current);
        } else if(operator === '/') {
            current = parseFloat(previous) / parseFloat(current);
        }
        previous = '';
        operator = '';
        display.value = current;
    } else {
        current += value;
    }
    display.value = current;
  });
}
