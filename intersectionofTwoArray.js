// Problem Description
// Given two arrays A and B, write a function to compute their intersection.

// Note:

// Each element in the result should appear as many times as it shows in both arrays.

// The result needs to be in sorted order.

// Input format
// First line contains one integer N denoting the number of elements in array A

// Next line contains N integers denoting the elements of array A

// Next line contains one integer M denoting the number of elements in array B

// Next line contains M integers denoting the elements of array B

// Output format
// Single line containing the intersection elements of the two arrays in sorted order.

// Sample Input 1
// 4

// 1 2 2 1

// 2

// 2 2

// Sample Output 1
// 2 2

// Explanation 1
// // Since 2 2 are the only elements present in both the arrays.



let num1 = [1,1,2,2];
let num2 = [2,2];

const findIntersection =(num1 ,num2)=> {
    let hm = new Map();
    for(const ele of num1){
        let freq = hm.get(ele) || 0;
        hm.set(ele , freq+1)
    }
    //console.log(hm)
    let result = [];
    for(const element of num2){
        let freq = hm.get(element)||0;
       if(freq >0){
           result.push(element);
           
           hm.set(element , freq-1);
       }
    }
    return result;
}

console.log(findIntersection(num1 ,num2))