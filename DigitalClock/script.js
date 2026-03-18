let clock = document.querySelector(".time")
console.log(clock.innerHTML)

setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString()
},1000);
