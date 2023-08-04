// Q initialize a variable, and display a message whether that number is prime or not. 
// Ex: 1 is not a prime number | 17 is a prime number 
// Note: Also handle edge cases and bad inputs appropriately

// let the number be user defined
let num = Number(require("prompt-sync")()());
// initial value of isPrime variable is set to true
let isPrime = true;

// special case decleration, 1 is not a prime number
if (num === 1) {
    console.log("1 is not a prime number.");
    /* return value will help the line No.34 to display the desired output that I want if,
    I remove the return value here then it will print both line No.12 & No.36 */
    return;
}

// if No. is greater than 1 then it will execute this function.
if (num > 1) {
    for (let n = 2; n < num; n++) {
        /* from starting to the No.2 it will itrate until the user input minus 1, if user input is divisible by n number
        and remainder is equals to 0 it will set the value of isPrime to false */
        if (num % n == 0) {
            isPrime = false;
        }
    }
    // here if the value of isPrime is true the it will execute the function and print line No.29 in the console.
    if (isPrime) {
        console.log(num, "is a prime number.");
    }
    // if isPrime value is false then it will execute else function and print line No.33 in the console.
    else {
        console.log(num, "is not a prime number.");
    }
}

// edge case handling if the number is equals to 0 or if it's a negative No. it will execute this function and print line No.39
else if (num <= 0) {
    console.log(num, "is an integer.");
}
// if a value is other than number like string or boolean it will print the line No.43 on the console 
else {
    console.log("string/Boolean value is not a valid input.");
}