const buttons = document.querySelectorAll('span');
const body = document.querySelector('body');
// console.log(buttons)

buttons.forEach(function(button){
    //console.log(button);
    button.addEventListener("click",function(event){
      console.log(event)
      console.log(event.target)
      if(event.target.id === 'gray') {
          body.style.backgroundColor = 'gray'
      }
      if(event.target.id === 'white') {
        body.style.backgroundColor = 'white'
    }
    if(event.target.id === 'yellow') {
        body.style.backgroundColor = 'yellow'
    }
    if(event.target.id === 'blue') {
        body.style.backgroundColor = 'blue'
    }
    if(event.target.id === 'purple') {
        body.style.backgroundColor = 'purple'
    }
    if(event.target.id === 'green') {
        body.style.backgroundColor = 'green'
    }
    })
})