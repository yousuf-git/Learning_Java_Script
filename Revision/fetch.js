//fetch
//fetch is used to get data over network
//Syntax--> let promise=fetch(url,[option]);
//return a Promise
let p = fetch("https://cataas.com/api/cats?tags=cute");
p.then((response)=>{
              console.log(response.status);
              console.log(response.ok);
              //Respose Header
              console.log(response.headers);
              return response.json()
}).then((value2)=>{
    console.log(value2);

});
//Stage_1 ==> Header, status code 
//stage_2 ==> Body

//Response Header
//These are sent by the server when responding to a request.
//They describe the response details, metadata, and how the client should handle it.

//Request Header
//They are send by the client.
//Request headers are passed with request.
//They describe what the client wants and how it’s sending data.