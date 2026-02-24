const form = document.querySelector("form")
form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    let results = document.querySelector("#result")

    if(height < 0 )
    {
        results.innerHTML = "Please give a valid height"
    }
    else if(weight < 0 )
    {
        results.innerHTML = "Please give a valid height"
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `The BMI is ${bmi}`
    } 
})
