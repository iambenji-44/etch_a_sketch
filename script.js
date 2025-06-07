//Etch-A-Sketch


//HEADER
let header = document.querySelector('#header');
header.style.textAlign = 'center';
header.style.padding = '20px';
header.style.margin = '40px';

let title = document.createElement('h1');
title.classList.add('title')
title.textContent = 'Etch-A-Sketch';


let gridBtn = document.createElement('button');
gridBtn.classList.add('gridBtn');
gridBtn.textContent = 'Set Grid'
gridBtn.style.width = '100px';
gridBtn.style.margin = '15px';


let resetBtn = document.createElement('button');
resetBtn.classList.add('resetBtn');
resetBtn.textContent = 'Reset'
resetBtn.style.width = '100px';
resetBtn.style.margin = '15px';




header.appendChild(title);
header.appendChild(gridBtn);
header.appendChild(resetBtn);

//CONTENT
let content = document.querySelector('#content');
content.style.padding = '20px';

let container = document.createElement('div');
container.classList.add('container');
container.style.padding = '10px';
container.style.border = '4px solid grey';
container.style.borderRadius = '20px';


let box = document.createElement('div');
box.classList.add('box');
box.style.borderRadius = '4px';
box.style.background = 'whitesmoke'


//HOVER EFFECT & COLOR
let randomHEX
function colors() {
    randomHEX = Math.floor(Math.random() * 1000000);
    console.log(randomHEX);
    return '#'+randomHEX ;
}

box.addEventListener('mouseover', () => {
    box.style.background = colors();
});






content.appendChild(container);
container.appendChild(box) * 5;
 
//RESET
resetBtn.addEventListener('click',() => {
    location.reload();
})

//INPUT
let input;

gridBtn.addEventListener('click', () => {
    input = parseInt(prompt("Enter number to set Grid : MAX No:100 ", 0));

    if (isNaN(input) || input < 1 || input > 100) {
        alert('Not In the LIMIT');
        return;
    }
    return input ;
});


