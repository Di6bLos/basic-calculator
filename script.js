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

