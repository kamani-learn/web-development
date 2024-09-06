
// spread oprator
// rest parameter in function
//  const nums1 = [1,2,3,4]
// function addNumbers(a,b,c){
//     console.log(nums)
//     let sum = 0
//     for(let i = 0;i< nums.length;i++){
//         sum = sum + nums
//     }
//     return (sum)
// }

// let result = addNumbers(...nums1)
// console.log(result)


function add(a,b,c,...others){
    let sumABC = a + b+c;
    let muitiply = 1
    for(let i= 0;i < others.length;i++ ){
       
        muitiply *= (others[i])
        
        
    }
    console.log(`sum of a + b + c = ${sumABC}`)
        
    console.log(`muitiply of others numbers = ${muitiply}`)
    return[a+b+c ,muitiply] 
    
}
const res = add(23,33,44,2,3,44,456,67,89,452)
//console.log(res)

// spread 
let names = ['ram','shyam','rohan','kamni']
 
function getNames(name1, name2, name3,name4){
    console.log(name1, name2, name3,name4)
}
//getNames(names[0],names[1],names[2])
getNames(...names)  // spread
//getNames(names)



// object ke sath REST kase kam kerta hai
let students = {
    name:"kamani",
    age:26,
    hobbies:["panting","dance","traviling","learn new alywas"]
}
// const age = students.age;

// this object destructuring
const {age,...rest} = students;
console.log(rest)

// spread object ke sath kase kam kerta hai

let newstudent={
    ...students,
    name:"anup"
}
console.log(newstudent)


// spread operator based question
// 1.question
// let arr1 = [1, 2, 3]
// let arr2 = [4, 5, 6]
// let newarray = [...arr1,...arr2]
// console.log(newarray)

// //2.q
// let original = ['a', 'b', 'c']
// let newArray = [...original,'d']
// console.log(newArray)
// console.log(original)

// //3.question

// let numbers = [5, 10, 15]
// function muitiply(a,b,c){
//     console.log(a*b*c)
// }
// muitiply(...numbers)

// 4.q

let obj1 = { name: 'Alice', age: 25 };
let obj2 = { city: 'New York', country: 'USA' };
let obj3 = {...obj1, ...obj2,}
console.log(obj3)

// 5.q
let fruits = ['apple', 'banana']
let fruit2 = [...fruits,"orange","grape"]
console.log(fruit2)
console.log(fruits)

// 6.q
let word = 'HELLO'
let array = [...word]
console.log(array)

// 7.q
arr1 = [1, 2];
arr2 = [3, 4];
arr3 = [5, 6];
let newarr = [...arr1,...arr2,...arr3 ,7]
console.log(newarr)

// 8.q
let numbers = [1, 2, 3, 4, 5]


// 9.q
let user = {name: 'John', age: 30}
let copyUser = {...user,email:"john@example.com"}
console.log(copyUser)

// 10.q
let car = { brand: 'Toyota', model: 'Camry', year: 2020}
let newCar = {...car,year:2021}
console.log(newCar)
console.log(car)

// 11.q
let arr = [2,3,4,5,6]
function combineArrays(){}
