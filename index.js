var selector1 = document.querySelector(".img1");

document.querySelector(".img1").addEventListener("click", function () {
    
    animationDice();
    diceNumber();
    console.log("click");
    
})


function diceNumber() {
    var randomNumber1 = Math.floor(Math.random() * 20) + 1;
    var randomDiceImage = "img" + randomNumber1 + "Purple.png";
    var randomeImageSource = "images/" + randomDiceImage;

    selector1.setAttribute("src", randomeImageSource);
    document.querySelector("h1").innerHTML = "You got a " + randomNumber1 + " !";

}

function animationDice() {
    selector1.classList.add("pressed");
    setTimeout(
        function(){
            selector1.classList.remove("pressed");
        },
        100
    )
}


