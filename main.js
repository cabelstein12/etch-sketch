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

const pixelSlider = document.createElement('input');


Object.assign(pixelSlider, {
    type: 'range',  // pixelSize.type = 'range';
    min: 256,        // pixelSize.min = 16;
    step: 1,       // pixelSize.step = 16;
    max: 64*64,
    value: 256       // pixelSize.max = 96;
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
        buttonBar.append(pixelSlider);
        buttonBar.append(clearBtn);
        
        function updateGridSize() {
            currentGridSize = parseInt(pixelSlider.value, 10);
            gridElements = document.querySelectorAll('.grid');
            

    createGrid();
}

pixelSlider.addEventListener('input', updateGridSize);


function createGrid(){
      container.innerHTML = '';
    for(let i = 1 ; i <= currentGridSize; i++){
        const newDiv = document.createElement('div');
        container.append(newDiv)
        newDiv.classList.add(`div${i}`)
        newDiv.classList.add('grid');
        newDiv.classList.add('pixel-size');
        
        newDiv.addEventListener('mouseover', () => {
            newDiv.classList.add('darken');

        })
    }
    gridElements = document.querySelectorAll('.grid')
}

let currentGridSize = 256;

let gridElements = document.querySelectorAll('.grid');

createGrid();




