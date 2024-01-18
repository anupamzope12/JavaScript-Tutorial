//generate a random color

const randomColor=function(){
    const hex='0123456789ABCDEF';
    let color='#'
    
    for(let i=0;i<6;i++){
        color +=hex[Math.floor(Math.random()*16)]    
    }
    return color;
}
let interverId;
console.log(randomColor())

const startChangingColor=function(){
    if(!interverId){
    interverId=setInterval(chnageBGColor,1000)
    }
    function chnageBGColor(){
    document.body.style.backgroundColor=randomColor();
    }
}
const stopChangingColor=function(){
    clearInterval(interverId)
    interverId=null;
}

document.querySelector('#start').addEventListener('click',startChangingColor)

document.querySelector('#stop').addEventListener('click',stopChangingColor)