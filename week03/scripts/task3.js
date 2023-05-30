/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2

function Add(number1, number2){
    let sum = number1 + number2;

// Step 2: In the function, return the sum of the parameters number1 and number2

return sum;
}

// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function

function addNumber(){
    number1 = document.querySelector("#addend1").value * 1;
    number2 = document.querySelector("#addend2").value * 1;

// Step 4: Assign the return value to an HTML form element with an ID of sum
    
    document.querySelector("#sum").value = Add(number1,number2);
}

// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function

 document.querySelector("#addNumbers").addEventListener("click", addNumber);

// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers

function subtract(number1, number2){
    let sum = number1 - number2;

return sum;
}

function subtractNumbers(){
    number1 = document.querySelector("#minuend").value * 1;
    number2 = document.querySelector("#subtrahend").value * 1;
    
    document.querySelector("#difference").value = subtract(number1,number2);
}

 document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);

// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers

function multiply(number1, number2){
    product = number1 * number2;
    return product;
}

function mulitplyNumbers(){
    number1 = document.querySelector("#factor1").value * 1;
    number2 = document.querySelector("#factor2").value * 1;
    
    document.querySelector("#product").value = multiply(number1,number2);
}

 document.querySelector("#multiplyNumbers").addEventListener("click", mulitplyNumbers);

// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers

function divide(number1, number2){
    product = number1 / number2;
    return product;
}

function divideNumbers(){
    number1 = document.querySelector("#dividend").value * 1;
    number2 = document.querySelector("#divisor").value * 1;
    
    document.querySelector("#quotient").value = divide(number1,number2);
}

 document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);

// Step 9: Test all of the mathematical functionality of the task3.html page.


/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date

const currentDate = new Date();

// Step 2: Declare a variable to hold the current year

let currentYear;

// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2

currentYear = new Date().getFullYear();

// Step 4: Assign the current year variable to an HTML form element with an ID of year

document.querySelector("#year").textContent = currentYear;

/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25

numbers = [];

for(i = 1; i < 26; i++){
    numbers.push(i);
}

// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"

document.querySelector("#array").textContent = numbers;

// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the result to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )

document.querySelector("#odds").textContent = numbers.filter(odds);

function odds(number){
    if (number % 2 !== 0){
        return number;
    }
}

// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"

document.querySelector("#evens").textContent = numbers.filter(evens);

function evens(number){
    if (number % 2 === 0){
        return number;
    }
}

// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"

document.querySelector("#sumOfArray").textContent = numbers.reduce(reduceCount);

function reduceCount(total, number){
    return total + number;
}

// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"

document.querySelector("#multiplied").textContent = numbers.map(timesTwo);

function timesTwo(number){
    return number * 2;
}

// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"

const multiplied = numbers.map(timesTwo);
document.querySelector("#sumOfMultiplied").textContent = multiplied.reduce(reduceCount);
