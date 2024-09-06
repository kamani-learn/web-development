//OBJECT
// let user = {
//     name:"ram",
//     'last-name':'shrma',
//     age :23,
//     student:'12th',
//     address: {
//         city:'mumbia',
//         pinCode:234556,
//         house:'ramhouse'
//     }

// }
// console.log(user)

// let userInput2 = {
//     name:"ram",
//     'last-name':'shrma',
//     age :23,
//     student:'12th',
    

// }

// let userInput3 = userInput2
// userInput3.name = 'rohan'
// console.log(userInput3)
// console.log(userInput2)

// let x = 'rohan'
// let y = x
// y = 'ram'
// console.log(y)

//Shallow copy = in this method 
//deep copy = 



// HOW TO CODE EXCUTION PHASE

//1. MEMORY CREATION PHASE
//2.CODE EXCUTION PHASE

// CALL STACK BASCIC EXPLANATION

// saySomething()
// const username = 'kamani'
// const age = 25
// console.log(username)

// function saySomething(){
//     let a = 3
//     let b = 5
//     //console.log(a,b)
//     add(8,9)
// }
// function add(x,y){
    
//     let z = x + y
//     console.log(z)
//     substract(17,12)
// }

// function substract(m,n){
//     let q = m - n
//     return q
// }



// CALL STACK



// function add(a,b){
//     let c = a + b
//     console.log(c)
    
// }
// function substract(d,e){
//     let f = d - e
//     console.log(f)
//     add(33,75)
// }
// function miltiply(g,h){
//     let i = g * h
//     console.log(i)
//     substract(17,3)
// }
// function divide(j,k){
//     let l = j/k
//     console.log(l)
//     miltiply(23,45)
// }
// divide(25,12)


// HOSTING  variable 
// debugger
// console.log(a)
// var  a = 4    // output ; undefined

// console.log(a)
// let   a = 4 
// const   a = 4   // output ; error



//  HOSTING FUNCTION



// function declaration
// function defenition
// greet()
 
// function greet(){        //  easly host function
//     console.log("hello")
// }




// FUNCTION  expression
// function defention
// greet()

// var greet = function(){        // give error
//         console.log("hello");  // anonymous function
// }
  

// IIFE(mmediately Invoked Function Expressions)
// WATCH LEATER



// Global Scope vs Local Scope

/* =>when we creat variable using const and let  all variable 
store in script scope .
=>if use var keyword and function keyword for function they 
store in window object .
=>and all variable and function store in global scope */



// const username = 'rohan'
// let userag = 25
// var a = 50

// function add(){
//     const x = 5
//     const y = 8
//     console.log(x + y)
//     console.log(username)
// }
// add()

//  Lexical and Block Scope
// const username = 'rohan'
// let userag = 25
// var a = 50

// function parent(){
//     const x = 5
//     const y = 8
//     console.log(x + y)
//     console.log(username)
//     function child(){
//         let childName = 'sonu'
//         console.log(childName)
//         console.log(userag)

//         function grandChild(){
//             let grandChildName = 'sonu raj'
//             console.log(grandChildName)
//             console.log(x)
//         }
//         grandChild() 
//     }
//     child()
// }
// parent()





// FOR IN LOOP on object 
// const object = {
//     firstName:"shanti",
//     lastName:"devi",
//     age:45
// }
// for(const key in object){
//     console.log(object[key])
// }

// 2nd method    using for of loop(this is use for array)


//const objectKeys  =  Object.keys(object)

// for(let a of objectKeys){
//     console.log(object[a])
// }

// const objectValues = Object.values(object)
// console.log(objectValues)
// const objectEntries = Object.entries(object)
// console.log(objectEntries)


// FOR EACH METHOD = return value is undefined (LOOP ON ARRAY)

// const array = ['apple','litchi','banana','mango','pomegrant']
// array.forEach(function(fruit) {
//     console.log(fruit)
// })


// ARROW FUNCTION

// const array = ['apple','litchi','banana','mango','pomegrant']
// array.forEach((fruit) =>{
//     console.log(fruit)
// })




// for each practics

// with anonymous function  1. first way
// let num = [23,45,67]
// let sum = 1
// num.forEach(function(el){
//     // console.log(el)
//     sum += el
// })
// console.log(sum)
 
// arrow function using  2. second way

// num.forEach((el) =>{
//     console.log(el)
//     sum *= el
// })
// console.log(sum)


// 3. third way
// let num = [23,45,67]
// num.forEach(myFunction)
// function myFunction(item,index,arr) {
//     arr[index] = item * 10
//     console.log(arr[index])
// }



// MAP FUNCTION = RETURN  value is  new array
// it take 3 argument (currentvalue,index,array)
// it not change in original array


// const months = ['january','february','march','april']
// const allMonth = months.map((month,index,array) =>{
//     console.log(index,month,array)
//     return month

// })
// console.log(allMonth)


// filter method = 

// const months = ['january','february','March','april','May','june','december']
// const allMonth = months.filter((month) =>{
//     //console.log(month.length <=5)
//     // return month.length <=7
//     // return month.toLocaleUpperCase().includes('M')
//     return month.toLocaleUpperCase().includes('A')

// })
// console.log(allMonth)
// // console.log(months)


// const student = [
//     {
//         name:'akash',
//         age:23
//     },
//     {
//         name:'aadrsh',
//         age:25
//     },
//     {
//         name:'amir',
//         age:12
//     },
//     {
//         name:'ashok',
//         age:18
//     },
//     {
//         name:'nidhi',
//         age:16
//     },
//     {
//         name:'neha',
//         age:20
//     },
//     {
//         name:'sony',
//         age:19
//     },
// ]
// const matureStudent = student.filter((detail) =>{
//     // console.log(detail.age >=18)
//     return detail.age >= 18
// }).map((student) =>{
//     return student.name
// }).filter((student) =>{
//     return student.includes('k')
// })
//  console.log(matureStudent)
// console.log(student)


// reduce method
const nums = [1,2,3,4,5,]

const sum = nums.reduce((accumlator,current,i) =>{

    console.log(accumlator)
    return accumlator * current
})
 console.log(sum)
