
const fectorial = (N)=>{

    if(N<=1){
        return N;
    }

    return N*fectorial(N-1);
}
console.log(fectorial(3));