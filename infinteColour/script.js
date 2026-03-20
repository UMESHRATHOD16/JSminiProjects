const start = document.querySelector("#start")
const stop = document.querySelector("#stop")

const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = "#"
    for(let i=0;i<6;i++)
    {
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
};


let intervalId = null ;
const changeColourPerSec = function(){
    document.body.style.backgroundColor = randomColor();
}
start.addEventListener('click', function(){
    if(intervalId == null)
    {
        intervalId = setInterval(changeColourPerSec, 1000);
    }
})
stop.addEventListener("click", function(){
    clearInterval(intervalId);
    intervalId = null ;
})



