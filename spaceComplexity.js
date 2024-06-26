// example 1
function sum(arr){
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total+= arr[i];
        
    }
    return total;       //space complexity : O(1)
}                       

// Example 2
function double(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(2*arr[i]);
        
    }
    return newArr;          //Space Complexity - O(n)
}
// console.log(double([1,2,3]))
//Example 3
function triple(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(3*arr[i]);
        
    }
    return newArr;          //Space Complexity - O(n)
}
// console.log(double([1,2,3]))