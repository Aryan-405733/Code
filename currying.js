// function sum (a) {
//     return function (b){
//         if(b) return sum(a*b)
//         return a

//     }
// }  
// let val=sum(10)(20)(10)();
// console.log(val)

function sumdigit(n){
    if (n === 0)
        return 0;
    
    return (n%10) + sumdigit(parseInt(n/10));
}

console.log(sumdigit(1111));
