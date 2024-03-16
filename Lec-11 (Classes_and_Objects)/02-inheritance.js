class Person {
  constructor(fullName, age, gender) {
    // attributes in the class are created and initialized here
    this.fullName = fullName;
    this.age = age;
    this.gender = gender;
  }
  displayInfo(){
    console.log("Full Name: ", this.fullName)
    console.log("Age: ", this.age)
    console.log("Gender: ", this.gender)
  }
  setMakrs(){
    console.log("Set Marks"); // will never be executed for below Student class objects bcz that has the same function
  }
}
class Student extends Person {
  constructor(fullName, age, gender, className) {
    super(fullName, age, gender); // call the parent constructor and pass 3 arguments
    this.className = className
  }
  setMakrs(marks) {
    this.marks = marks // overridden method, it is preffered
  }
  displayInfo(){
    super.displayInfo() // below 3 lines will do the same thing but super.method() should be used to display inherited properties first
    // console.log("Full Name: ", this.fullName)
    // console.log("Age: ", this.age)
    // console.log("Gender: ", this.gender)
    console.log("Class Name: ", this.className)
    console.log("Marks: ", this.marks)
  }
}
// Creating a student harry
let harry = new Student() // will have 4 attributes(as in its constructor) but undefined bcz default constructor is called
harry.fullName = "Harry" 
harry.marks = 20 // although there is setMarks() function  to initialize marks but can also be initialized like this

// Creating a new student rohn
let rohn = new Student("Rohn", 20, "male", "1st year")
rohn.setMakrs(91)
// rohn.marks = 92 // marks value can be changed directly
console.log("Rohn Info is below:")
rohn.displayInfo()

// Q1: Create a class User with 2 properties name & email and a method to display them
class User{
    constructor(username, email){
        this.username = username;
        this.email = email
    }
    viewInfo(){
        console.log("Username: ", this.username)
        console.log("Email: ", this.email)
    }
}
let user1 = new User("John Snow", "snown@stark.winterfell")
user1.viewInfo()

// Q2: Create a new class Admin that inherits User class and has a method to edit user info
class Admin extends User{
    editInfo(username, email){
        super.username = username
        super.email = email
    }
}
let admin = new Admin()
admin.editInfo("Aegon Sand", "sand@targeriyan.kingsLanding")
admin.viewInfo()

// Error Handling
let fullName = "harry"
let gender = "Male"
console.log("Name: ", fullName)
// console.log("Age: ", age) // age is undefined
// uncomment above line and comment down the try-catch to see the difference
try{
    console.log("Age: ", age) // age is undefined so it is an error but it will be handled now
} catch(err){
    console.log("Set the age first")
    console.log(err)
}
console.log("Gender: ", gender) // if error is not handled this will not be executed
