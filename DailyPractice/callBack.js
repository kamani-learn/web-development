

// function a(b){
//     console.dir(b)
//     b()
// }
// a("hiii")
// a({username:'ram',userage:25})
// a([2,3,4,5,6])

// console.dir(a)
// a.age = 23
// a.name = 'ram'

// function greet(){
//     console.log('hello how are you')
// }

// a(greet)





// setTimeout and setInterval

// const timer1 = setTimeout(`console.log("hi")`,2000)
// const timer2 = setTimeout(`console.log("hello")`,3000)
// const timer3 = setTimeout(a,4000,'ejfj',45,56,[2,4,5])

//clearTimeout(timer1)

// function a(){
//     console.log(arguments)
//     console.log("hi how are you i am fine");
// }

// setInterval

// const timer1 = setTimeout(`console.log("hi")`,2000)
// const timer2 = setInterval(`console.log("hello")`,1000)
//const timer3 = setInterval(a,1000,'ejfj',45,56,[2,4,5])


// function a(){           // named function
//     // console.log(arguments)
//     console.log("hi how are you i am fine");
// }
// clearInterval(timer3)


// setTimeout(function() {      // anynomus function
//     console.log("hello")
// },1000)


// setTimeout(()=>{        // arrow function
//     console.log("hiiiiii")
// },2000)


// EVENT LOOP AND CALLBACK QUEUE

// console.log("hello")
// function greet(){
//     console.log("hello world")
// }

// for(let i = 0 ; i <= 5;i++){
//     console.log(i)
// }

// greet()

// setTimeout(greet,1000)
// setTimeout(function(){
//     console.log("i learn new thing each and every day")
// },3000)

// console.log("hello2")



// closer and higher order function
// const a = 4
// const b = 6

// function outer(){
//     function parent(){
//         const a = 4
//         const b = 6
//         function add(){
//            console.log(a + b)
//         }
//         return add
//     }
//     return parent
// }

// const add1 = outer()
// console.dir(add1)




// Difference between Methods and Functions
// const Maths =  {
//     add:function (a,b){
//         return a + b
//     },
//     square:function (num){
//         return num * num
//     },
//     substract:function (c,d){
//         return c - d
//     },
//     cube(f){
//         return f * f * f
//     }
// }
// console.log(Maths)
