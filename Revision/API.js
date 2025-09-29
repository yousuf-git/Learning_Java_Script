fetch("https://jsonplaceholder.typicode.com/posts/67")
.then(response=>{
    if(!response.ok){
        throw new Error("HTTP error, status=" + response.status);
    }
    //console.log(response.status);===>200
    return(response.json());
})

.then(data=>{
    console.log("Received posts:",data);
})
.catch(err=>{
    console.error("Error fetching posts:",err);
});