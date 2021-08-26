"use stict";
// let winner = "computer";
const computerChoiceDisplay = document.getElementById("player2");
const userChoiceDispaly = document.getElementById("player1");
const resultDisplay = ["rock", "paper", "scissors"];
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;
// possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", () =>{
//     e.target.className
// }))
// userChoiceDispaly
window.addEventListener("DOMContentLoaded", getPlayerChoice);

function generateComputerChoice() {
  document.querySelector("#player2").classList.add("shake");
  const randomNumber = Math.floor(Math.random() * possibleChoices.length);
  console.log(randomNumber);
  if (randomNumber === 0) {
    computerChoice = "rock";
    console.log("rock");
    // document.querySelector("#player2").classList.add("shake")
    document.querySelector("#player2").classList.remove("paper");
    document.querySelector("#player2").classList.remove("scissors");
    document.querySelector("#player2").classList.add("rock");
    computerGetsRock();
  }
  if (randomNumber === 1) {
    computerChoice = "paper";
    console.log("paper");
    // document.querySelector("#player2").classList.add("shake")

    document.querySelector("#player2").classList.remove("rock");
    document.querySelector("#player2").classList.remove("scissors");
    document.querySelector("#player2").classList.add("paper");
    computerGetsPaper();
  }
  if (randomNumber === 2) {
    computerChoice = "scissors";
    console.log("scissors");
    // document.querySelector("#player2").classList.add("shake")

    document.querySelector("#player2").classList.remove("rock");
    document.querySelector("#player2").classList.remove("paper");
    document.querySelector("#player2").classList.add("scissors");
    computerGetsScissors();
  }
  // computerChoiceDisplay.innerHTML = computerChoice
}
// function start(){
// console.log("start");

// getPlayerChoice();
// }

function computerGetsRock() {
  document.querySelector("#player2").classList.add("shake");
  document.querySelector("#player2").addEventListener("animationend", computerShowRock);
}

function computerShowRock() {
  // document.querySelector("#player2").classList.remove("paper");
  // document.querySelector("#player2").classList.remove("scissors");
  document.querySelector("#player2").classList.remove("shake");
  // document.querySelector("#player2").classList.add("rock");
}

function computerGetsPaper() {
  document.querySelector("#player2").classList.add("shake");
  document.querySelector("#player2").addEventListener("animationend", computerShowPaper);
}
function computerShowPaper() {
  // document.querySelector("#player2").classList.add("paper");
  // document.querySelector("#player2").classList.remove("scissors");
  document.querySelector("#player2").classList.remove("shake");
  // document.querySelector("#player2").classList.remove("rock");
}
function computerGetsScissors() {
  document.querySelector("#player2").classList.add("shake");
  document.querySelector("#player2").addEventListener("animationend", computerShowScissors);
}
function computerShowScissors() {
  // document.querySelector("#player2").classList.remove("paper");
  // document.querySelector("#player2").classList.add("scissors");
  document.querySelector("#player2").classList.remove("shake");
  // document.querySelector("#player2").classList.remove("rock");
}

function getPlayerChoice() {
  // consoloe.log("getPlayerChoice");
  document.querySelector("button.rock").addEventListener("click", getRock);
  document.querySelector("button.paper").addEventListener("click", getPaper);
  document.querySelector("button.scissors").addEventListener("click", getScissors);
}

function getRock() {
  console.log("rock");
  document.querySelector("#player1").classList.add("shake");
  document.querySelector("#player1").addEventListener("animationend", showRock);
  document.querySelector("#win").classList.add("hidden");
  document.querySelector("#draw").classList.add("hidden");
  document.querySelector("#lose").classList.add("hidden");
  generateComputerChoice();
}

function showRock() {
  document.querySelector("#player1").classList.remove("paper");
  document.querySelector("#player1").classList.remove("scissors");
  document.querySelector("#player1").classList.remove("shake");
  document.querySelector("#player1").classList.add("rock");
  determineWinner();
}

function getPaper() {
  console.log("paper");
  document.querySelector("#player1").classList.add("shake");
  document.querySelector("#player1").addEventListener("animationend", showPaper);
  document.querySelector("#win").classList.add("hidden");
  document.querySelector("#draw").classList.add("hidden");
  document.querySelector("#lose").classList.add("hidden");
  generateComputerChoice();
}

function showPaper() {
  document.querySelector("#player1").classList.remove("rock");
  document.querySelector("#player1").classList.remove("scissors");
  document.querySelector("#player1").classList.remove("shake");
  document.querySelector("#player1").classList.add("paper");
  determineWinner();
}

function getScissors() {
  console.log("scissors");
  document.querySelector("#player1").classList.add("shake");
  document.querySelector("#player1").addEventListener("animationend", showScissors);
  document.querySelector("#win").classList.add("hidden");
  document.querySelector("#draw").classList.add("hidden");
  document.querySelector("#lose").classList.add("hidden");
  generateComputerChoice();
}

