let randomNumber1 = Math.floor(Math.random() * (7-1)) + 1;
// console.log(randomNumber1)
let randomDiceImage = "dice" + randomNumber1 + ".png";
//console.log(randomDiceImage)
let randomImageSource = "./images/" + randomDiceImage;
//console.log(randomImageSource)
let image1 = document.querySelectorAll("img")[0]
//console.log(image1)
image1.setAttribute("src",randomImageSource);

let randomNumber2 = Math.floor(Math.random() * (7-1)) + 1;

let randomDiceImage2 = "dice" + randomNumber2 + ".png";
//console.log(randomDiceImage2)
let randomImageSource2 = "./images/" + randomDiceImage2;

let image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2 );



if(randomNumber1 > randomNumber2 ){
    document.querySelector("h1").innerHTML = " 🇮😍 player 1 the win!"
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "🇮😍 player 2 the win!"

}
else{
    document.querySelector("h1").innerHTML = "the game is drow 😱"
}
