
// Problem Description
// Partitioning an array means to split an array along an element, such that it divides the array into two parts with some specific property. The element that partitions the array is called the partitioning element.

// Given an array, find the element, partitioning along which, the sum of elements to its left, equals the sum of elements to its right. The partition element itself is to be excluded from both sums.

// Return the index of the partitioning element. If no such element exists, return -1.

// Input format
// There are N+1 lines of input.

// First line will contain a single integer N.

// Second line will contain n space separated integer representing array elements.

// Output format
// Output the index of the partitioning element.

// Constraints
// 2 <= N <= 10^6

// 1 <= Arr[i] <= 10^9

// Sample Input 1
// 4

// 1 4 2 5

// Sample Output 1
// 2

// Explanation 1
// Since 1 + 4 = 5 where 2 is such an element.


let arr = [1,4,2,5];
let n = arr.length;
const partitionIndex = (arr ,n)=>{

    let prefix = new Array(n);

    for(let i=0 ; i<n ; i++){
       
        prefix[i] = ((i==0) ? 0 : prefix[i-1])+arr[i];

    }

    let suffix = new Array(n);

    for(let i=n-1 ; i>=0 ; i--){

        suffix[i] = ((i==n-1) ? 0 : suffix[i+1])+arr[i];
    }

    for(let i=0 ; i<n ; i++){
        if (prefix[i]==suffix[i]){
            return i
        }
    }
    return -1



}
console.log(partitionIndex(arr ,n))