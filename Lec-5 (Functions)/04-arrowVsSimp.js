// Syntax

function regularFunction(a, b) {
    return a + b;
}

const arrowFunction = (a, b) => a + b;

// Regular Function:
// The value of this in a regular function is determined by how the function is called (runtime binding).

const obj = {
    value: 42,
    regularFunction: function() {
        return this.value;
    }
};

console.log(obj.regularFunction()); // 42


// Arrow Function:
// Arrow functions do not have their own this context. They inherit this from the surrounding lexical context (lexical binding).

const obj2 = {
    value: 42,
    arrowFunction: () => {
        return this.value;
    }
};

console.log(obj2.arrowFunction()); // undefined


// arguments Object

// Regular Function:
// Regular functions have their own arguments object that contains all the arguments passed to the function.


function regularFunction() {
    console.log(arguments);
}

regularFunction(1, 2, 3); // [1, 2, 3]

// Arrow Function:
// Arrow functions do not have their own arguments object. If you need to access the arguments in an arrow function, you have to use rest parameters or rely on the surrounding context's arguments.

const arrowFunc = (...args) => {
    console.log(args);
};

arrowFunc(1, 2, 3); // [1, 2, 3]    

// Constructor Usage

// Regular Function:
// Regular functions can be used as constructors and can be invoked with the new keyword.
function Person(name) {
    this.name = name;
}

const person = new Person('Alice');
console.log(person.name); // Alice

// Arrow Function:
// Arrow functions cannot be used as constructors and will throw an error if invoked with new.

const Person = (name) => {
    this.name = name;
};

// const person = new Person('Alice'); // TypeError: Person is not a constructor

// super Keyword

// Regular Function:
// In classes, regular functions have access to the super keyword, which can be used to call methods on the parent class.

class Parent {
    sayHello() {
        return 'Hello from Parent';
    }
}

class Child extends Parent {
    sayHello() {
        return super.sayHello() + ' and Child';
    }
}

const child = new Child();
console.log(child.sayHello()); // Hello from Parent and Child

// Arrow Function:
// Arrow functions cannot use the super keyword directly. They do not have their own super context and will throw a reference error if you try to use super in an arrow function.

/* 

Summary:

- Syntax: Arrow functions provide a shorter, more concise syntax.
- this Binding: Arrow functions lexically bind this, whereas regular functions bind this dynamically.
- arguments Object: Arrow functions do not have their own arguments object.
- Constructor: Arrow functions cannot be used as constructors.
- super Keyword: Arrow functions cannot use the super keyword.
- Methods in Objects: Arrow functions are not ideal for defining methods in objects due to their lexical this binding.

*/