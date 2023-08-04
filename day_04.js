// Q-1) Explain function declaration by statement and function declaration by expression, by giving code examples?

// 1. function statement is defined with a function name "sum1".
// 2. we have to give it a name to call the function later.
function sum1(a, b) {
    return a + b;
}
console.log(sum1(5, 9));


// 1. In function expression the function is stored-inside/asiigned to a variable "sum2".
// 2. we can call the function from the variable name itself.
let sum2 = function (a, b) {
    return a * b;
}
console.log(sum2(5, 9));

// Q-2) Write a function declaration by expression, and convert it into an arrow function? keep the arrow function anonymous.

let funExp = function () {
    // the function is stored inside a variable insted of defining a function name.
    console.log("This is an anonymous function expression.");
}
funExp();

let aFun = () => {
    // the function is stored inside a variable & the function keyword has been removed.
    console.log("This is an anonymous arrow function.");
}
aFun();

// if its a single line it cab be written like the below code, output won't change.
// let aAFun = () => console.log("This is an arrow anonymous function");