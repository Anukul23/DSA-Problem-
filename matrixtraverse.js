let matrix = [
    [1,2,3] ,
    [4,5,6,],
    [7,8,9],
   

];

// sum of digonal 


// Traverse diogal matrix top right to bottom left

// const traverseDigonal2 = ()=>{
  

//     let col =matrix.length-1;
//     for(let row =0 ; row <matrix.length ;row++,col-- ){
//         console.log(matrix[row][col])
//     }
// }
// traverseDigonal2(matrix);

// travers digonal of matrix top left to bottom right 

// const traverseDigonal1 = (matrix)=>{

//     for(let i=0 ; i<matrix.length ;i++){

//         console.log(matrix[i][i]);
//     }
// }
// traverseDigonal1(matrix);

// traverse row in matrix 

// const traverseRow = (matrix , rowNo)=>{
//      for(let i=0 ; i < matrix[rowNo].length ; i++){
//         console.log(matrix[rowNo][i]);
//      }
// }
// traverseRow(matrix , 1)

// traverse only colum in matrix

// const itirateMatrixcol = (matrix,colNo)=>{

//     for (let i=0 ; i < matrix.length ; i++){

//         console.log(matrix[i][colNo]);
//     }

    

// }

// itirateMatrixcol(matrix , 1)


// Itirate or print matrix values

// const itirateMatrix = ()=>{

//     for(let i=0 ; i<matrix.length ;i++){
//         for(let j=0 ; j<matrix[i].length;j++)
//         console.log(matrix[i][j]);
//     }
// }
// console.log(itirateMatrix(matrix));