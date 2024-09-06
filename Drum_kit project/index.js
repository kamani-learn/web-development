
for(let i = 0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        let buttonHtml = this.innerHTML

        switch(buttonHtml) {
            case "w":
                let tom4  = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;
            case "a":
                let tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
            case "s" :
                let tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
            case "d" :
                let tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
            case "j" :
                let snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;
            case "k" :
                let kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
                break;
            case "l" :
                let crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;
            default:
              console.log(buttonHtml);
          }
    });
}


document.addEventListener("keypress",function(event){
    console.log(event)
    //alert("key was pressed")
});

// in this code using arro function


// let btn = document.querySelectorAll(".drum")
// for(let i = 0;i < btn.length;i++){
//     document.querySelectorAll("button")[i].addEventListener("click",()=>{
        
//         let buttonHtml = btn[i].innerHTML;
//             // console.log(buttonHtml)
//         switch(buttonHtml) {
//             case "w":
//                 let tom4  = new Audio("sounds/tom-4.mp3");
//                 tom4.play();
//                 break;
//             case "a":
//                 let tom3 = new Audio("sounds/tom-3.mp3");
//                 tom3.play();
//                 break;
//             case "s" :
//                 let tom2 = new Audio("sounds/tom-2.mp3");
//                 tom2.play();
//                 break;
//             case "d" :
//                 let tom1 = new Audio("sounds/tom-1.mp3");
//                 tom1.play();
//                 break;
//             case "j" :
//                    let snare = new Audio("sounds/snare.mp3");
//                 snare.play();
//                 break;
//             case "k" :
//                 let kick = new Audio("sounds/kick-bass.mp3");
//                 kick.play();
//                 break;
//             case "l" :
//                 let crash = new Audio("sounds/crash.mp3");
//                 crash.play();
//                 break;
//             default:
//               console.log(buttonHtml);
//           }

//     })
// }




















































// function add(num1,num2){
//     return num1 + num2
// }
// function substr(num1,num2){
//     return num1 - num2
// }
// function multiply(num1,num2){
//     return num1 * num2
// }
// function divide(num1,num2){
//     let div = num1/num2
//     console.log()
// }
// function calculator(num1,num2,operator){
//     console.log(8,5,divide)
    

// console.log(calculator(8,5,add));
// console.log(calculator(8,5,substr));
// console.log(calculator(8,5,multiply));
// console.log(calculator(8,5,divide));





