// PROJECT: CALCULATOR
let a = 0;
let b = 0;
let operation = null;
let operationTrigger = false; // update to true when operator clicked on to reset display
let operatorTag = null; // update operator style when clicked on

const display = document.querySelector('#calc');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('#equal');
const clear = document.querySelector('#clear');

// input numbers into display
numbers.forEach(number => {
    number.addEventListener('click', () => {

        if (operationTrigger == false) {
            display.textContent = `${display.textContent}${number.textContent}`;
        } else { // reset display for next number
            operationTrigger = false;
            operatorTransitioned();
            display.textContent = `${number.textContent}`;
        }

    });
});

operators.forEach(operator => {
    operator.addEventListener('click', () => {
        
        if (display.textContent === "") { // nothing happens if no content
            return;
        }

        if (operationTrigger == true) { // trigger if user changing operator
            operation = operator.textContent;
            operatorTransitioned();
            operatorTransition(operator);
            return;
        }

        operatorTransition(operator);

        if (operation == null) {
            a = Number(display.textContent);
            operation = operator.textContent;
            operationTrigger = true;
        } else { // update "a" and "b" if its consecutive calculation
            b = Number(display.textContent);
            let output = operate(a, operation, b);
            a = output; // replace "a" with new output
            operation = operator.textContent;
            operationTrigger = true;
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



// functions
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
    a = 0;
    b = 0;
    operation = null;
    operationTrigger = false;
    operatorTransitioned();
}

function operatorTransition(operator) {
    operatorTag = operator;
    operatorTag.classList.add("clicked");
}

function operatorTransitioned() {
    operatorTag.classList.remove("clicked");
}