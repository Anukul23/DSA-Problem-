


const nthfibonacci = (N)=>{

    if(N<=1){
        return N ;
    }

    return nthfibonacci(N-1)+nthfibonacci(N-2);
}

console.log(nthfibonacci(10));