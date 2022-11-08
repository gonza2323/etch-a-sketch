"use strict";


const body = document.querySelector('body');
const button = document.querySelector('button');

function makeGrid(size) {
    const container = document.createElement('div');
    container.classList.add('container');
    body.appendChild(container);
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        for (let i = 0; i < size; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.addEventListener('mouseover', e => e.target.classList.add('paintedSquare'));
            row.appendChild(square);
        }
    }
}

function resizeGrid() {
    let size = Number.parseInt(prompt('Enter new size', 16));
    size = Math.max(Math.min(size, 100), 1);
    const container = document.querySelector('.container');
    body.removeChild(container);
    makeGrid(size);
}

button.addEventListener('click', resizeGrid);

makeGrid(16);