function showScissors() {
  document.querySelector("#player1").classList.remove("paper");
  document.querySelector("#player1").classList.remove("rock");
  document.querySelector("#player1").classList.remove("shake");
  document.querySelector("#player1").classList.add("scissors");
  determineWinner();
}

function determineWinner() {
  if (document.querySelector("#player2").classList.contains("rock") && document.querySelector("#player1").classList.contains("rock")) {
    showDraw();
  }

  if (document.querySelector("#player2").classList.contains("rock") && document.querySelector("#player1").classList.contains("paper")) {
    showWin();
  }
  if (document.querySelector("#player2").classList.contains("rock") && document.querySelector("#player1").classList.contains("scissors")) {
    showLose();
  }
  if (document.querySelector("#player2").classList.contains("paper") && document.querySelector("#player1").classList.contains("paper")) {
    showDraw();
  }
  if (document.querySelector("#player2").classList.contains("paper") && document.querySelector("#player1").classList.contains("rock")) {
    showLose();
  }
  if (document.querySelector("#player2").classList.contains("paper") && document.querySelector("#player1").classList.contains("scissors")) {
    showWin();
  }
  if (document.querySelector("#player2").classList.contains("scissors") && document.querySelector("#player1").classList.contains("scissors")) {
    showDraw();
  }
  if (document.querySelector("#player2").classList.contains("scissors") && document.querySelector("#player1").classList.contains("paper")) {
    showLose();
  }
  if (document.querySelector("#player2").classList.contains("scissors") && document.querySelector("#player1").classList.contains("rock")) {
    showWin();
  }
}
function showWin() {
  console.log("you win");
  document.querySelector("#lose").classList.add("hidden");
  document.querySelector("#draw").classList.add("hidden");
  document.querySelector("#win").classList.remove("hidden");
}

function showLose() {
  console.log("you lose");
  document.querySelector("#win").classList.add("hidden");
  document.querySelector("#draw").classList.add("hidden");
  document.querySelector("#lose").classList.remove("hidden");
}

function showDraw() {
  console.log("show draw");
  document.querySelector("#lose").classList.add("hidden");
  document.querySelector("#win").classList.add("hidden");
  document.querySelector("#draw").classList.remove("hidden");
}
// function shake() {
//     document.querySelector("#player2").classList.add("shake");
// }

// function makeRandomComputerChoice(){
//     console.log("makeRandomComputerChoice");
//     document.querySelector("#player2").classList.add("shake");
//     document.querySelector("#player2").addEventListener("animationend", showComputerPaper);

// }
// function showComputerPaper(){
//     document.querySelector("#player2").classList.remove("shake");
//     document.querySelector("#player2").classList.add("paper");

// }

// // function showAnimations(){
// //     console.log("showAnimations");
// //     determineWinner();
// // }

// // const computerOptions = ['rock','paper','scissors']
// // const winner = (player,computer);
// function determineWinner(){
//     console.log("determineWinner");
//     if (
//         document.querySelector("#player1").classList.contains("scissors") ||
//         document.querySelector("#player2").classList.contains("paper")){
//             showWinner();
//      }else {

//          showLoser();

// }
// }

// //         }else if (winner ==="user"){
// //             showWinner();
// //         }else{
// //             showDraw();
// //         }
// // }
// //     showWinner();

// // if(player === computer){
// //     showDraw();
// // }

// // else if(player == 'rock'){
// //     if(computer == 'paper'){
// //         showWinner();
// //     }else{
// //         showLoser();
// //     }
// // }else if(player == 'scissors'){
// //     if(computer == 'rock'){
// //         showLoser();}else{
// //             showWinner();
// //         }
// //     }
// //     else if(player == 'paper'){
// //         if(computer == 'scissors'){
// //             showLoser();
// //         }else{
// //             showWinner();
// //         }}

// function showWinner(){
//     console.log("showWinner");

//     document.querySelector("#lose").classList.add("hidden");
// document.querySelector("#win").classList.remove("hidden");
// document.querySelector("#player1").classList.remove("paper");
// document.querySelector("#player1").classList.remove("rock");
// document.querySelector("#player1").classList.remove("scissors");
// document.querySelector("#player2").classList.remove("paper");
// document.querySelector("#player2").classList.remove("rock");
// document.querySelector("#player2").classList.remove("scissors");

// }

// function showLoser(){
//     console.log("showLoser");
//     document.querySelector("#win").classList.add("hidden");
//     document.querySelector("#lose").classList.remove("hidden");
//     document.querySelector("#player1").classList.remove("paper");
// document.querySelector("#player1").classList.remove("rock");
// document.querySelector("#player1").classList.remove("scissors");
// document.querySelector("#player2").classList.remove("paper");
// document.querySelector("#player2").classList.remove("rock");
// document.querySelector("#player2").classList.remove("scissors");

// }

// function showDraw(){
//     console.log("showDraw");
//     document.querySelector("#win").classList.add("hidden");
//     document.querySelector("#lose").classList.add("hidden");
//     document.querySelector("#draw").classList.remove("hidden");
// }
