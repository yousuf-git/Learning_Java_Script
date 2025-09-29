//Weak Map
//Keys must be objects
//not iterable
//has no .size property
//used to storing temporary data 

let weakMap = new WeakMap();
let user={
    name:"Alice"
};
weakMap.set(user,"Private Data");
console.log(weakMap.get(user));

user=null;//remove the refrence 
//✅ Now the key-value pair will be garbage collected automatically.
console.log(weakMap.has(user));//false