            /* Here we solve DSA problems Easy to Hard */

            /* Q 1 . Problem Description
              Given an array of n elements and an integer x, find the index where x is present in the array. 
              If there are multiple occurrences, find the leftmost one. 
              If x is not present, return -1.*/

    // let array  = [2,4,1,5,6,1] ;

    // const findleftMostidx = (x)=>{

    //     for(let i =0 ; i<array.length ; i++){

    //         if(array[i]==x){
    //             return i;
    //         }
    //     }
    //     return -1;
    // }
    // console.log(findleftMostidx(1));

    /* Q 2 . Given an array of n strings. Sort the array in lexicographical order.

    Sample Input 1

 abc abd ab a

 Sample Output 1
 a ab abc abd

 Explanation
 The given array is sorted in lexicographical order.*/

// let array  = ['abc','abd','ab','a' ]
// const sortArray = (array)=>{

//   return array.sort();
// }

// console.log(sortArray(array));


/*Q 3 . Write a program to find the peaks in the sequence.

 An element is a peak element if it is greater than its neighbors (a[i] > a[i-1] AND a[i] > a[i+1]).

 For the leftmost element, only check the element to the right of it (a[0] > a[1]). Similarly, for the rightmost element, only check the element to the left of it (a[n-1] > a[n-2]).

 Below is an example, Input: Arr[] = [10,5,6,3,4,8,9,15] Output: [10,6,15]

 Input format
 First line contains an integer N the number of integers int the input array

 Second line contains the integers in the array

 Output format
 Return an array containing all the local peak elements

 Sample Input 1
 7

 4 2 3 1 5 6 4

 Sample Output 1
 4 3 6
*/

// let array = [4,2,3,1,5,6,4]



// const peakElement = (array)=>{
  
//   let result = [];
  
//   for(let i=0 ; i < array.length ; i++){
  
//     left = (i==0) ? -Infinity : array[i-1];
  
//     right = (i == array.length-1) ? -Infinity : array[i+1];
  
//     if(array[i]>left && array[i]>right){
  
//       result.push(array[i]);
//     }
//   }
//   return result;
// }

// console.log(peakElement(array));


/* Q.3  Given an array containing a mix of strings and numbers, such as [a, 1, b, 2, c, d, 3, 4, e], your task is to create a new array that retains only the numbers present in the original array.

For example, from the provided array, the output array should contain [1, 2, 3, 4]. The numbers in the original array can be single or multiple digits, and there may be strings interspersed among them.

Note: The numbers in the array are also of string type.

Input format
First line contains an integer N, the number of elements in the input array

Second line contains the elements of the input array

Output format
Return the expected integer array. The order of integers in the input array must be maintained.

Sample Input 1
8

a 3 long 17 crio dsa 100 20

Sample Output 1
3 17 100 20

Explanation
The input array contains four integers [3, 17, 100, 20]*/




