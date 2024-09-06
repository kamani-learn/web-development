const chackBoxList = document.querySelectorAll(".custom-chakebox")
const inputFields = document.querySelectorAll(".goal-input")
//  console.log(inputFields)
const errorLabel = document.querySelector(".error-label")
// console.log(errorLabel)
// const progressBar = document.querySelector(".progress-bar")
// console.log(progressBar)
const progressValue = document.querySelector(".progress-value")
console.log(progressValue)



const allGoals = {}


chackBoxList.forEach((checkbox) =>{
    // console.log(checkbox)
    checkbox.addEventListener('click',(e) =>{
        const allGoalAdded = [...inputFields].every(function(input){
            return input.value
        })
        if(allGoalAdded){
            checkbox.parentElement.classList.toggle('completed')
            //progressValue.style.width = 33.33%
        }else{
            errorLabel.style.display = 'block'
        }
        
    })
})

inputFields.forEach((input) =>{
    input.addEventListener('focus',()=>{
        errorLabel.style.display = 'none'
    })

   input.addEventListener('input',(e) =>{
       allGoals[input.id] = 'hello'
       console.log(allGoals)
   }) 
})
 


