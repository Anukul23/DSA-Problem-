let arr =[2,4,5,7,9];
let target = 7;

const pairoftargetSum =(arr)=>{
    
    let left = 0;
    let right =arr.length-1;
    while(left < right){
        let sum = arr[left]+arr[right];
        if(sum == target){
           return [left ,right];
           
        }
        else if(sum > target){
              right--;  
        }
        else{
            left++;
        }
    }
    return false;
}
console.log( pairoftargetSum(arr))