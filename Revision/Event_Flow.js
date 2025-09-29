//Phases 
//1.Capturing Phase (top->target)
//Event travels from window down to the target element.
document.getElementById("parent").addEventListener("click",()=>{
    console.log("Parent Capturing");
},true);//true means capturing phase
document.getElementById("child").addEventListener("click",()=>{
    console.log("Child Capturing");
},true);
//2.Target Phase    
//Event reaches the actual element you clicked.



//3.Bubbling Phase  (target->top)
//Event then bubbles from the target backup to window
document.getElementById("parent").addEventListener("click",()=>{
   console.log("Parent Capturing");
});
document.getElementById("child").addEventListener("click",()=>{
    console.log("Child Capturing");
});

//Event Delegation 
//parent handles all childrenʼs events.
document.getElementById("todo-list").addEventListener("click",(e)=>{
    if(e.target.tagName==="LI"){
        e.target.style.textDecoration="line-through";//mark done
    }
});
document.getElementById("add").addEventListener("click",()=>{
    const li = document.createElement("li");
    li.textContent="New Task";
    document.getElementById("todo-list").appendChild(li);
});
