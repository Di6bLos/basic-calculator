"use strict"

// Basic arithmatic functions

const add = (x,y) => x + y;

const subtract = (x,y) => x - y;

const multiply = (x,y) => x * y;

const divide = (x,y) => x / y;


// Operator function

const displayValue = [];
let num1 = 0;
let num2 = 0;


const operate = (x, func, y) => {

    if (func === add) {
        return  displayValue.push(add(x, y));
    } else if (func === subtract) {
        return  displayValue.push(subtract(x, y));
    } else if (func === multiply) {
        return  displayValue.push(multiply(x, y));
    } else if (func === divide) {
        return  displayValue.push(divide(x, y));
    };

};

