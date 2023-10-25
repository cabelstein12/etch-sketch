const header = document.createElement('div');
const title = document.createElement('h1');
header.classList.add('header');
title.textContent = 'Etch-A-Sketch';

const content = document.createElement('div');
content.classList.add('content');

const container = document.createElement('div');
container.classList.add('etch-pad');

const buttonBar = document.createElement('div');
buttonBar.classList.add('button-bar');

const pixelSize = document.createElement('input');
pixelSize.classList.add('pixel-size');

Object.assign(pixelSize, {
    type: 'range',  // pixelSize.type = 'range';
    min: 16,        // pixelSize.min = 16;
    step: 16,       // pixelSize.step = 16;
    max: 96,
    value: 16         // pixelSize.max = 96;
})



const clearBtn = document.createElement('button');
clearBtn.textContent = 'Clear Screen'; 
clearBtn.classList.add('clear-btn');

clearBtn.addEventListener('click', () => {
    gridElements.forEach((element) => {
        element.classList.remove('darken');
    })
})
//append elements
document.body.append(header);
document.body.append(content);
document.body.append(buttonBar);

header.append(title);
content.append(container);
buttonBar.append(pixelSize);
buttonBar.append(clearBtn);

function updatePixelSize(){
    currentPixelSize = parseInt(pixelSize.value, 10);
    createGrid();
}

pixelSize.addEventListener('input', updatePixelSize);


function createGrid(){
      container.innerHTML = '';
    for(let i = 1 ; i <= currentPixelSize; i++){
        const newDiv = document.createElement('div');
        container.append(newDiv)
        newDiv.classList.add(`div${i}`)
        newDiv.classList.add('grid')
        
        newDiv.addEventListener('mouseover', () => {
            newDiv.classList.add('darken');
            
        })
    }
}

let currentPixelSize = 16
const gridElements = document.querySelectorAll('.grid');

createGrid();




