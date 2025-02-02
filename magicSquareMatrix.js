// Problem Description
// Given a matrix of dimension nxn having elements 1 to nxn distinct elements. Check whether the matrix is magic square or not.

// Magic square is a square that has the same sum of rows, columns and diagonals.

// Input format
// First line contains integer n.

// In next n lines each line contains n elements.

// Output format
// Print "Yes" if it is a magic square , "No" otherwise.

// Sample Input 1
// 3

// 4 9 2

// 3 5 7

// 8 1 6

// Sample Output 1
// Yes

// Explanation
// All rows, columns and diagonals have sum 15.

let matrix = [
    [4,9,2],
    [3,5,7],
    [8,1,6]
]

//calculate the sum of digoanl1

const sumOfDigonal1 = (matrix)=>{
 
    let sum =0 ;
    for(let i=0 ; i<matrix.length;i++){

        sum+= matrix[i][i];
    }
   return sum;
}

const sumOfDigonal2 = (matrix)=>{

    let col = matrix.length-1;
    let sum =0;

    for(let row =0; row<matrix.length;row++,col--){
        sum+= matrix[row][col]
    }
    return sum;
}

const itirateRows = (matrix,rowNo)=>{

    let sum = 0;
    for(let i=0; i<matrix[rowNo].length ; i++){
        sum+= matrix[rowNo][i];
    }
    return sum;
}

const sumOfRows =()=>{
    let sumrow0 = itirateRows(matrix ,0);

    for(let i=0 ; i<matrix.length ;i++){
        let tempsum = itirateRows(matrix , i);
        if(sumrow0 !== tempsum){
            return -1;
        }
    }
    return sumrow0;
}
const itirateCols =(matrix,colNo)=>{

    let sum= 0;

    for(let i=0 ;i<matrix.length;i++){
        sum+= matrix[i][colNo]
    }
    return sum;
}

const sumOfCols = ()=>{

    let col0 = itirateCols(matrix ,0);

    for(let i=0 ; i<matrix.length; i++){
        let tempsum = itirateCols(matrix,i);
        if(col0 !== tempsum){
            return -1;
        }
    }
    return col0;
}


const magicSquare =(matrix)=>{

    let sumD1 = sumOfDigonal1(matrix);
    let sumD2 = sumOfDigonal2(matrix);
    let rowSum = sumOfRows(matrix);
    let colSum = sumOfCols(matrix);
    console.log(sumD1);
    console.log(sumD2);
    console.log(rowSum);
    console.log(colSum);

    if(sumD1==sumD2 && sumD2==rowSum && rowSum==colSum){
        console.log('yes')
    }
    else{
        console.log('NO')
    }
}
console.log(magicSquare(matrix))