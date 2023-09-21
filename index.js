function getRandomFunction(){
    let randomNumber = Math.floor(Math.random()*13)+1;
    // return result;
    if (randomNumber>10){
        return 10;
    }
    else if(randomNumber === 1){
        return 11;
    }
    else{
        return randomNumber;
    }
}
let firstCard = getRandomFunction();
let secondCard = getRandomFunction();

let sum = firstCard + secondCard;
let cards = [firstCard,secondCard];
let aLive = true;
let hasBlackjack = true;

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.querySelector("#card-el");

// let playerName = "Avk";
// let playerChips = 145;
let player = {
    name : "Avk",
    chips : 199
}
// . is the object
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": ₹ " + player.chips;




function startgame(){
     renderGame();
}

function renderGame() {
        if(sum<21){
        message = "Do you want to draw a new card?";
        }
        else if(sum === 21){
            message = "You 've got the blackjack";
            hasBlackjack = false;
        }
        else {
            message = "you 're out  the game";
            aLive = false;
        }

    cardEl.textContent =  "Cards :";
    for (let i = 0;i<cards.length;i++){
    cardEl.textContent +=  cards[i] + " ";}
  
    messageEl.textContent = message;
    sumEl.textContent = sum;
}
function newgame(){
    if(hasBlackjack === true && aLive === true){
    let newCard = getRandomFunction();
    sum += newCard;
    cards.push(newCard);
    startgame();}

}


/// introduction to the arrays 

// let array = [ "Karuppusamy",23,true];
// console.log(array[2]);
 
// let arr = [7,5];

// arr.push(2);
// console.log(arr);

// arr.pop();
// console.log(arr);


// loops
// let count;
// for(let count = 10; count<=100; count+=10){
//     console.log(count);
// }
// let a = ["hi",12,true,"karuppusamy","self"];

// for(let i = 0; i<a.length ;i++){
//     console.log(a[i]);
// }

// introdution to the function with the return value 

// let one = 102;
// let two = 103;

// function win() {
//     if(one>two){
//         return one;
//     }
//     else{
//         return two;
//     }
// }
// let result = win()
// console.log(result);

// math.random for generating the random number in the renage of the 0 to 0.9999 by the mutiplication of some intergers it can be converted 

// let rValue = Math.random() * 10; 
// console.log(rValue);

// let floored = Math.floor(Math.random() * 6)+1;
// //removes the decimals // +1 give inorder to change the range from 0 to 6 to  1 to 6
// //*  6 is the range upto 6 max


// console.log(floored);

// function rollDice(){
//     let result = Math.floor(Math.random() * 6)+1;
//     return result;
// }
// console.log(rollDice());

// bool data types in the js 

let prob = false;
let code = false;

if(prob === false  && code === false){
    showSolution();
}
function showSolution(){
    console.log("solution");
}

//introduction to the objects
// object are the complex or composite datatype 
// let myInfo = {
//     name : "karuppusamy",
//     age : 55,
//     department : "ECE",
//     gender : "male",
// }
// console.log(myInfo.name);
// console.log(myInfo.age);










