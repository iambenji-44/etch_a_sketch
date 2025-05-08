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