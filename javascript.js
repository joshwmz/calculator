// PROJECT: CALCULATOR
let a = "";
let b = "";
let operation = "";

const display = document.querySelector('#calc');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('#equal');
const clear = document.querySelector('#clear');

// input numbers into display
numbers.forEach(number => {
    number.addEventListener('click', () => {

        if (operation == "") {
            display.textContent = `${display.textContent}${number.textContent}`;
        } else { 
            display.textContent = ""; // reset display for next number
            display.textContent = `${display.textContent}${number.textContent}`;
        }

    });
});

operators.forEach(operator => {
    operator.addEventListener('click', () => {
        
        
        if (display.textContent == "") { // nothing happens if no content
            return;
        }

        if (operation == "") {
            a = Number(display.textContent);
            operation = operator.textContent;
        } else { // update "a" and "b" if its consecutive calculation
            b = Number(display.textContent);
            let output = operate(a, operation, b);
            a = output; // replace "a" with new output
            operation = operator.textContent;
            display.textContent = output;
        }

    });
});

equals.addEventListener('click', () => {
    
    if (display.textContent == "") { // nothing happens if no content
        return;
    }

    b = Number(display.textContent);
    let output = operate(a, operation, b);
    display.textContent = output;
    
    reset();

});

clear.addEventListener('click', () => {

    reset();
    display.textContent = "";

});




function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, operation, b) { // Calls one of function above based on operation

    switch (operation) {
        case "+": return add(a, b);
        case "-": return subtract(a, b);
        case "×": return multiply(a, b);
        case "÷": return divide(a, b);
    }

}

function reset() {
    a = "";
    b = "";
    operation = "";
}