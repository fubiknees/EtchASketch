const containerDiv = document.querySelector('.container')
let column = document.querySelector('.column');
let columns = document.querySelectorAll('.column');

//create Variabe that links to 'body' of html 
const body = document.querySelector('body');

//create header div for selectSize input and submit button
const header = document.createElement('div');
header.classList.add('header');
body.appendChild(header);

//Create Submit button to finalize select size input
const btnSubmit = document.createElement('button')
btnSubmit.textContent = "Change Grid Size";
header.appendChild(btnSubmit);

//create footer div for button options ( black,rainbow, reset)
const buttons = document.createElement('div')
buttons.classList.add('buttons');
body.appendChild(buttons);

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
    containerDiv.appendChild(row);
    for (let j = 0; j < value; j++) {
        let column = document.createElement('div');
        column.classList.add('column')
        row.appendChild(column);
    }
  }
}


//starter value for create grid --> 16x16
createGrid (16);

//choose Grid Size
btnSubmit.addEventListener('click', verifyGrid);

//error checks input. Causes loop where you cannot cancel LOL
function verifyGrid( ) {
  let userInput = prompt("Please enter a number between 2 - 99");
  if (userInput < 2 || userInput > 99 ){
    verifyGrid( );
    console.log('userInput works');
    return userInput;
  }
  else {
    containerDiv.innerHTML= "";
    createGrid (userInput);
    console.log('reset works!');
  }
}


//function to allow grid cells to change color
function draw ( ) {
  let columns = document.querySelectorAll('.column');
  columns.forEach((column) => {
  console.log('function draw works!');
    column.addEventListener('dragenter', () => {
      column.style.opacity = '1';
      console.log("dragenter works")
    });
    column.addEventListener('mouseover', () => {
      column.style.background = color;
      column.style.opacity = '1';
      console.log("moueover")
    })


    });
  }   

  //functions as an eraser not as clear function! need to fix 
  // function clearGrid( ) {
  //     draw ()
  //     color = "";
  //     console.log('clearGrid Works!')
  // };


//Black Button
 btnBlack.addEventListener('click', ( ) => {
    draw ();
    color = 'black';
 });

 //Rainbow Color button
 btnRb.addEventListener('click', ( ) => {
    draw();
     let randomColor = Math.floor(Math.random()*16777215).toString(16);
      color = "#" + randomColor;
      console.log("color");
      // column.style.background='color';
      console.log("column.style works)")
      // column.style.opacity='1'; 
      
    
    // // let columns = document.querySelectorAll('.column');
    // columns.addEventListener('mouseover', () => {
    //     let randomColor = Math.floor(Math.random()*16777215).toString(16);
    //     color = "#" + randomColor;
    });

    

 //Function clear! clears instantly + resets color
 btnClear.addEventListener('click', () => {
  const columns = document.querySelectorAll('.column');
  columns.forEach((column) => {
      column.style.background='none';
      column.style.opacity='1'; 
      color = 'none';
  });
}); 


draw ( );


/*1/27/24 Steps Left to complete project
DONE - 1. btnCLear - needs to clear grid instantly. work on clearGrid function--- 
2. btnRB - It does pick a random clolor but needs to be adjusted to change color per 'cell'
3. Looping during prompt where you cannot cancel without inputting a value. 
4. CSS to makes thisngs pretty.*/
