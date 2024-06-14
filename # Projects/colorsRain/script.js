//  Generate a random color

let spuser = window.prompt("Enter Your speed in Milisecond")

const randomColor = function () {
    const hex = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
       color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

let interval_id;
let mesinterval;
let speed = spuser ;
console.log(randomColor())

function startcolorchanging (){
      
    if (!interval_id){
    
     interval_id = setInterval(colorrain,speed)
       
    }
     function colorrain (){
        document.body.style.backgroundColor= randomColor();
    }
     
}

function stopcolorchanging() {
    clearInterval(interval_id)
    clearInterval(mesinterval)
    interval_id = null ; 
}

document.querySelector('#start').addEventListener('click',startcolorchanging)

document.querySelector('#stop').addEventListener('click', stopcolorchanging)