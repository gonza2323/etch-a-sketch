"use strict";

const container = document.querySelector('.container');

for (let i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);
    for (let i = 0; i < 16; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('mouseover', e => e.target.classList.add('paintedSquare'));
        row.appendChild(square);
    }
}
