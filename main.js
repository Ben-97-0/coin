// COIN FLIP SIMULATOR
let outputEl = document.getElementById("output");
let headEl = document.getElementById("heads");
let tailEl = document.getElementById("tails");
let diceImg = document.getElementById("dice");
let numHead = 0;
let numTail = 0;
let num1 = 0;
let num2 = 0;
let num3 = 0;
let num4 = 0;
let num5 = 0;
let num6 = 0;

//Button listner
document.getElementById("btn").addEventListener("click", btnclicked);

function btnclicked() {
  //Generate a random number
  let x = Math.random();

  if (x < 0.5) {
    outputEl.innerHTML = "<img src ='img/heads.png'/>";
    numHead++;
    headEl.innerHTML = numHead;
  } else {
    outputEl.innerHTML = "<img src ='img/tails.png'/>";
    numTail++;
    tailEl.innerHTML = numTail;
  }
}
document.getElementById("diceBtn").addEventListener("click", clickedDice);

function clickedDice() {
  let randDice = Math.random() * 6;
  console.log(randDice);
  if (randDice <= 1) {
    diceImg.innerHTML = "<img src= 'img/1.png'/>";
    num1++;
    document.getElementById("1").innerHTML = num1;
  } else if (randDice <= 2) {
    diceImg.innerHTML = "<img src='img/2.png'/>";
    num2++;
    document.getElementById("2").innerHTML = num2;
  } else if (randDice <= 3) {
    diceImg.innerHTML = "<img src='img/3.png'/>";
    num3++;
    document.getElementById("3").innerHTML = num3;
  } else if (randDice <= 4) {
    diceImg.innerHTML = "<img src='img/4.png'/>";
    num4++;
    document.getElementById("4").innerHTML = num4;
  } else if (randDice <= 5) {
    diceImg.innerHTML = "<img src='img/5.png'/>";
    num5++;
    document.getElementById("5").innerHTML = num5;
  } else {
    diceImg.innerHTML = "<img src='img/6.png'/>";
    num6++;
    document.getElementById("6").innerHTML = num6;
  }
}
