// ==================== Introduction ====================
// The "spread" and "rest" operators in JavaScript use the same syntax (...),
// but they serve different purposes based on the context.

// -------------------- SPREAD Operator --------------------
// The spread operator is used to "spread" elements of an array or object.
// It is commonly used for creating copies, merging arrays/objects, or passing elements as arguments.

console.log("\n--- Spread Operator Examples ---\n");

// Example 1: Spreading elements of an array
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = [...array1, ...array2]; // Combines array1 and array2
console.log("Merged Array:", mergedArray); // Output: [1, 2, 3, 4, 5, 6]

// Example 2: Spreading properties of an object
const obj1 = { name: "Alice", age: 25 };
const obj2 = { city: "New York", age: 30 }; // age gets overridden
const mergedObject = { ...obj1, ...obj2 };
console.log("Merged Object:", mergedObject); // Output: { name: "Alice", city: "New York", age: 30 }
// Age is updated

// Example 3: Passing array elements as arguments
const numbers = [1, 5, 3];
const maxNumber = Math.max(...numbers); // Spread array elements
console.log("Max Number:", maxNumber); // Output: 5

// -------------------- REST Operator --------------------
// The rest operator is used to "collect" multiple elements into an array or object.
// It is commonly used in function arguments or destructuring assignments.

console.log("\n--- Rest Operator Examples ---\n");

// Example 4: Collecting function arguments
function sum(...nums) {
    return nums.reduce((total, num) => total + num, 0);
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
}
console.log("Sum of numbers:", sum(1, 2, 3, 4)); // Output: 10

// Example 5: Destructuring arrays
const [first, second, ...rest] = [10, 20, 30, 40, 50];
console.log("First:", first); // Output: 10
console.log("Second:", second); // Output: 20
console.log("Rest:", rest); // Output: [30, 40, 50]

// Example 6: Destructuring objects
const person = { id: 101, name: "John", age: 32, city: "San Francisco" };
const { id, ...details } = person;
console.log("ID:", id); // Output: 101
console.log("Details:", details); // Output: { name: "John", age: 32, city: "San Francisco" }

// ==================== Advanced Use Cases ====================

console.log("\n--- Advanced Use Cases ---\n");

// Example 7: Merging arrays with additional elements
const initialArray = ["a", "b"];
const extendedArray = [...initialArray, "c", "d"];
console.log("Extended Array:", extendedArray); // Output: ["a", "b", "c", "d"]

// Example 8: Using rest in function overloading
function introduce(first, ...others) {
    console.log(`Hi, I'm ${first}`);
    if (others.length) {
        console.log(`And these are my friends: ${others.join(", ")}`);
    }
}
introduce("Alice", "Bob", "Charlie", "Dave");
// Output:
// Hi, I'm Alice
// And these are my friends: Bob, Charlie, Dave

// Example 9: Cloning arrays and objects (Spread Operator)
const originalArray = [1, 2, 3];
const clonedArray = [...originalArray];
clonedArray.push(4);
console.log("Original Array:", originalArray); // Output: [1, 2, 3]
console.log("Cloned Array:", clonedArray); // Output: [1, 2, 3, 4]

const originalObject = { name: "Eve", age: 29 };
const clonedObject = { ...originalObject };
clonedObject.age = 30;
console.log("Original Object:", originalObject); // Output: { name: "Eve", age: 29 }
console.log("Cloned Object:", clonedObject); // Output: { name: "Eve", age: 30 }

// Example 10: Filtering properties using rest operator
const user = { id: 1, username: "coder123", password: "securepass" };
const { password, ...safeUser } = user;
console.log("Safe User:", safeUser); // Output: { id: 1, username: "coder123" }

// ==================== Summary ====================
// Spread Operator: Used to spread elements (e.g., for merging, copying, or argument passing).
// Rest Operator: Used to collect elements (e.g., in function parameters or destructuring).
// Both operators are incredibly powerful and improve code readability and reusability.
