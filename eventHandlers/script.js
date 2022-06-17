'use strict';

const btn = document.getElementById('btn');
const input = document.getElementById('text');
const square = document.getElementById('square');
const btnCirle = document.getElementById('e_btn');
const circle = document.getElementById('circle');
const range = document.getElementById('range');

let changeColor = function () {
  square.style.backgroundColor = input.value;
};

let changeSize = function (event) {
  circle.style.width = event.target.value + '%';
  circle.style.height = event.target.value + '%';
}

btn.addEventListener('click', changeColor);
range.addEventListener('input', changeSize);
btnCirle.style.display = 'none';
