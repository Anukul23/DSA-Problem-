console.log("Try programiz.pro");

let arr =[2,4,5,7,9];
let target = 7;

const pairoftargetSum =(arr)=>{
    
    left = 0;
    right = arr.length-1;
    
    while(left<right){
        
        if(arr[left]+arr[right] > target){
            right--
        }
        else if(arr[left]+arr[right]<target){
            left++
        }
        else  (arr[left]+arr[right] == target)
        {
            return arr[left] , arr[right];
        }
    }
    return false;
}
console.log( pairoftargetSum(arr))