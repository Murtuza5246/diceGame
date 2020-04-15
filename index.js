

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var returningImage = "images/" + "dice" + randomNumber1 + ".png";

var randomNumber2 = Math.floor(Math.random() * 6)+1;
var returnImage1 =  "images/"+"dice" + randomNumber2 + ".png";


document.querySelectorAll(".img1")[0].setAttribute("src", returningImage);
document.querySelectorAll(".img2")[0].setAttribute("src", returnImage1);

function changingHtml() {
  if (randomNumber1 < randomNumber2){
  return "Player 2 Wins🚩";

} else if (randomNumber1 > randomNumber2) {
  return "🚩Player 1 wins";

}
else{
  return "🚩It's a draw🚩";
}
}
//
document.querySelectorAll("h1")[0].innerHTML = changingHtml();
