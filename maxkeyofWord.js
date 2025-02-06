

// Problem Description
// Write a program that takes a list of words arr[] as input and returns the most occurring word in arr[].

// It is guaranteed that if there are multiple words with the same frequency, the program should return the lexicographically minimum string among them.

// Input format
// The first line contains an integer N, the number of words in the array.

// The next N lines contain the words in the array.

// Output format
// Return the most occurring word in the array.

// Sample Input 1
// 4

// hello

// world

// crio

// crio 

// Sample Output 1
// crio

// Explanation
// In this case, "crio" is the most frequent word, occurring 2 time.

const maxReapetingword =(arr)=> {
    
    let map = new Map();
    
    for(let i=0 ; i<arr.length; i++){
        
        if(!map.has(arr[i])){
            map.set(arr[i],1);
        }
        else{
            let val = map.get(arr[i]);
            map.set(arr[i],val+1);
        }
    }
    let maxcount = 0;
    let maxkey;
    
    for(let [key,value] of map){
        if(maxcount <  value){
            maxcount = value;
            maxkey = key;
        }
        
    }
    return maxkey;
}
console.log(maxReapetingword(['crio','hello','world','crio','crio','crio']))