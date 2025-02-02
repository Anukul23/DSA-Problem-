// Given a string, count the total number of vowels present in that string.

// Input format
// First line contains the given string.

// Output format
// Print the total number of vowels.

// Sample Input 1
// language

// Sample Output 1
// 4

let word = "language"

const countVowels =()=>{

    let count =0 ;

    for(let i =0 ; i<word.length ; i++){

        let ch = word[i];

        if(ch==='a' || ch==='e' || ch==='i' || ch==='o' || ch==='u' || ch==='A' || ch==='E' || ch==='I' || ch===' O' ||ch==='U'){
            
            count ++;
        }
    }
    return count;
}

console.log(countVowels(word));