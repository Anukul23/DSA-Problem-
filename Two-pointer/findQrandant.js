// // 

// Problem Description
// Given coordinates of a point (x,y) in 2D plane, Find in which quadrant does this point lie.

// Input format
// First line contains 2 space separated real numbers - x coordinate, y coordinate.

// Output format
// Print 1, 2, 3 or 4 depending on in which quadrant does the point lie.

// Sample Input 1
// -5.5 2

// Sample Output 1
// 2

// Explanation
// The x-coordinate is negative and the y-coordinate is positive which means the point lies in the 2nd quadrant.

// Sample Input 2
// 1 -1

// Sample Output 2
// 4

// Explanation
// The x-coordinate is positive and the y-coordinate is negative which means the point lies in the 4th quadrant.


const findQuardant =(x,y)=>{
    
    if (x>0 && y>0){
        return 1
    }
    
    else if( x >0 && y<0){
        
        return 2
    }
    else if (x<0 && y<0){
        return 3
    }
    else return 4
}
console.log(findQuardant(1,-1))