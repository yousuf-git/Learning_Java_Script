// creating an object directly
const person = {
  fullName: "harry",
  age: 20,
  printDetails: function () {
    console.log(this.fullName);
    console.log(this.age);
  },
  printInfo: () => {
    console.log("hi"); // hi
    console.log(this.fullName); // undefined
    console.log(this.age); // undefined
    console.log(person.fullName); // harry
    console.log(person.age); // 20
  },
};
// All objects in JS have by default a prototype property of object type
console.dir(person);
let arr = [1, 2, 3];
console.log(typeof arr); // object
console.dir(arr); // drop down the output and view the prototype (array) which has some predefined methods and properties
// array object prototype has: properties like: length etc. and methods like push(), pop(), shift(), unshift()... etc

// prototype can also be created
const employee = {
  salary: 0.0,
  setSalary(salary) {
    this.salary = salary;
  },
  printSalary() {
    console.log(this.salary);
  },
};
employee.__proto__ = person; // adding persoon as a prototype for employee object
// Now all methods and properties of person are accessible in employee
console.log("Employee Name: ", employee.fullName); // employee object has no fullName property but now its prototype has

// Creating objects by means of class
class Student {
  // cannot declare properties as below, but they can be created in constructor
  //   marks;
  //   grade;
  //     constructor(){ // constructor is used usually to initialize the values for the object properties (to avoid null/undefined)
  //         console.log("Hello Student"); // executed always whenever on object of student class is created
  //     }
  constructor(marks) {
    // Parameterizes constructor but above one will have to be removed bcz 1 class can have 1 constructor
    this.marks = marks;
    this.calGrade();
  }
  setMarks(marks) {
    this.marks = marks;
    this.calGrade();
  }
  calGrade() {
    if (this.marks >= 90) {
      this.grade = "A";
    } else {
      this.grade = "B";
    }
  }
  displayMarks() {
    console.log("Marks: ", this.marks);
    console.log("Grade: ", this.grade);
  }
}

// Objecr 1 --> if there is no default constructor written in class, then it is done automatically by JS
let std = new Student(); // this will create an object of Student class and call its constructor
std.setMarks(90); // setting marks by using class method
console.log("Marks of Student 1:");
std.displayMarks(); // displaying marks by displayMarks() method in class
// Objecr 2
let std2 = new Student(80);
console.log("Marks of Student 2:");
std2.displayMarks();

// Inheritance --> used to get properties and methods of an existing class in a new class
class Person{
  constructor(){
    // console.log("Adding new person")
  }

}
class StudentNew extends Person{
  constructor(){
    super() // compulsory to call parent class constructor by super()
    // console.log("Adding new Student")
    // super() // can also be done here but not preffered 
  }

}
let student = new StudentNew()




