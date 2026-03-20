const start = document.querySelector("#start")
const stop = document.querySelector("#stop")

const randomColor = function(){
    const hex = "ABCDEDF0123456789"
    let color = "#"
    for(let i=0;i<6;i++)
    {
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
};


let intervalId = null ;
let colorChangingStarted ;
const changeColourPerSec = function(){
    document.body.style.backgroundColor = randomColor();
}
start.addEventListener('click', function(){
    if(intervalId == null)
    {
        colorChangingStarted = setInterval(changeColourPerSec, 1000);
    }
})
stop.addEventListener("click", function(){
    clearInterval(colorChangingStarted);
    intervalId = null ;
})



