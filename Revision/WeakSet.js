//Weak Set
//The value in a WeakSet must be objects (not primitive values)
//It is mainly used for tracking objects without preventing them from being garbage-collected.


let weakSet = new WeakSet();
let user1={
    name:"Alice"
};
let user2={
    name:"Bob"
};
weakSet.add(user1);
weakSet.add(user2);

console.log(weakSet.has(user1));//true
user1=null;//remove refrence 
// ✅ Now the object is automatically removed from WeakSet during garbage collection.
console.log(weakSet.has(user1));//false


//Sets --> Any type of value(objects,primitives),iterable,has size property
//WeakSets ---> stores only object,not iterable,not has size property 
//In sets memory stay allocated to the variables until we delete or remove it manually.


//With Set
let mySet=new Set();
mySet.add(user1);
mySet.add(user2);

console.log(mySet.has(user1));//true
