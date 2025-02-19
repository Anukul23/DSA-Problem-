// Problem Description
// Write a program to calculate the simple interest based on the given principal amount, rate of interest, and time period.

// The formula to calculate simple interest is as follows:

// Simple Interest = (Principal × Rate × Time) / 100

// ​

// Input format
// The input consists of three space-separated integers on a single line:

// P (Principal amount)

// R (Rate of interest)

// T (Time period in years)

// Output format
// The program should output a single floating-point number representing the calculated simple interest, rounded to two decimal places.

// Sample Input 1
// 1000 5 2

// Sample Output 1
// 100.00

let P = 1000;

let R = 5;

let T = 2;

const simpleIntrest = (P,R,T)=>{
    
    let SI = (P*R*T)/100;
    
    return SI;
}
console.log(simpleIntrest(P,R,T));