// Objects - unordered key value pairs 

// When to Use Objects : - 1) When you don't need order.
                        // 2) When you need fast access/insertion and removal.

// Example 1
let instructor = {
    firstName : "kelly",
    isInstructor : true,
    favoriteNumbers : [1,2,3,4]
}
console.log(Object.keys(instructor));  //Big 0 - O(N) 
console.log(Object.entries(instructor));  //Big 0 - O(N) 
console.log(Object.keys(instructor));  //Big 0 - O(N) 
console.log(Object.keys(instructor));  //Big 0 - O(1) 