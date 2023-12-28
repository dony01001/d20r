

$(".img1").on("click", function () {
    
    animationDice(); 
    setTimeout(function () {
        diceNumber();
        
    }, 400); // Retraso 
    
})


function diceNumber() {
    var randomNumber1 = Math.floor(Math.random() * 20) + 1;
    var randomDiceImage = "img" + randomNumber1 + "Purple.png";
    var randomeImageSource = "images/" + randomDiceImage;

    $(".img1").delay(500).attr("src", randomeImageSource);
    $("h1").HTML = "You got a " + randomNumber1 + " !";

}

function animationDice() {
   
      $(".img1").fadeOut().delay(30).fadeIn(); 
}
