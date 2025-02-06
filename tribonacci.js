
const triboNacci = (N)=>{

    if(N<=2){
        return N
    }
    return triboNacci(N-1) + triboNacci(N-2) + triboNacci(N-3);
}

console.log(triboNacci(5));