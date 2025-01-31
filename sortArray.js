/* Q 2 . Given an array of n strings. Sort the array in lexicographical order.

    Sample Input 1

 abc abd ab a

 Sample Output 1
 a ab abc abd

 Explanation
 The given array is sorted in lexicographical order.*/

let array  = ['abc','abd','ab','a' ]
const sortArray = (array)=>{

  return array.sort();
}

console.log(sortArray(array));