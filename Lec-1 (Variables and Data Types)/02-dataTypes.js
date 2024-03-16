console.log("");
console.log("Data Types File");
console.log("");

// Primitive (fixed) data types --> 7
// Non Primitive --> Objects (Arrays & Functions)

// 1. Number
console.log("1. Number Data Type");
let num = 10;
console.log("Value of Num: ", num);
console.log("Data Type of Num: ", typeof num);

let fl = 20.373;
console.log("Value of fl: ", fl);
console.log("Data Type of fl: ", typeof fl);

let neg = -120;
console.log("Value of neg: ", neg);
console.log("DataType of neg: ", typeof neg);
console.log("");

// 2. String
console.log("2. String Data Type");
let name = "Harry";
console.log("Value of Name: ", name);
console.log("Data Type of name: ", typeof name);
console.log("");

// 3. Boolean
console.log("3. Boolean Data Type");
let isTrue = true;
let isFalse = false;
console.log("Value of isTrue: ", isTrue, "isFalse: ", isFalse);
console.log("Type of isTrue and isFalse: ", typeof isTrue, typeof isFalse);
console.log("");

// 4. Undefined
console.log("4. Undefined Data Type");
let und;
console.log("Value of und: ", und);
console.log("Data Type of und: ", typeof und);
console.log("");

// 5. Null --> Object
console.log("5. Null Data Type");
let myNull = null;
console.log("Valye of myNull: ", myNull);
console.log("Data Type of myNull: ", typeof myNull); // will show as Object
console.log("");

// 6. Big Int
console.log("6. Big Int Data Type");
let myBigInt = BigInt(237832);
console.log("Value of myBigInt: ", myBigInt);
console.log("Data Type of myBigInt: ", typeof myBigInt);
console.log("");

// 7. Symbol
console.log("7. Symbol Data Type");
let sym = Symbol("Something");
console.log("Valye of sym: ", sym);
console.log("Data Type of sym: ", typeof sym);
console.log("");

// Object
console.log("Object Data Type");
// Creating an object
let person = {
  // key : value,
  fullName: "Mr. Harry",
  age: 20,
  salary: 20000.4,
};

// Accessing keys of object
console.log("Person Name: ", person["fullName"]);
console.log("Person Age: ", person.age);
console.log("Person Salary: ", person.salary);

person.age = person.age + 2; // Increment in age
console.log("Type of person Age: ", typeof person.age);

// Information of any social media profile as an object
// Suppose an Instagram Profile
const profile = {
  profile_name: "Harry",
  username: "@harry___955",
  posts: 20,
  followeres: 200,
  following: 10,
  bio: "Make the world better than you found it",
  isFollow: false,
};

console.log(profile);
console.log("Data Type of Profile: ", typeof profile);
console.log("Data Type of Profile Followere: ", typeof profile.followeres);
