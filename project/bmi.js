const form = document.querySelector('form')

form.addEventListener("submit",function(event){
    event.preventDefault();


    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const result = document.querySelector("#result");
    


    if( height <= 0 || isNaN(height)){
        result.innerHTML = `plz give a valid height ${height}`;
    }else if(  weight <= 0 || isNaN(weight)){
        result.innerHTML = `plz give a valid weight ${weight}`;
    }else{
        const bmi =(weight / ((height / 100) * (height / 100))).toFixed(2);
        // result.innerHTML = `your bmi is ${bmi}`
        if(bmi < 18.6){
            result.innerHTML = `your bmi is ${bmi} and you are under weight`
        }else if(bmi <= 24.9){
            result.innerHTML = `your bmi is ${bmi} and your weight is normal`
        }else{
            result.innerHTML = `your bmi is ${bmi} you are over weight`
        }
    }



    
    
});