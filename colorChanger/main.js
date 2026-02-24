

let buttons = document.querySelectorAll('.button');
let body = document.querySelector("body")

buttons.forEach((button)=>{
    button.addEventListener('click', ()=>{
        let bgcolor = button.id
        body.style.backgroundColor = button.id
        if(bgcolor === "blue" || bgcolor === "yellow" || bgcolor === "green")
        {
            body.style.color = "black"
        }
        else
        {
             body.style.color = "white"
        }
    })
})
