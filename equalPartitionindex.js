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

let arr = [1,4,2,5];
let n = arr.length;

const equalPortion=(n,arr)=>{

    let prefixSum = new Array(n);

    for(let i=0; i<n ; i++){

        prefixSum[i]=((i==0)?0 : prefixSum[i-1])+arr[i];
    }
    console.log(prefixSum);

     let suffixSum = new Array(n);

     for(let i = n-1 ; i>=0 ; i--){
        
        suffixSum[i] = ((i==n-1) ? 0 : suffixSum[i+1])+arr[i]
     }

     console.log(suffixSum);

     for(let i=0 ; i<n; i++){
        if(suffixSum[i]==prefixSum[i]){
            return i
        }
     }
  return -1;
}
console.log(equalPortion(n,arr));