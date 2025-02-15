// First line contains a single integer T denoting the number of test cases.

// For each test case, an integer N will be given on one line and the next line will contain the N numbers of the array.

// Output format
// For each test case, print "Yes" if a subarray exists and "No" otherwise, on a single line.

// Constraints
// 1 <= T <= 1000

// 1<= N <= 100000

// Sum of N for all test cases will be <=200000

// -10^5 <= Array element values <= 10^5

// Sample Input 1
// 2

// 4

// 4 2 -2 5

// 3

// 3 2 -1

// Sample Output 1
// Yes

// No

let arr = [4,2,-2,5];
let n = arr.length;

const findSumzero =(arr ,n)=>{

    let sum =0
    let prefix = new Set();

    for(let i=0; i<n ;i++){
        sum = arr[i]+sum;

        if (sum==0 || prefix.has(sum)){
            return "Yes"
        }
        else{
            prefix.add(sum);
        }
    }
    return "No"
}
console.log(findSumzero(arr,n))