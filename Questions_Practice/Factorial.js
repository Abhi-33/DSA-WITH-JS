'use strict';
function Factorial(n){
    let fact = 1;
    for(let i =0;i<=n ; i++){
       let  digit = fact * n;
    }
    console.log(`The factorial of ${n} is  : ${fact}`);
}
Factorial(5);