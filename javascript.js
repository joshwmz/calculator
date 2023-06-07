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

let a = 2;
let operator = "+";
let b = 2;

console.log(operate(a, operator, b));

// 3. Create function that takes an operator and 2 numbers then calls one of the above functions on the numbers

function operate(a, operator, b) {

    switch (operator) {
        case "+": return add(a, b);
        case "-": return subtract(a, b);
        case "*": return multiply(a, b);
        case "/": return divide(a, b);
    }

}