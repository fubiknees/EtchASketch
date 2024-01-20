const containerDiv = document.querySelector('.container')





// // changing grid function to something i can better understand
// function makeGrid(e) {
//   for (let i = 0; i < e; i++) {
//     const row = document.createElement('Div');
//     container.appendChild(row);
//     row.className = "row";
//     for (let i = 0; i < e; i++) {
//         const column = document.createElement('Div');
//         row.appendChild(column);
//         column.className = "column";
//         column.style.width = '100%';
//         let height = 960/ parseInt(columnValue);
// //         column.style.height = `${height}px`;
//     }
//   }  
// }


function draw ( ) {
  background(220);

  for (let x = 0;x < 20; x++) {
    rect(x * 20,0,20,20);
  }

  for (let y = 0;y < 20; y ++) {
    rect(0, y *20, 20, 20);
  } 
}

draw( );

;