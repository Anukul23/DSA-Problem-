// Problem Description
// You are given a positive integer 'N'. You have to find the sum of the first 'N' natural numbers.

// Input format
// First line contains an integer - N.

// Output format
// Print the sum of first N natural numbers.

// Sample Input 1
// 10

// Sample Output 1
// 55

let n = 10
 
const findNatualSum =(n)=>{
    
    let sum = 0;
    for(let i= 0 ;i <= n ; i++){
    sum = i+sum;    
        
    }
    return sum;
    
}
console.log(findNatualSum(n));