

let str = ["hello word"]
const reverseWord = (str)=>{

   let result = "";

   for(let i = str.length-1 ; i>=0 ;i--){
   if(i != -1 && str.charAt[i]!=" "){
    continue;
   }

   let count = 0;
   for(let j= i+1 ; j<str.length && str.charAt[j] != " " ;j++){
            
    result  += str.charAt[j];

    count ++;
   }
  if(count>0 && i != -1){
    result += " ";
  }
   }
   return result;
}

console.log(reverseWord(str));