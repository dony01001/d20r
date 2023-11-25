var randomNumber1 = Math.floor(Math.random() * 20) + 1;
var selector1 = document.querySelectorAll("img")[0];
var randomDiceImage = "img" + randomNumber1 + "Purple.png";
var randomeImageSource = "images/" + randomDiceImage;

selector1.setAttribute("src", randomeImageSource);

document.querySelector("h1").innerHTML = "You got a " + randomNumber1 + " !";
