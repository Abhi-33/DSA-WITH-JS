//Add- Examples
//compare the two solutions to find the sum of numbers from 1 to n.

function addUpton(n){ //solution1
    let total = 0;
    for(let i = 0;i<=n;i++){
        total+=i;
    }
    return total;
}
// console.log(addUpton(1000000));  //Time Complexity - O(n)

//solution2 
// function addUpton(n){
//     return n * (n+1) / 2;
// }
// 6*(6+1)/2
// console.log(addUpton(1000000));  >>Time Complexity - O(1)
//  2nd Example
function printAllpairs(n){
    for(var i=0;i<n;i++){
        for(var j =0 ;j<n;j++){
            // console.log(i,j)        //>>Time Complexity - O(n^2)
        }                               
    }                           
}                               
// printAllpairs(9);

// 3rd Example 
function logAtLeast5(n){
    for(let i=1;i<=Math.max(5,n);i++){
        console.log(i)
    }
}
// logAtLeast5(100);   >>Time Complexity : O(n)

// 4th Example 
function logAtMost5(n){
    for(let i=1;i<=Math.min(5,n);i++){
        console.log(i)
    }
}
// logAtMost5(2); >>Time Complexity : O(1)

function orderOfone(n){
    return n * (n+1) / 2;
}
console.log(orderOfone(2));