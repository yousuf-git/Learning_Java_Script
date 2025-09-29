//Closures
// A closure = a function remembers variables from its outer scope even after the 
// outer function is done.

function counter(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}

let add = counter();
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());

//Private variables
function createBankAccount(initialBalance){
    let balance = initialBalance;
    return {
        deposit: function(amount){
            balance += amount;
            console.log(balance);
        },
        withdraw:function(amount){
            balance -= amount;
            console.log(balance);
        }
    };
}
let account  = createBankAccount(1000);
account.deposit(500);//1500
account.withdraw(200);//1300
//balance is not directly accessible, only via deposit/withdraw.
//Function Factory
function multiplier(factor){
    return function(num){
        return num*factor;
    };
}

let double = multiplier(2);
let triple = multiplier(3);
console.log(double(5)); // 10
console.log(triple(5)); // 15
//SetTimeout with closures
for(let i=1;i<=3;i++){
    setTimeout(function(){
        console.log("Number:"+i);
    },i*1000);
}