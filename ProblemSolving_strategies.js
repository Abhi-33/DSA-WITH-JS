//Problem Solving Strategies 
//1) UNDERSTAND THE PROBLEM 

//PROBLEM : Write a function which takes two numbers and returns their sum.

//1. Can i restate the problem in my own words ?
      "implement addition"
//2. What are the inputs that go into the problem ?
    //  -ints?
    //  -floats?
    //  - what about string for large numbers ? 
//3. What are the outputs that should come from the solution to the problem ?
        // -ints? floatS? strings?
//4. Can the outputs be determined from the inputs ? (do i have enough information to solve the problem)
//5. How should i label the pieces of data that are a part of the problem ?

// example of how basic function will look like 
// function sum (a,b){
//     return a+b;
// }
// console.log(sum(5,6));

//2) Explore Concrete examples 

//PROBLEM : Write a function which takes in a string and returns counts of each character in the string .

//charCount("aaaa") {a:4}
//charCount("hello") {h:1 , e:1 , l:2 , o:1}

//"my phone number is 187234" complex problem 
//"Hello hi"  more complex problem 
//charCount("") empty input 
//charCount(9) invalid input

function charCount(str){
    //make object to return at end 
    //loop over string , for each character ...
    //if the char is a number / letter  AND is a key in object , add one to count
    //if the char is a number /letter AND not in object , add it to object adn set value to 1
    //if character is something else (space , period , etc.) don't do anything
    //return object at end 

}

// reverse an Array -- a very common problem and below is the easiest method to solve this
const arr = [1 ,2 ,3 ,4,5];
const rev  =arr.reverse();
console.log(rev);