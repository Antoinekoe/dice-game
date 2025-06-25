var image = [
  "dice1.png",
  "dice2.png",
  "dice3.png",
  "dice4.png",
  "dice5.png",
  "dice6.png",
];

var num = Math.floor(Math.random() * image.length);
var num2 = Math.floor(Math.random() * image.length);
document.querySelector("img.image1").src = "./img/" + image[num];
document.querySelector("img.image2").src = "./img/" + image[num2];

if (num > num2) {
  document.querySelector("h1").innerHTML = "Le joueur 1 gagne !";
} else if (num2 > num) {
  document.querySelector("h1").innerHTML = "Le joueur 2 gagne !";
} else {
  document.querySelector("h1").innerHTML = "Égalité !";
}
