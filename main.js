let currentGridSize = 256;
let gridElements = document.querySelectorAll('.grid');

const header = document.createElement('div');
header.classList.add('header');

const title = document.createElement('h1');
title.textContent = 'Etch-A-Sketch';

const content = document.createElement('div');
content.classList.add('content');

const container = document.createElement('div');
container.classList.add('etch-pad');

const buttonBar = document.createElement('div');
buttonBar.classList.add('button-bar');

const buttonSizes = [16, 24, 32, 64];

const buttons = buttonSizes.map((size) => {
    const button = document.createElement('button');
    button.classList.add('size-button');
    button.textContent = size + ' x ' + size;
    let pixSize;
    switch(size){
        case 16:
            pixSize = '24px';
            break;
        case 24:
            pixSize = '16px';
            break;
        case 32: 
            pixSize = '12px';
            break;
        case 64:
            pixSize = '6px';
            break;
    }
    button.addEventListener('click', () => changeSize(pixSize, size * size));
    buttonBar.appendChild(button);
});

const clearBtn = document.createElement('button');
clearBtn.textContent = 'Clear Screen'; 
clearBtn.classList.add('clear-btn');

function clearScreen(){
    gridElements.forEach((element) => {
        element.classList.remove('darken');
    });
}

function changeSize(value, gridSize){
    currentGridSize = gridSize;
    createGrid();
    gridElements.forEach((element) => {
        element.style.height = value;
        element.style.width = value;
    });
}

clearBtn.addEventListener('click', clearScreen);

document.body.append(header);
document.body.append(content);
document.body.append(buttonBar);
header.append(title);
content.append(container);
buttonBar.append(clearBtn);

function createGrid(){
    container.innerHTML = '';
    for(let i = 1; i <= currentGridSize; i++){
        const newDiv = document.createElement('div');
        container.append(newDiv);
        newDiv.classList.add(`div${i}`);
        newDiv.classList.add('grid');
        newDiv.addEventListener('mouseover', () => {
            newDiv.classList.add('darken');
        });
    }
    gridElements = document.querySelectorAll('.grid');
}

createGrid();
