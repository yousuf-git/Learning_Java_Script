//async_await
//async function always return a promise 
async function harry(){
   let dehliWeather = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("27 Deg")  
    },2000)
   })
      let bangloreWeather = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("21 Deg")  
    },5000)
   })

   console.log("Fetching dehli weather Please wait !!!");
   let deliW = await dehliWeather;
   console.log("Fetching Dehli Weather :"+ deliW)

   console.log("Fetching banglore weather Please wait !!!");
   let bangloreW = await bangloreWeather;
   console.log("Fetching Banglore Weather :"+ bangloreW);

   return [deliW , bangloreW];
}
const cherry = async () =>{
   console.log("Hey I am Cherry and I am not waiting");
}
const main = async () =>{
console.log("Welcome to weather control room");
let a= await harry();
let b= await cherry();
}
main()


//Example 
async function createPost(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
            method :"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
               title :"Async Await Example",
               body:"POST with async/await is cleaner",
               userId:5
            })
        });
        const data = await response.json();
        console.log("✅ Post Created:", data);
    
         } catch(err){
        console.error("❌ Request failed:", err);
    }

}
createPost();
