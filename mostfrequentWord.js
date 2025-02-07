// Problem Description
// You are given a string which comprises lower case alphabets (a-z), upper case alphabets (A-Z), numbers, (0-9) and special characters like !,-.; etc.

// You are supposed to find out which character occurs the maximum number of times and the number of its occurrence, in the given string. If two characters occur equal number of times, you have to output the character with the lower ASCII value.

// For example, if your string was: aaaaAAAA, your output would be: A 4, because A has lower ASCII value than a.

// Input format
// Input will contain 1 line containing a string S.

// Output format
// You've to output two things which will be separated by a space: a) The character which occurs the maximum number of times. b) The number of its occurrence.

// Sample Input 1
// Statements are unique.

// Sample Output 1
// e 4

// Explanation
// e occurs 4 times.

let text = "Statements are unique";

const getfrqChar=(text)=>{
    
    let hm = new Map();
    
    for(let i =0 ; i<text.length;i++){
        
        let ch = text[i];
        
        let freq = hm.get(ch)||0;
        
        hm.set(ch,freq+1);
       
    }
     let ans = '';
     let maxfreq = 0;
     
     for(const [ch,freq] of hm){
         let freq = hm.get(ch)||0;
         
         if(freq > maxfreq){
             ans = ch;
             maxfreq = freq;
         }
         else if(freq == maxfreq){
             if(ch<ans){
                 ans = ch
             }
         }
     }
     return [ans , maxfreq];
     
}
console.log(getfrqChar(text));
