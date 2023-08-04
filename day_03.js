// Q-1) Write a function to print all elements of an array using any loop. (except for of)

//In this array1 & array2, I have given mulyiple values, numbers, string and a boolean value just to show it can print all
let array1 = ["0", 1, 3, "True", 5, 7, ".", 9, "()"];

for (let n = 0; n < array1.length; n++) {
    console.log(array1[n]);
}
console.log("");

// Q-2) Write a function to print all elements of an array using for of loop.
let array2 = ["Yo", 2, 4, "Hi", 6, 8, "Hey", 10, "True"];

for (n of array2) {
    console.log(n);
}