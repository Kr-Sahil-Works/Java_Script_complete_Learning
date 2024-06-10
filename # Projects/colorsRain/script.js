//  Generate a random color

const randomColor = function () {
    const hex = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
       color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

let interval_id;

console.log(randomColor())

function startcolorchanging (){
     
    if (!interval_id){
     interval_id = setInterval(colorrain,500)
    }
     function colorrain (){
        document.body.style.backgroundColor= randomColor();
    }
     
}

function stopcolorchanging() {
    clearInterval(interval_id)
    interval_id = null ; 
}

document.querySelector('#start').addEventListener('click',startcolorchanging)

document.querySelector('#stop').addEventListener('click', stopcolorchanging)