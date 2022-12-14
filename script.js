"use strict"

// DOM elements
const numberBtns = document.querySelectorAll('.number');
const operateBtns = document.querySelectorAll('.operation');
const clearBtn = document.getElementById('btnClearAll');
const deleteBtn = document.getElementById('btnDelete');
const equalBtn = document.getElementById('btnEqual');
const dotBtn = document.getElementById('btnDeci');
const display = document.getElementById('display');
let num1 = '';
let num2 = '';
let operation = '';
let haveDot = false;

// Math functions
const add = (x,y) => x + y;
const subtract = (x,y) => x - y;
const multiply = (x,y) => x * y;
const divide = (x,y) => x / y;

// Makes the results of the operate function num1
// and clears num2 and operation variable
const nextOperation = () => {
    num1 = display.innerText;
    num2 = '';
    operation = '';
    haveDot = false;
};

// Operation function
const operate = (x, y, op) => {
    if (num1 != '' && num2 != '' && operation != '') {
        x = parseFloat(num1);
        y = parseFloat(num2);
        op = operation;
        
        // Executes the correct math function
        if (op === '+') {
            display.innerText = add(x,y);
            nextOperation();
        } else if (op === '-') {
            display.innerText = subtract(x,y);
            nextOperation();
        } else if (op === 'x') {
            display.innerText = multiply(x,y);
            nextOperation();
        } else if (op === '/') {
            display.innerText = divide(x,y);
            nextOperation();
        } 
    } else {
        return;
    }
}; 


// Numbers added to screen and variables to be calculated
numberBtns.forEach((btn)=> btn.addEventListener('click', (e)=> {
    // Checks if a decimal is already used
    if (e.target.innerText === '.' && haveDot === false) {
        haveDot = true;
    } else if (e.target.innerText === '.' && haveDot === true) {
        return;
    }
    // Checks if operation has been selected and assigns number variables.
    if (operation === '') {
          num1 += e.target.innerText;
    display.innerText = num1;
    } else if (operation != '') {
        num2 += e.target.innerText;
        display.innerText = num1 + operation + num2;
    }

}));

// Operations variable selected
operateBtns.forEach(op => op.addEventListener('click', (e)=> {

    if (operation === '') {
        operation = e.target.innerText;
        display.innerText += e.target.innerText;
        haveDot = false;
    } else if (operation != '' && num2 != '') {
        operate();
        operation = e.target.innerText;
        display.innerText += e.target.innerText;

    }
}));
// Reset the calculator and all the variables
const clearAll = () => {
    num1 = '';
    num2 = '';
    operation = '';
    haveDot = false;
    display.innerText = 0;
};
// equal button calls the operate function
equalBtn.addEventListener('click', operate);
// CLEAR button calls the clearAll funtion 
clearBtn.addEventListener('click', clearAll);
// delete button removes the last character in the display
deleteBtn.addEventListener('click', ()=> {
    
    if (display.innerText.length <= 1) {
         clearAll();
     }
    else if (operation === '') {
        num1 = num1.slice(0, -1);
        display.innerText = num1;
    } else if (operation != '' && num2 === '') {
        operation = '';
        display.innerText = num1 + operation + num2;
         }  
  else {
        num2 = num2.slice(0, -1);
        display.innerText = num1 + operation + num2;
    };

});

