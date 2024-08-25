let randomNumber1 = Math.floor(Math.random() * (7 - 1)) + 1;
//console.log(randomNumber1)
let randomImage = "dice" + randomNumber1 + ".png";
//console.log(randomImage)
let randomImageSourse = "./images/" + randomImage;
//console.log(randomImageSourse)
let image1 = document.querySelectorAll("img")[0]
//console.log(image1)
image1.setAttribute("src",randomImageSourse);


// code for 2nd image
let randomNumber2 = Math.floor(Math.random() * (7 - 1)) + 1;
let randomImage2 = "dice" + randomNumber2 + ".png";
let randomImageSourse2 = "./images/" + randomImage2;
let image2 = document.querySelectorAll("img")[1];
//console.log(image2)
image2.setAttribute("src",randomImageSourse2);



if(randomNumber1 > randomNumber2 ){
    document.querySelector("h1").innerHTML = "🚩player 1 is win!"
    //console.log("player 1 is win!")
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "🚩player 2 is win!"
    //console.log("player 2 is win!")
}
else{
    document.querySelector("h1").innerHTML = "🤓the game is drow!"
    //console.log("game is drow")
}