
let pac_x=3
let pac_y=5

let coin_x=parseInt(1+Math.random()*9)
let coin_y=parseInt(1+Math.random()*9)
let coin2_x=parseInt(1+Math.random()*9)
let coin2_y=parseInt(1+Math.random()*9)

let bomb_x=parseInt(1+Math.random()*9)
let bomb_y=parseInt(1+Math.random()*9)
let bomb1_x=parseInt(1+Math.random()*9)
let bomb1_y=parseInt(1+Math.random()*9)
let bomb2_x=parseInt(1+Math.random()*9)
let bomb2_y=parseInt(1+Math.random()*9)

let door_x=Math.floor(Math.random() * 11);
if (door_x<=5){door_x=1}
else if(door_x>5 && door_x<=10){ door_x=10}

let door_y=Math.floor(Math.random() * 11);
if (door_y<=5){door_y=1}
else if(door_y>5 && door_y<=10){ door_y=10}

let score=0
let contor=10

let coin=true
let coin2=true

//#################### Pac movement logic #################### 
function action(){
            switch(event.key){
                case "ArrowUp":
                   if(pac_y>1)pac_y--; contor--; break;
                case "ArrowDown":
                    if(pac_y<10)pac_y++; contor--;  break;
                case "ArrowLeft":
                    if (pac_x>1)pac_x--; contor--; break;
                case "ArrowRight":
                    if(pac_x<10)pac_x++; contor--; break;
            }
// ###################################################

         

//#################### Coin logic #################### 
            if(pac_x==coin_x && pac_y==coin_y){ 
                coin=false
            }else if(pac_x==coin_x && pac_y==coin_y){
                coin=true
            }  
            
            if(pac_x==coin2_x && pac_y==coin2_y){ 
                coin2=false
            }else if(pac_x==coin2_x && pac_y==coin2_y){
                coin2=true
            }  
// ###################################################
            hp()
            renderMap()
}
//#################### Health points #################### 
function hp(){ 
    if(score>=0 && score<100 && pac_x==coin_x && pac_y==coin_y){
        score+=10
        contor+=10    
    }else if (score>=0 && score<100 && pac_x==coin2_x && pac_y==coin2_y){
        score+=40
        contor+=10 
    }else if( score==100){
        score==score
        contor==contor
    }

    if (contor<0){
        alert("GAME OVER!!! Too many movements!")
        location.reload()
    }

//#################### Health points/bomb logic #################### 
    if(pac_x==bomb_x && pac_y==bomb_y && score>=50   ||
       pac_x==bomb1_x && pac_y==bomb1_y && score>=50 ||
       pac_x==bomb2_x && pac_y==bomb2_y && score>=50 ){
        score-=50
    }else if(pac_x==bomb_x && pac_y==bomb_y && score<=50  ||
            pac_x==bomb1_x && pac_y==bomb1_y && score<=50 ||
            pac_x==bomb2_x && pac_y==bomb2_y && score<=50 ){
        score=0
        alert(`Game over!!!`)
        location.reload()
    }

    if (pac_x==door_x && pac_y==door_y){
        alert(`Good job!!!! Go to the next level!!!`)
        location.reload()
    } 
}
// ###################################################

//#################### Map randering #################### 

function renderMap() {
    gameMap.innerHTML=``
      for (let y=1; y<=10; y++){
            for (let x=1; x<=10; x++){               
                if (x==pac_x && y==pac_y){
                    gameMap.innerHTML += `<div class="pac">${x}:${y}</div>`
                }
                
                else if(x==coin_x && y==coin_y && coin==true ){
                    gameMap.innerHTML+= `<div class="coin">${x}:${y}</div>`
                }else if(x==coin_x && y==coin_y && coin==false){
                    gameMap.innerHTML+= `<div class="">${x}:${y}</div>`
                }
                
                else if(x==coin2_x && y==coin2_y && coin2==true){
                    gameMap.innerHTML+= `<div class="coin2">${x}:${y}</div>`
                }else if(x==coin2_x && y==coin2_y && coin2==false ){
                    gameMap.innerHTML+= `<div class="">${x}:${y}</div>`
                }
                
                else if (x==bomb_x && y==bomb_y ||
                        x==bomb1_x && y==bomb1_y||
                        x==bomb2_x && y==bomb2_y){
                    gameMap.innerHTML+=`<div class="bomb">${x}:${y}</div>`
                }
                
                else if(x==door_x && y==door_y){
                    gameMap.innerHTML+=`<div class="door">${x}:${y}</div>`
                }
                             
                else{
                    gameMap.innerHTML += `<div class="">${x}:${y}</div>`
                }
            }
        }
        gameScore.innerHTML=`Score : ${score}`
        contorScore.innerHTML=`Contor : ${contor}`
}
// ###################################################


renderMap()
