//Add- Examples
//compare the two solutions to find the sum of numbers from 1 to n.

function addUpton(n){ //solution1
    let total = 0;
    for(let i = 0;i<=n;i++){
        total+=i;
    }
    return total;
}
console.log(addUpton(5));

//solution2 
function addUpton(n){
    return n * (n+1) / 2;
}
// 6*(6+1)/2
console.log(addUpton(6));