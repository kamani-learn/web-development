

let randomNumber = parseInt(Math.random() * 100 + 1)

const userInput = document.querySelector("#guessfiled");
//console.log(userInput)
const submit = document.querySelector("#subt");
//console.log(submit)
const guessSlot = document.querySelector(".guesses");
//console.log(guessSlot)
const remaining= document.querySelector(".lastresult");
//console.log(remaining)
const lowOrhi = document.querySelector(".lowOrhi");
//console.log(lowOrhi)
const sartOver = document.querySelector(".resultparas");
//console.log(sartOver)
const p = document.createElement('p')
let prevGuess = [];

let numGuess = 1;
let playGame = true;


if(playGame){
   submit.addEventListener('click',function(e){
    e.preventDefault()
    const guess = parseInt(userInput.value)
    console.log(guess)
    validateGuess(guess)

   })
}
function validateGuess(guess){
    if(isNaN(guess)){
        alert("plz enter the valid number")
    }else if(guess < 1){
        alert("plz enter the number more than one")
    }else if(guess > 100){
        alert("plz enter the number less than 100")
    }else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMassage(`Game Over.Random number was ${randomNumber}`)
            endGame()
        } else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMassage(`congratulations!👏 you guess right`)
        endGame()
    } else if(guess < randomNumber){
        displayMassage(`your guess is too low`)
    }else if(guess > randomNumber){
        displayMassage(`your guess is too high`)
    }

}

function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += ` ${guess} `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`


}

function displayMassage(massage){
    lowOrhi.innerHTML = `<h2>${massage}</h2>`

}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new game</h2>`
    sartOver.appendChild(p)
    playGame = false
    newGame()

}

function newGame(){
    const newGameButton = document.querySelector("#newGame");
    newGameButton.addEventListener('click',function(e){
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11-numGuess } `;
        userInput.removeAttribute('disabled');
        sartOver.removeChild(p);

        playGame = true;
    })
}