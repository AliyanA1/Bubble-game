var hit=0;

var score=0;



function scorefun(){
    score+=10;
    document.querySelector("#score").innerHTML=score;
}

function hitfun(){
   hit=Math.floor(Math.random()*10);
   document.querySelector("#hit").innerHTML=hit;  
}

let screenWidth = window.innerWidth;// check the screen width

function bubblefun(){
    var bubble="";
    if(screenWidth>1000){
        for (let i = 1; i < 177; i++) {
            let rn=Math.floor(Math.random()*10)
            bubble +=`<div class="bubble">${rn}</div>`
             }
    }
    else if(screenWidth>800){
        for (let i = 1; i < 121; i++) {
            let rn=Math.floor(Math.random()*10)
            bubble +=`<div class="bubble">${rn}</div>`
             }
    }
    else if(screenWidth>600){
        for (let i = 1; i < 78; i++) {
            let rn=Math.floor(Math.random()*10)
            bubble +=`<div class="bubble">${rn}</div>`
             }
    }
    else{
        for (let i = 1; i < 41; i++) {
            let rn=Math.floor(Math.random()*10)
            bubble +=`<div class="bubble">${rn}</div>`
    }
}
  document.querySelector(".downSection").innerHTML = bubble;
}

var timer=60;
function letsCount(){
   let intera= setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#timer").innerHTML=timer;
        }
        else if(timer==0){
            document.querySelector(".downSection").innerHTML=`<h1>Your Score is: ${score}</h1>`;
        }
        else{
            clearInterval(intera);
        }
        
    },1000)
}

document.querySelector(".downSection").addEventListener("click",function(e){
    let save= Number(e.target.textContent);
    if(save==hit){
        scorefun();
        hitfun();
        bubblefun();
        
    }
})

letsCount();
bubblefun();
hitfun();
