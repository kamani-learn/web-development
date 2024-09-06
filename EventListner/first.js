   // add event in hi tag event is onclick
    // function hello(){
    //     console.log("hi")
    // }

// this is 2nd way of adding event in h1 tag

//let h1 = document.querySelector("h1");

// function good(){
//     console.log("hi how are you")
// }
// h1.onclick = good

//3rd way to add event in h1 tag
// function hello(){
//     console.log("hello")
// }

// h1.addEventListener('click',hello)

// target add event on div

//et box= document.querySelector("div")
// function goodJob() {
//     console.log("hey ram")
// }
// box.addEventListener('click',goodJob)
// add by arrow function
// box.addEventListener('click',() =>{
//     console.log("kepp learn and keep studing")
// })

// crate a new div bi clicking div


let div = document.querySelectorAll('div')[1]
let container = document.querySelectorAll('div')[0]
console.log(container)
let count = 1
div.addEventListener('click',() =>{
    let newDiv = document.createElement('div')
    newDiv.classList.add('add_card')
    container.append(newDiv)
    newDiv.innerText = count
    count++
    console.log(newDiv)
})
