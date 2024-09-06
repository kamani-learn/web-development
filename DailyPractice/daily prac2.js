
// console.log("array element ;" + arr);
// console.log("array element ;" + arr.length);

// function emptyArray(){
//     let arr = []
//     console.log("empty array element;" + arr)
//     console.log("empty array element;" + arr.length)

// }

// emptyArray()

// let n = 100
// for(let i = 0; i <=100;i++){
    
//     if(i%2===0){
//         console.log(i + " is even")
//     }else{
//         console.log(i + " is odd")
//     }
// }

// how to remove duplicate element in array

// let arr = [2,3,4,2,3,4,5,5,6]
// let newArr = arr.sort();
// let unique = [];
// // console.log(newArr)
// function removeDuplicate(newArr){
//     for(let i = 0; i < newArr.length;i++){
//         // console.log(newArr[i])
//         if(unique.indexOf(newArr[i]) === -1){
//             unique.push(newArr[i])
//         }
//     }return unique
// }
// console.log(removeDuplicate(newArr))



// let arr = [2,3,4,5,6,3]
// let newArr = arr.sort();
// let unique = [];
// // console.log(newArr)
// function removeDuplicate(newArr){
//     for(let i = 0; i < newArr.length;i++){
//         // console.log(newArr[i])
//         if(unique.indexOf(newArr[i]) === -1){
//             return true
//         }
        
//     }
//      return false
// }
// console.log(removeDuplicate(newArr))

// how to get first n element in given array

// let arr = [1,2,3,4,5,6]   // out put = [1,2,3]
// //console.log(arr.slice(0,3))
// let result = []
// let n = 3
// function firstNnum(arr){
//     for(let i = 0;i < arr.length;i++){
//        result.push(arr[i]) 

//     }
//   console.log(result)
// }
// firstNnum()

// how to find larget element in array
//let arr = [10,30,40,20,60,80,90,100,5]
// let newarray = arr.sort(function(a,b){return(b - a)})
// console.log(newarray[0])
// let max = arr[0]
// for(let i = 1;i<arr.length;i++){
//     if(arr[i] > max){
//        max = arr[i]
//     }
// }
// console.log(max)


// let arr = [10, 30, 40, 20, 60, 80, 90, 100];
// let max = arr[0];

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//     }
// }
// console.log(max);

// array question practics

// Count occurrences of all items in an array

//let array = [1,3,4,3,4,1,3,3,3,4]
// let counter = {}
// console.log(typeof counter)
// array.forEach(function(ele){
//     //console.log(ele)
//     if(counter[ele]){
//         counter[ele] += 1
//     }else{
//         counter[ele] = 1
//     }
    
// })

// console.log(counter)



// how to convert array to object

// let arr = [1, 2, 3, 4];
// let obj = Object.assign({},arr)
// console.log(JSON.stringify(obj))


// compare two array 
let a = [1, 2, 3, 4];
let b = [1, 2, 3, 4,7];
function isEqual(a,b){
    return a.join() == b.join();
}
console.log(isEqual(a,b))




// ARMSTRONG NUMBER 
// let num = parseInt(prompt("enter the any number ;" ))
// let  rem;
// sum = 0;
// let number = num

// while(num > 0){
//     rem = num % 10
//     sum = sum + (rem*rem*rem*rem)
//     num = parseInt(num / 10)

// }
// console.log(sum)
// if(sum === number){
//     console.log("yes this is armstrong number " + sum) 
// }else{
//     console.log("this not armstring number " + sum)
// }



// chake given string is catalan number is or not

// function catalan(n){
//     for(let i = 0; i <= n; i++){
//         console.log(i)
//     }
// }
// catalan(4)


// chack given number is prime or not

// let number  = parseInt(prompt("enter the any number;"));
// let isPrime = true;
// if(number === 1){
//     console.log("1 is not prime and not composite ")
// }

// else if(number > 1){
//     for(let i = 2;i < number; i++){
//         if(number % i === 0){
//             console.log (`${number} is not prime number`)
//             isPrime = false;
//             break
//         }
//     }
//     if(isPrime){
//         console.log(`${number} is prime number`)
//     }
// }



// count alphabat and number in given string

//let str = "adjsk0178jfj"   // output = 6
// let countAphabat = 0
// let countNumber = 0
// for(let i = 0; i <str.length ;i++){
//     let res = str[i].toLowerCase()
//     if(res >= 'a' && res <= 'z'){
//       countAphabat ++
//     }else if(res >=0 && res <=9){
//       countNumber++ 
//     }
// }
// console.log(countAphabat)
// console.log(countNumber)


// string reverse in its place

// let str = "This is GeeksForGeeks";
// for(let i = str.length;i>=0;i--){
//      console.log(str[i])
// }


//  find the Index of the First Occurrence of a Substring in a String

// const String = "This is a sample string";
// const targetStr = "string"
// console.log(String.indexOf(targetStr))


// Extract a Number from a String 

// let str = "jhkj7682834";
// let num = ''
// for(let i = 0;i < str.length;i++){
//     // console.log(str[i])
//     if(str[i] >= 0 && str[i] <= 9){
//        num += str[i]
//     }

// }
// console.log(typeof parseInt(num))




// OTP GENERATER FUNCTION

// let random = Math.floor(Math.random() * 9000 + 1000)
// console.log(random) 

// let otp = ''
// function getOtp(){
//     otp = Math.floor(Math.random() * 9000 + 1000)
//     return otp
// }
// getOtp()