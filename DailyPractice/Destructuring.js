


// const colors = ['red','green','yellow','pink','black']

// const color1 = colors[0]
// const color2 = colors[1]
// const color3 = colors[2]
// console.log(color3)

//  destructuring of array
// const[color1,color2,color3] = colors
// console.log(color2)

// const {3:color4} = colors
// console.log(color4)   // output = pink

// const user = {
//     name:'kamani',
//     age:26,
//     address: {
//         city:'madhubani',
//         state:'bihar',
//     },
// }

// const name = user.name
// const age = user.age
// console.log(age)


// destructuring of object
//const {name,age,address} = user
//console.log(address.state)
// const {address:{city}} = user
// console.log(city)


// desturiching of function

const user = {
    name:'kamani',
    age:26,
    address: {
        city:'madhubani',
        state:'bihar',
    },
}
function intro({name,age}){

    console.log(name,age)
    
}
intro(user)

const colors = ['red','green','yellow','pink','black']
function colorsArray([a,b,,c]){
    console.log(a,b,c)
}
colorsArray(colors)