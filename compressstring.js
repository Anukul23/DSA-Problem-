let str = "aabbcccc";

const compressString =(str)=> {
    
    let res = "";
    let ch = "#";
   
    let frq = 0;
    
    for (let i=0; i<str.length; i++){
        
        if(str[i] !== ch){
            
            if(ch !== "#"){
                
                res += ch+frq
         }
         frq =1;
         ch = str[i];
        }
        else{
            frq++;
        }
        
    }
    if ( ch !== "#"){
        res += ch+frq;
    }
    if(res.length >= str.length){
        return str;
    }
    return res;
}
console.log(compressString(str))