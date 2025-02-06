

const recursive = (N)=>{
 
    if(N>1){
        return ; 
    }
    return 1 + recursive(N-1);
}

console.log(recursive(10));