
let n =2025;

const leapYear =(n)=>{

    if(n%400==0 || n%4==0 && n%100!==0){
        return true
    }
    else {
        return false
    }
}

console.log(leapYear(n));