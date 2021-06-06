
var randomNumber1 = Math.floor(Math.random() * 6) + 1; // mult random number between 1-5

var randomDiceImage = "dice" + randomNumber1 + ".png"; //get dice1.png - dice6.png through the images

var randomImageSource = "images/" + randomDiceImage; // change the source or the link to get the random dice image

var image1 = document.querySelectorAll("img")[0];  // select element start off with the first one

image1.setAttribute("src", randomImageSource); // select the source and then change it to randomimage source to change dice image


var randomNumber2 = Math.floor(Math.random() * 6) + 1; //random number

var randomImageSource2 = "images/dice" + randomNumber2 + ".png"; //get random source

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);  //get second image and change the attribute


//If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!"; // change innter html  on page depending on condition
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}


