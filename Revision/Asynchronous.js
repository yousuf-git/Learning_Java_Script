//Asynchronous JavaScript
//JS is single threaded language but async allows task like API calls , timers , DB queries to run without blocking.
// console.log("1.Start ");
// setTimeout(()=>{
//     console.log("2.Inside setTimeout after 2 seconds delay");
// },2000);
// console.log("3.End ");

//Callback 
// A function passed into another function as an argument, executed later.
function getData(callback){
    setTimeout(()=>{
        callback("Data received!");
    },2000);
}
getData((data)=>{
    console.log(data);
});
//callback with setTimeout
function greet(callback){
      console.log("Hello!");
      setTimeout(callback,1000);
}
greet(()=>{
    console.log("callback executed");
});
//callback with parameters
function Dataprocess(callback){
    setTimeout(()=>{
        callback("✅ Data processed successfully!");
    },3000);
}
Dataprocess((message)=>{
    console.log(message);
});

//callback after multiple async steps 
function step1(callback){
    setTimeout(()=>{
        console.log("Step 1 done");
        callback();
    },4000);
}
function step2(callback){
    setTimeout(()=>{
        console.log("Step 2 done");
        callback();
    },5000);
}
function step3(callback){
    setTimeout(()=>{
        console.log("Step 3 done");
        callback();
    },6000);
}

step1(()=>{
    step2(()=>{
        step3();
    });
});
//Callback with data
function getData(callback){
      setTimeout(()=>{
        let data = "some data";
        callback(data);//sending data to callback 
      },2000);
}

getData((result)=>{
    console.log("Recieved:",result);
});