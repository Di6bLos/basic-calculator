"use strict"
const numberBtns = document.querySelectorAll('.number');
const displayScreen = document.querySelector('.display');
const operations = document.querySelectorAll('.operation');
const equalBtn = document.getElementById('btnEqual');
const deleteBtn = document.getElementById('btnDelete');
const clearAllBtn = document.getElementById('btnClearAll');
const displayValue = [];
let num1 = 0;
let num2 = 0;
let operation = [];


// Basic arithmatic functions

const add = (x,y) => x + y;
const subtract = (x,y) => x - y;
const multiply = (x,y) => x * y;
const divide = (x,y) => x / y;

// Operator function

const operate = (x, func, y) => {
    x = num1;
    y = num2;
    func = operation;
    if (func === add) {
        displayScreen.innerText = displayValue;
        return  displayValue.push(add(x, y));
    } else if (func === subtract) {
        displayScreen.innerText = displayValue;
        return  displayValue.push(subtract(x, y));
    } else if (func === multiply) {
        displayScreen.innerText = displayValue;
        return  displayValue.push(multiply(x, y));
    } else if (func === divide) {
        displayScreen.innerText = displayValue;
        return  displayValue.push(divide(x, y));
    };

};


// Displaying the value of the buttons pressed.

const returnValue = (e) => {
        const value = e.target.value;
    displayValue.push(value);
    displayScreen.innerText = displayValue.join('');
};

numberBtns.forEach(num => num.addEventListener('click', returnValue));


// ===========

operations.forEach(op => op.addEventListener('click', (e)=> {
  //console.log(e.target.value);
  operation.push(e.target.value);
}));


