// PROJECT: CALCULATOR

// 1. Build these functions and test them on console.log

//  - Add
function add(a, b) {
    return a + b;
}

//  - Subtract
function subtract(a, b) {
    return a - b;
}

//  - Multiply
function multiply(a, b) {
    return a * b;
}

//  - Divide
function divide(a, b) {
    return a / b;
}

// 2. Create 3 variables which includes a number, and operator, and another number

let a = "";
let b = "";
let operation = "";

// 3. Create function that takes an operator and 2 numbers then calls one of the above functions on the numbers

function operate(a, operation, b) {

    switch (operation) {
        case "+": return add(a, b);
        case "-": return subtract(a, b);
        case "×": return multiply(a, b);
        case "÷": return divide(a, b);
    }

}

// 4. Create functions that populate the display when you click on the buttons
const display = document.querySelector('#calc');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('#equal');
const clear = document.querySelector('#clear');

numbers.forEach(number => {
    number.addEventListener('click', () => {
        display.textContent = `${display.textContent}${number.textContent}`;
    });
});

operators.forEach(operator => {
    operator.addEventListener('click', () => {
        if (display.textContent == "") {
            return;
        }
        a = Number(display.textContent);
        operation = operator.textContent;
        display.textContent = `${display.textContent} ${operation} `;
    });
});

equals.addEventListener('click', () => {
    let cropAt = display.textContent.indexOf(operation);
    b = Number(display.textContent.substring(cropAt + 1));
    console.log(a);
    console.log(operation);
    console.log(b);
    let result = operate(a, operation, b);
    display.textContent = `${display.textContent} = ${result}`;
});

clear.addEventListener('click', () => {
    a = "";
    b = "";
    operation = "";
    display.textContent ="";
});