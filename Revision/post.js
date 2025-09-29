//Post Request
//To make a POST request we need to use fetch options 
// 1) Method---> HTTP method e.g POST
// 2) body-----> the request body

let options = {
    method:"POST",
    headers:{
    "Content-Type":"application/json"
    },
    body:JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
    
}

fetch('https://jsonplaceholder.typicode.com/posts', options)
  .then((response) => response.json())
  .then((json) => console.log(json));

//JSON.stringify() converts javascript object to string 
//JSON.parse() converts string to javasceript object

//Example_1 
let option = {
  method :"POST",
  headers:{
    "Content-Type":"application/json"
  },
  body:JSON.stringify({
    title:'Learning Post',
    body:'This is my first Post',
    userId:101,

  }),
}
fetch('https://jsonplaceholder.typicode.com/posts', option)//sends request
.then((response)=>response.json())//convert response -> to JSON object
.then((json)=>console.log(json));//use the data (print here)

//Example_02 
//POST with User Input


document.getElementById("send").addEventListener("click",()=>{
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  fetch('https://jsonplaceholder.typicode.com/posts',{
     method:"POST",
     headers:{
      "Content-Type": "application/json"
     },
     body:JSON.stringify({
      username:username, 
      email:email
     })
    })
  .then(res=>res.json())
  .then(data=>console.log("✅ User created:", data));
});
//Example_03==>Send data from a javascript object
const newProduct={
  name:"laptop",
  price:12000,
  inStock:true
};
fetch('https://jsonplaceholder.typicode.com/posts',{
  method:"POST",
  headers:{
  "Content-Type":"application/json"
  },
  body:JSON.stringify(newProduct)
})
.then(res=>res.json())
.then(data=>console.log("✅ Product saved:", data))
.catch(error=>console.error("❌ Something went wrong:", error));

//Example_04==>POST with Error handling 
fetch("https://jsonplaceholder.typicode.com/posts",{
  method:"POST",
  headers:{
    "Content-Type":"application/json"
  },
  body:JSON.stringify({
    title:"Hello",
    body:"Error handling test"
  })
  })
  .then(response=>{
    if(!response){
      throw new Error("Server error:"+response.status);
    }
    return response.json();
  })
  .then(data=>console.log("✅ Created:", data))
  .catch(error=>console.error("❌ Something went wrong:", error));


