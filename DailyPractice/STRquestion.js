// STRING QUESTION PRACTICE EASY LEVEL

// Q.1  Reverse a String in JavaScript

//  let str = 'GeeksforGeeks'
//  let result = ''
//  for(let i = str.length-1;i >=0;i--){
//     result += str[i] 
//  }
//  console.log(result)

 // q.2 Remove a Character From String
 
//let str= "GeeksforGeeks"
//console.log(str.replace('G',''))
//console.log(str.split('G').join(''))

//  q.3 Check if a String Contains only Alphabetic Characters

// let string = 'HelloWorld'  // in this string we can not add space beacuse regx [/^[a-z]+$/i;] have not space
// let string2 = 'hello123'
// let regx = /^[a-z]+$/i;   // space with regular expression = /^[a-z\s]+$/i; [str = Hello World]
// console.log(regx.test(string2))

// Q.4 first charcter of string convert in capital latter 

//let string = 'geeksforgeeks'
//console.log(string[0].toUpperCase() + string.slice(1))
//console.log(string.replace('g','G'))


// string convert into array

// let originalString = "One, Two, Three, Four, Five"; 
// console.log(originalString.split(' '))

// ternary operator

// let number = 5<2 ? 'ram' : 'sita'
// console.log(number)


//HOW TO REMOVE ALL MIDDLE SPACE IN STRING

let str = "   Welcome    to   Geeks    for   Geeks   ";
console.log(str.trim().split(/[\s,\t,\n]+/).join())