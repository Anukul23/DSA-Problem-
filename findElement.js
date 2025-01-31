/*Q 1 . Problem Description
Given an array of n elements and an integer x, find the index where x is present in the array. 
If there are multiple occurrences, find the leftmost one. 
If x is not present, return -1.*/

let array  = [2,4,1,5,6,1] ;

const findleftMostidx = (x)=>{

    for(let i =0 ; i<array.length ; i++){

        if(array[i]==x){
            return i;
        }
    }
    return -1;
}
console.log(findleftMostidx(1));