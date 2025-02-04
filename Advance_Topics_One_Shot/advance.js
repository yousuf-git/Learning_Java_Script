/**
 * Author: Muhammad Yousuf
 * Date: Feb 4, 2025
 * Description: This is a one-shot file for some of the advanced topics in JavaScript.

01. Callback
02. Promises
03. Async Await
04. Strict Mode
05. Higher Order Function
06. Call, Apply, Bind
07. Scope and Closoure
08. Hoisting
09. IIFE
10. Currying
11. Debouncing
12. Throttling
13. Polyfills

 */

// 1. ======================== Callback ========================
// A callback is a function passed as an argument to another function, which is then executed after some operation is completed.

// Syntax
function myFunction(callback) {
    // Perform some operation...
    callback();
}

myFunction(() => {
    console.log("Callback executed!");
});
// Use Case -> asynchronous operations like reading files, making API calls, or handling events.

function fetchData(callback) {
    setTimeout(() => {
        const data = "Some data";
        callback(data);
    }, 1000);
}

fetchData((data) => {
    console.log("Data received:", data);
});

// 2. ======================== Promises ========================
// Promises are used to handle asynchronous operations more elegantly than callbacks. A promise represents a value that may be available now, in the future, or never.

// Syntax
const promise = new Promise((resolve, reject) => {
    // Asynchronous operation
    if (success) resolve(value);
    else reject(error);
});

promise.then((value) => {
    console.log("Success:", value);
}).catch((error) => {
    console.log("Error:", error);
});
// Use Case -> handling asynchronous operations like API calls, database queries, etc.

// Example
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = "Some data";
            resolve(data);
        }, 1000);
    });
}

fetchData()
    .then((data) => console.log("Data received:", data))
    .catch((error) => console.log("Error:", error));
// Advantages:
// - Avoids callback hell
// - Better error handling with .catch()

// 3. ======================== Async Await ========================
// async and await are syntactic sugar built on top of promises, making asynchronous code look synchronous

// Syntax
async function myFunction() {
    try {
        const result = await someAsyncOperation();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
// Use Case:
// Used for handling asynchronous operations in a more readable way

// Example:
async function fetchData() {
    try {
        const response = await fetch("https://api.example.com/data");
        const data = await response.json();
        console.log("Data received:", data);
    } catch (error) {
        console.log("Error:", error);
    }
}

fetchData();

// Advantages:
// - Cleaner and more readable code
// - Easier error handling with try/catch.

// Comparison with Promises:
// async/await is just a wrapper around promises, making code more readable.

// 4. ======================== Strict Mode ========================
// - Strict mode is a way to opt into a restricted variant of JavaScript, eliminating some silent errors and making the code more secure.
// - Prevents common mistakes like using undeclared variables.

"use strict";

x = 10; // Throws an error because 'x' is not declared
// Advantages:
// - Prevents accidental global variables
// - Disallows duplicate parameter names
// - Makes eval and arguments safer

// 5. ======================== Higher Order Function ========================
// A higher-order function is a function that takes one or more functions as arguments or returns a function

// Syntax:
function higherOrderFunction(callback) {
    return callback();
}
// Use Case:
// Used in functional programming for abstraction and reusability.

// Example
function multiplyBy(factor) {
    return function (number) {
        return number * factor;
    };
}

const double = multiplyBy(2);
console.log(double(5)); // Output: 10
// Advantages:
// - Encourages reusable and modular code.

// 6. ======================== Call | Apply | Bind ========================
// These are methods used to manipulate the 'this' context of a function.

// Syntax:
function greet() {
    console.log(`Hello, ${this.name}`);
}

const person = { name: "John" };

greet.call(person); // Hello, John
greet.apply(person); // Hello, John
const boundGreet = greet.bind(person);
boundGreet(); // Hello, John

// Use Case:
// - call and apply are used to invoke a function with a specific this value
// - bind creates a new function with a fixed this value

// Example:
function add(a, b) {
    return a + b;
}

console.log(add.call(null, 1, 2)); // 3         functionName.call(thisArg, [argsArray])
console.log(add.apply(null, [1, 2])); // 3      functionName.apply(thisArg, arg1, arg2, ...)
const boundAdd = add.bind(null, 1);  //         functionName.bind(thisArg, arg1, arg2, ...)
console.log(boundAdd(2)); // 3

// Comparison:
// -> call takes arguments individually
// -> apply takes arguments as an array
// -> bind returns a new function with a fixed 'this' value

// 7. ======================== Scope and Closure ========================
// Scope determines the visibility of variables, and closure is a function that retains access to its lexical scope even when executed outside that scope.

// Example:
function outer() {
    const x = 10;
    function inner() {
        console.log(x); // Access to 'x' due to closure
    }
    return inner;
}

const innerFunc = outer();
innerFunc(); // Output: 10

// - Closures are used for data encapsulation and creating private variables.
// - Enables encapsulation and modularity.

// 8. ======================== Hoisting ========================
// Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their scope during compilation.

// Example:
console.log(x); // undefined (not an error)
var x = 10;

foo(); // "Hello"
function foo() {
    console.log("Hello");
}
// Use Case -> helps avoid bugs related to variable and function declarations

// Note: let and const are hoisted but not initialized, leading to a "temporal dead zone"

// 9. ================== IIFE (Immediately Invoked Function Expression) ==================
// An IIFE is a function that is executed immediately after it is defined.

// Syntax:

(function () {
    console.log("IIFE executed!");
})();
// Use Case -> Used to create a private scope and avoid polluting the global namespace.

// Example:
const counter = (function () {
    let count = 0;
    return function () {
        return ++count;
    };
})();

console.log(counter()); // 1
console.log(counter()); // 2
// Advantage -> Avoids global variable pollution

// 10. ======================== Currying ========================
// Currying is a technique where a function is transformed into a sequence of functions, each taking a single argument.

// Example:
function add(a) {
    return function (b) {
        return a + b;
    };
}

const addFive = add(5);
console.log(addFive(10)); // 15
// Use Case -> Used in functional programming for partial application and reusability. 

// 11. ======================== Debouncing ======================== 
// Debouncing limits the rate at which a function is executed, ensuring it is called only after a certain amount of time has passed since the last call.

// Example:
function debounce(func, delay) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

window.addEventListener("resize", debounce(() => {
    console.log("Window resized!");
}, 300));
// Use Case - Used in search bars, window resizing, etc
// Advantage - Improves performance by reducing the number of function calls

// 12. ======================== Throttling ======================== 
// Throttling ensures a function is executed at most once in a specified time interval.

// Example:
function throttle(func, limit) {
    let inThrottle;
    return function (...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
}

window.addEventListener("scroll", throttle(() => {
    console.log("Scrolling!");
}, 1000));
// Use Case - Used in scrolling, mouse movement, etc.

// Comparison with Debouncing:
// -> Debouncing waits for a pause before executing
// -> Throttling executes at regular intervals

// 13. ======================== Polyfills ========================
// Polyfills are code snippets that provide modern functionality in older browsers that do not natively support it.

// Example:
// Polyfill for Array.prototype.includes
if (!Array.prototype.includes) {
    Array.prototype.includes = function (element) {
        return this.indexOf(element) !== -1;
    };
}

console.log([1, 2, 3].includes(2)); // true

// Use Case -> Used to ensure compatibility with older browsers.
// Advantage -> Enables modern JavaScript features in older environments.
