// const divArray = []
const title = document.createElement('h1');
title.textContent = 'Etch-A-Sketch';
document.body.append(title)


const container = document.createElement('div');
document.body.append(container);
container.classList.add('etch-pad');



for(let i = 1 ; i < 17; i++){
    const newDiv = document.createElement('div');
    // divArray.push(newDiv);
    container.append(newDiv)
    newDiv.classList.add(`div${i}`)
    newDiv.classList.add('grid')

    // console.log('div made!')
    // console.log(i)
}


