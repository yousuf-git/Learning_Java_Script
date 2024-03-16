// Make a game number and then let the user guess it untill he guesses the true number
let num = 69
let inputNum
let play = "yes"; 
//while (play == "yes"){ // 
    inputNum = prompt("Guess the Number:")

    while(num != inputNum){
    inputNum = prompt("Wrong guess, Guess again: ")
    console.log("Wrong Input: ", inputNum) // display user info
    }
    // alert("Congrats", inputNum, "is the correct guess") // ?
    // prompt("Congrats", inputNum, "is the correct guess") // ?
    // play = prompt("Congrats, Do you want to play again (Yes/No) ?") // ?
    console.log("Congrats", inputNum, "is the correct guess")

//}