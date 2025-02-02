// Problem Description
// Write a program that reverses a string.

// Input format
// First line will be a single string

// Output format
// 1<=size(S)<=200000

// Sample Input 1
// abc

// Sample Output 1
// cba

// Explanation
// cba is reverse of abc.

// Sample Input 2
// aaa

// Sample Output 2
// aaa

// Explanation
// aaa is reverse of aaa.

let str = "abcd"

const reverseString = (str)=>{

    let result = str.split("");
    let left =0 ;
    let right = str.length-1;

    while(left < right){

        let tem = result[left];
        result[left]=result[right];
        result[right]=tem;
        left ++;
        right--;
    } 
    return result.join('');
}

console.log(reverseString(str));