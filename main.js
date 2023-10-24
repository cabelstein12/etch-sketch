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
pixelSize.type = 'range';


const clearBtn = document.createElement('button');
clearBtn.textContent = 'Clear Screen'; 
clearBtn.classList.add('clear-btn');


//append elements
document.body.append(header);
document.body.append(content);
document.body.append(buttonBar);

header.append(title);
content.append(container);
buttonBar.append(pixelSize);
buttonBar.append(clearBtn);


for(let i = 1 ; i <= 16; i++){
    const newDiv = document.createElement('div');
    container.append(newDiv)
    newDiv.classList.add(`div${i}`)
    newDiv.classList.add('grid')

    
    newDiv.addEventListener('click', () => {
        drawEnable = true;
    })

    newDiv.addEventListener('mouseover', () => {

        newDiv.classList.add('darken');
        
    })
}

const gridElements = document.querySelectorAll('.grid');

clearBtn.addEventListener('click', () => {
    gridElements.forEach((element) => {
        element.classList.remove('darken');
    })
})




