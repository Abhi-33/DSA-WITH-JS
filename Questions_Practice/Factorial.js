//  Find the factorial of n 

function factorial(n){
    if(n ==0 || n==1){  //in this problem recursive function approach is used recursive 
                        //functions calls themselves till the point they reach the base
                        //case , in this question base case is 5.
        return 1;
    }
    else{
        return n * factorial(n-1);
    }
}

 console.log(factorial(5));

// button.addEventListener('click', ()=>{
//     let count =0 ;
//     while(click){
//         count++
// ;
//     }
// })