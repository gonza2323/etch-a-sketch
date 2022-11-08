"use strict";


const body = document.querySelector('body');

function makeGrid(size) {
    const container = document.createElement('div');
    container.classList.add('.container');
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

makeGrid(16);
