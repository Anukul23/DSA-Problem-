// Problem Description
// Given a paragraph of words, capitalize the first character of each word and return the paragraph.

// Input format
// First line contains a string - The paragraph.

// Output format
// Print the paragraph after capitalizing each word.

// Sample Input 1
// the quick Brown fox jumps over The lazy dog.

// Sample Output 1
// The Quick Brown Fox Jumps Over The Lazy Dog.

// Explanation
// Each word has it’s first character capitalized

let paragraph = "the quick Brown fox jumps over The lazy dog."

const capitalizeFirstlatter = (paragraph)=>{

    const arr = paragraph.split("")

    for(let i =0 ; i < arr.length; i++){
 
        if(arr[i]== "." || arr[i]==" "){
            continue ;

        }
        if(i === 0 || arr[i-1] ===" "){
            arr[i] = arr[i].toUpperCase();
        }
    
    }
    return arr.join("");
}

console.log(capitalizeFirstlatter(paragraph));