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
    } else if (operation != '') {
        operate();
    }
}));
