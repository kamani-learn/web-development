

let nameTag = document.querySelector(".name-tag")
let nameInput = document.querySelector(".name")

let ageTag = document.querySelector(".age-tag")
let ageInput = document.querySelector(".age")

// nameTag.innerText = localStorage.myname
// nameTag.innerText = localStorage.getItem('myname')

// nameInput.addEventListener('input',(e) =>{
//     // localStorage.myname = (e.target.value)
//     localStorage.setItem('myname',e.target.value)
//     nameTag.innerText = localStorage.getItem('myname')
// })


// // nameTag.innerText = localStorage.myname
// ageTag.innerText = localStorage.getItem('myage')

// ageInput.addEventListener('input',(e) =>{
//     // localStorage.myname = (e.target.value)
//     localStorage.setItem('myage',e.target.value)
//     ageTag.innerText = localStorage.getItem('myage')
// })


 /* WE CAN CONVERT OBJECT TO STRING WITH THE HELP OF JSON.stringify(OBJECT NAME)
  AND ALSO CAN CONVERT STRING TO OBJECT WITH THE HEPH OF JSON.parse(ALL STRING WRITE HERE)
  in local storage only store string form of data  if i want store any type of data in localstorage in then
  like object and many more then we have to convert into string */

// const mydata = {
//     name:'',
//     age:''
// }
  
const mydata = JSON.parse(localStorage.getItem('mydata')) || {}
    

nameInput.addEventListener('input',(e)=>{
    mydata.name = (e.target.value)
    localStorage.setItem('mydata',JSON.stringify(mydata))
})


ageInput.addEventListener('input',(e)=>{
    mydata.age = (e.target.value)
    localStorage.setItem('mydata',JSON.stringify(mydata))
})