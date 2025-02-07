/*
 * Author: Muhammad Yousuf
 * Date: Feb 7, 2025
 * Description: This is a one-shot file for some of the basic tricks in JavaScript.
*/

// =========== 1. Short-Circuit Evaluation for Default Values ===========

// Normal Way
let username;
if (userInput) {
    username = userInput;
} else {
    username = 'Guest';
}
// Explanation: Checks if userInput is truthy. If true, assigns userInput to username; otherwise, assigns 'Guest'.

// Better Way
const userName = userInput || 'Guest';
// If userInput is falsy (e.g., null, undefined, ''), it defaults to 'Guest'.

// =========== Swap Variables Without a Temporary Variable ===========

let a = 1;
let b = 2;

// Normal Way
let temp = a;
a = b;
b = temp;

// Better Way
[a, b] = [b, a];


// =========== 2. Clone an Array Quickly ===========

// Normal Way
const arr = [1, 2, 3, 4, 5];
const copy = arr.slice();           // shallow copy of the array

// Better Way
const betterCopy = [...arr];

// =========== 3. Remove Duplicates from an Array ===========

// Normal Way
const names = ['John', 'Paul', 'George', 'Ringo', 'John'];
const uniqueNames = [];
names.forEach(name => {
    if (!uniqueNames.includes(name)) {
        uniqueNames.push(name);
    }
});

// Better Way
const uniqueNamesBetter = [...new Set(names)];

// =========== 4. Convert String to Number ===========

// Normal Way
const num = parseInt('42', 10);

// Better Way
const betterNum = +'42';

// =========== 5. Flatten Nested Arrays ===========
const nestedArray = [1, [2, [3, [4]], 5]];

// Normal Way
const flatten = arr => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
const betterFlattenedArray = flatten(nestedArray);

// Better Way
const flattenedArray = nestedArray.flat(Infinity);

// =========== 6. Merge Objects ===========

// Normal Way
const A = { a: 1, b: 2 };
const B = { b: 3, c: 4 };
const merged = Object.assign({}, A, B);

// Better Way
const betterMerged = { ...A, ...B }; // { a: 1, b: 3, c: 4 }, note that B.b overwrites A.b

// =========== 7. Check if an Object is Empty ===========
const obj = {};

// Normal Way
const isEmpty = Object.keys(obj).length === 0;

// Better Way
const betterIsEmpty = JSON.stringify(obj) === '{}';

// =========== 8. Optional Chaining ===========
const user = {
    id: 101,
    personalInfo: {
        name: 'John',
        email: 'john@gmail.com',
        address: {
            line1: '123 Street',
            line2: 'Apt 101',
            city: 'San Francisco',
            state: 'CA',
            zip: '94105'
        }
    }
};

// Basic Approach:
// Task: get zip of user, any of the info can be null or missing, including user itself
// Try yourself first...

// Normal Way
const zipCode = user && user.personalInfo && user.personalInfo.address && user.personalInfo.address.zip;
// && helps avoid errors when properties are missing in the chain, it returns undefined

// Better Way
const betterZipCode = user?.personalInfo?.address?.zip;

// =========== 9. Dynamic Object Keys ===========
const dynamicKey = 'color';
const dynamicValue = 'red';

// Normal Way
const obj1 = {};
obj1[dynamicKey] = dynamicValue;

// Better Way
const betterObj = { [dynamicKey]: dynamicValue };

// =========== 10. Convert Object to Array ===========
const personNormal = { name: 'John', age: 30, city: 'New York'};

// Normal Way
const arr1 = Object.keys(person).map(key => [key, person[key]]);
// [['name', 'John'], ['age', 30], ['city', 'New York']]

// Better Way
const betterArr = Object.entries(person);
// ----- Same stuff but a bit complex -----

const personComplex = {
    name: 'John',
    age: 30,
    city: 'New York',
    address: {
        street: '123 Street',
        area: 'Downtown'
    }
};

// Normal Way
const arr2 = Object.entries(personComplex).map(([key, value]) => {
    if (typeof value === 'object') {
        return [key, Object.entries(value)];
    }
    return [key, value];
});

// Better Way
const betterArrComplex = Object.entries(personComplex)
                            .map(([key, value]) => 
                                [key, typeof value === 'object' ? Object.entries(value) : value]);

// [ ['name', 'John'],
//   ['age', 30],
//   ['city', 'New York'],
//   ['address',
//       [ ['street', '123 Street'],
//         ['area', 'Downtown']
//       ]
//   ]
// ]









