// Given two sorted arrays of size M and N, merge the two arrays and return the final array, sorted.

// Input format
// A single Integer M, that contains the number of elements in the first array.

// A single Integer N, that contains the number of elements in the second array.

// Next Line contains M space Integers of the array nums1.

// Next Line contains N space Integers of the array nums2.

// Output format
// Print the array after merging.

// Sample Input 1
// 3

// 3

// 1 2 3

// 2 5 6

// Sample Output 1
// 1 2 2 3 5 6

// Explanation 1
// The sorted array is returned after merging.


let num1 = [1,2,3];
let num2 = [2,5,6];
let m = num1.length;
let n = num2.length;


const mergeTwosortedarray =(num1 ,num2,m,n)=>{

   

    let nums3 = new Array(m+n);

    let p1=0;p2=0;p3=0;

    while(p3 < m+n){

        let v1 = (p1 < m)?num1[p1] : 1e9+5;
        let v2 = (p2 < n) ? num2[p2]:1e9+5;

        if( v1 <= v2){
            nums3[p3]=v1;
            p1++;
            p3++;
        }
        else{
            nums3[p3]=v2;
            p2++;
            p3++
        }
    }
    return nums3;
}
console.log(mergeTwosortedarray(num1,num2,m,n));