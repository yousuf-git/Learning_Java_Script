console.log("loops.js File")

// 1. for Loop
console.log("For Loop")
for(let i =1; i<10; i++){
    console.log("i = ", i);
}

// 2. while Loop
let w = 1;
while(w<=5){
    console.log("While Loop Iteration: ", w);
    w++;
}

// 3. do-while
let d = 1;
do{
    console.log("Hi Harry");
    d++;
} while(d<=3)

// 4. for of --> for(let val of string)
let myName = "Harry";
for(let val of myName){
    console.log("val: ", val)
    // console.log(typeof val) // string
}
// Function to count legnth of a string follows the below logic
let count = 0
for(let val in myName){
    count++;
}
console.log("Length of myName: ", count)

// 5. for-in Loop --> for(let key in object)
const profile = { // creating an object named as profile with 3 keys
    pfName: "Harry",
    followers: 200,
    posts: 20
}
console.log("Keys Name in Profile Object are: ")
for(let key in profile){
    console.log(key)
    // console.log(typeof key) // string
}

// Can be used to access and manipulate through the keys of an object , also count them
count = 0;
for(let key in profile){
    console.log("Value of", key, profile[key]) // Display the key name and its value
    // Double quote is not used with key in above statement bcz key is a string itself
    count++;
}
console.log("Number of Keys in profile object: ", count)

// cannnot access keys by using object.key in for-in loop --> will show undefined as below:
let str = "followers"
// console.log(profile.str) // undefined

// Question 1: Display prime numbers between 1 and 50
console.log("Prime Numbers between 1 and 50: ")
for(let i = 1; i<=50; i++){ // get numbers from 1 to 50 sequencialy in i
    let isPrime = true; // prime checker initally assuming as true 
    for(let j=2; j<=i/2; j++){ // get numbers from 2 to half of the i (number to be cheked)
        if(i%j == 0){ // Divide i by above range one by one --> if any number divides it, i (number) is not prime 
            isPrime = false // prime checker changes to false 
            break;
        }
    }
    if(isPrime){ // 0 means no number in the range divided i and hence the number is prime 
        console.log(i, " is Prime")
    }
} 



