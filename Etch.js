//create Variabe that links to 'body' of html 
const body = document.querySelector('body');

//create header div for selectSize input and submit button
const header = document.createElement('div');
header.classList.add('header');
body.appendChild(header);

//Text input box instructions
header.textContent = "Grid Size: ";

//create a Text Input Box to 'selectSize'
let input = document.createElement('input');
input.classList.add('input');
input.setAttribute('type','text');
input.setAttribute('value','16');
header.appendChild(input);

//Create Submit button to finalize select size input
const btnSubmit = document.createElement('button')
btnSubmit.textContent = "Submit";
header.appendChild(btnSubmit);

//create a middle div 'container' to accomodate grid
const container = document.createElement('div');
container.classList.add('container');
body.appendChild(container);

//create footer div for button options ( black,rainbow, reset)
const buttons = document.createElement('div')
buttons.classList.add('buttons');
body.appendChild(buttons);
//starter value for create grid --> 16x16
const value = 16;

//create button options
const btnBlack = document.createElement('button');
btnBlack.textContent = "Black";
buttons.appendChild(btnBlack);

const btnRb = document.createElement('button');
btnRb.textContent = "Rainbow";
buttons.appendChild(btnRb);

const btnClear = document.createElement('button');
btnClear.textContent = "Clear";
buttons.appendChild(btnClear);

//create grid formula
function createGrid (value) {
 for( let i = 0; i < value; i++) {
    let row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);
    for (let j = 0; j < value; j++) {
        let column = document.createElement('row');
        column.classList.add('column')
        row.appendChild(column);
    }
  }
}

createGrid (value);




