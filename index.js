function rollDice() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6
  var randomNumber2 = Math.floor(Math.random() * 6) + 1; // 1-6

  var randomImageSource1 = "images/dice" + randomNumber1 + ".png";
  var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

  var image1 = document.querySelector(".img1");
  var image2 = document.querySelector(".img2");

  image1.setAttribute("src", randomImageSource1);
  image2.setAttribute("src", randomImageSource2);

  if (randomNumber1 > randomNumber2) {
    document.getElementById("result").innerHTML = "🚩 Player 1 Wins!";
  } else if (randomNumber2 > randomNumber1) {
    document.getElementById("result").innerHTML = "Player 2 Wins! 🚩";
  } else {
    document.getElementById("result").innerHTML = "Draw!";
  }
}

document.getElementById("refreshButton").addEventListener("click", rollDice);
