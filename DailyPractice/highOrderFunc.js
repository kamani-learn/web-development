
// 1. q
// const num = [2,3,4,5,6]
// const double = num.map(function(el){
//     return (el*2)
// })
// console.log(double)

// // 2.q
// const array = ['gentalman','superhero','spiderman','thor','shaktiman']
// const length = array.filter((char)=>{
//      console.log(char.length)
//      return char.length >= 5
// })
// console.log(length)
// // 3.q
// const nums = [3,4,5,6]
// const sum = nums.reduce((accumlator,current) =>{
//     // console.log(accumlator,current)
//     return accumlator + current
// },0)
// console.log(sum)
// // 4.q
// const number = [6,7,8,9,10]
// const square = number.map(function(num){
//     console.log(num)
//     return num * num
//  }).filter(function(num){
//     return num > 50
// })
// console.log(square)
    

// 5.q

// const product = [
//     {
//         price:25,
//         quantity:2
//     },
//     {
//         price:20,
//         quantity:6
//     },
//     {
//         price:10,
//         quantity:5
//     },
//     {
//         price:5,
//         quantity:2
//     }
// ]
// const total = product.reduce((accmulator,current) =>{
//     // console.log(accmulator)
//     return accmulator + (current.price * current.quantity)
// },0)
// console.log(total)

// 6.q

// const students = [
//     {
//         name:'amir',
//         marks:90
//     },
//     {
//         name:'akash',
//         marks:80
//     },
//     {
//         name:'raman',
//         marks:55
//     },
//     {
//         name:'adersh',
//         marks:60
//     },
//     {
//         name:'kamani',
//         marks:85
//     },
//     {
//         name:'nidhi',
//         marks:45
//     },
//     {
//         name:'sony',
//         marks:95
//     },
// ]

// const filterMarks = students.filter((student) =>{
//     return (student.marks > 60)
// })
// console.log(filterMarks)

// calculate average

// const total = students.reduce((accumlator,current) =>{
   
//     return (accumlator + current.marks)    
// },0)
// let average = total / students.length
// console.log(average)
// console.log(total)

// 7.q

// let array = ['mam','abcba','ram','hello']
// array.map((arr)=>{
//     let reverseStr = (arr.split('').reverse().join(''))
//     if(arr === reverseStr){
//         console.log(`${arr} is palindrome`)
//     }else{
//         console.log(`${arr} is not palindrome`)
//     }
   
// })

// 8.q

// let array1 = [2,34,56,78]
// let maxvalue = array1.reduce((accumlator,arr) =>{
//     let max = []
//     if (accumlator < arr){
//         max.push(arr)
//     }
//     return max
// },0)
// console.log(maxvalue)




//  SOME AN EVERY METHOD IN ARRAY
// SOME METHOD  = if one condition is true than given result is true
  
// const evenNumber = [2,4,6,8,10,12,7]
// const result = evenNumber.some((num,i) =>{
//     if(num % 2 === 1){
//         console.log(`index ${i} : ${num}`)
//     }
//     return num % 2 === 1
// })
// console.log(result)

//every method = if all condition is true than given result is true other wise false

const evenNumber = [2,4,6,8,10,12]
const result = evenNumber.every((num) =>{
    // if(num % 2 === ){
    //     console.log(`index ${i} : ${num}`)
    // }
    return num % 2 === 0
})
console.log(result)