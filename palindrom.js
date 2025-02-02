// Given a string comprising only lowercase alphabets, determine whether it qualifies as a palindrome.

// A string is considered a palindrome if it reads the same forwards and backwards.

// Note:

// For the purpose of this problem, we define empty string as valid palindrome.

// Input format
// The only line contains a string.

// Output format
// True or False.

// Sample Input 1
// madam

// Sample Output 1
// true

// Explanation
// "madam" spelt backwards is "madam", therefore, it is a palindrome.

let str = "madam"

const palindrom = (str)=>{

    let left =0 ;
    let right= str.length-1;

    while(left < right){
    
        if(str[left] !== str[right]){
            return false ;
        }
        left++ ;
        right --;

    }
    return true;

}
console.log(palindrom(str));