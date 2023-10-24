const header = document.createElement('div');
const title = document.createElement('h1');
header.classList.add('header');
title.textContent = 'Etch-A-Sketch';

const content = document.createElement('div');

const container = document.createElement('div');
container.classList.add('etch-pad');

//append elements
document.body.append(header);
document.body.append(content);
content.append(container);
header.append(title);

for(let i = 1 ; i <= 16; i++){
    const newDiv = document.createElement('div');
    container.append(newDiv)
    newDiv.classList.add(`div${i}`)
    newDiv.classList.add('grid')

    newDiv.addEventListener('mouseover', () => {
        newDiv.classList.add('darken')
    })
}




