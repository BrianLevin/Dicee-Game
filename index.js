var randomNumber1 = Math.floor(Math.random() * 6) + 1;


var randomDiceImage =  "dice" + randomNumber1 +  ".png";

var randomDiceImage= "dice" + randomNumber1 + ".png";

var randomImageSource =  "images/ " + randomDiceImage;


var image1 = document.querySelectorAll('img')[0];

image1.asetAtrribute("src", randomImageSource);

var randomNumner2 =  Math.floor (Math.random() * 6) +1;

var randomImageSource2 = "images/dice" +  randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
