// let year = prompt("enter the year ;")
// if(year % 100 == 0){
//     if(year % 400 == 0){
//         console.log("leap year")
//     }else{
//         console.log("not leap year")
//     }
    
// }
// else{
//     if(year % 4 == 0){
//         console.log("leap year")
//     }else{
//         console.log("not a leap year")
//     }
// }

// let guesslist = ["ram","shyam","sita","235"]
// let guessname = prompt("what is ypur name ;")
// if( guesslist.includes(guessname)){
//     alert("welcome");
// }else{
//     alert("sorry")
// }


// let output = [];
// let count = 1
// function fizzbuzz(){
//     while(count <= 100){
        
    
// if(count % 3===0 && count % 5 === 0){
//     output.push("fizzbuzz")
// }
// else if(count % 3===0){
//     output.push("fizz")
// }
// else if(count % 5 === 0){
//      output.push("buzz")
// }
// else{
//     output.push(count)
// }


// count++;
//     }
//      console.log(output)
// }

// let output = [];
// let count = 1

// function fizzbuzz(){
//     while(count <=100){
//         if(count % 3 === 0 && count % 5 === 0){
//             output.push("fizzbuzz")
//         }
//         else if(count % 3 === 0){
//             output.push("fizz")
//         }
//         else if(count % 5 === 0){
//             output.push("buzz")
//         }
//         else{
//             output.push(count)
//         }
//         //output.push(count)
//         count++
//     }
//     // output.push(count)
//     //count++
//     console.log(output)
// }
// fizzbuzz();

// let num = 99;

//     while(num >= 1){
//         console.log(num)
//         num--;
//     }



// let numOfbottles = 99;
// while(numOfbottles >= 0){
//     let bottleWord = "bottel"
//     if(numOfbottles === 1){
//         //bottleWord = "bottel"
//         console.log(numOfbottles + " " + bottleWord + " of beer on the wall.")
//     }
//     numOfbottles--;
//     console.log(numOfbottles + " " + bottleWord + " of beer on the wall.")
// }
// //console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.")

//let output = [];
//let count = 1

// function fizzbuzz(){
    
//     let output = [];
//     for(let count = 1;count < 101;count++){
//         if(count % 3 === 0 && count % 5 === 0){
//             output.push("fizzbuzz")
//         }
//         else if(count % 3 === 0){
//             output.push("fizz")
//         }
//         else if(count % 5 === 0){
//             output.push("buzz")
//         }
//         else{
//             output.push(count)
//         }
//         //output.push(count)
//         //count++
//     }
//     // output.push(count)
//     //count++
//     console.log(output)
// }
// fizzbuzz();



// print fibnncci series

// function fibn(n){
//     let a = -1;
//     let b = 1;
//     let sum;
//     let arr = [];
    
//     for(let i = 1;i<=n;i++){
//         sum = a+ b;
//         arr.push(sum)
//         //console.log(sum)
//         a = b;
//         b = sum;
        
//     }
//     return arr
// }
// console.log(fibn(11))


// let arr1 = "ramayan"
// let arr2 = [2,3,4,5,6,8]
// console.log(typeof arr1)
// console.log(typeof arr2)



// OBJECT 
// let object = {
//     name:"sunita",
//     age:23,
//     workOfExprience:12,
//     profession:["cleaning","housework","honesty"]
// }
// console.log(typeof object["name"])
// console.log(object["age"])
// console.log(object["workOfExprience"])
// console.log(typeof object["profession"])


// constructor function

// function Employ (fullName,age,workOfExprience,profession) {
//     this.fullName = fullName,
//     this.age = age,
//     this.workOfExprience = workOfExprience,
//     this.profession = profession
// }
//let employ = new Employ("snita",23,12,["cleaning","house","honesty"])
// let employ1 = new Employ("rani",22,6,["cleaning","house","bathroom"])
// let employ2 = new Employ("babli",20,7,["cleaning","house","bedroom"])

//employ.nationality = "indian"    // add new property in employ


//console.log( employ)
// console.log( employ1)
// console.log( employ2)


// object and method and dot notation

function Employ (name,age,workOfExprience,profession) {
    this.name = name,
    this.age = age,
    this.workOfExprience = workOfExprience,
    this.profession = profession
    this.clean = function(){
        alert("cleaning is progress....")
    }
}

let employ4 = new Employ("rani",12,4,"household")
console.log(employ4.clean());



