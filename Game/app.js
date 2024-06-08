let gameSeq=[]
let userSeq=[]

let started = false
let level = 0;

let btns= ["yellow","purple","green","red"]
let allBtn=document.querySelectorAll('.btn')
let h2 = document.querySelector('h2')

document.addEventListener("keypress",function(){
    if(started==false){
        console.log('game is started')
        started=true
    }
    levelUp()
})

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove('flash')
    },500)
}
function  levelUp(){
    userSeq=[]
 level++;
h2.innerText= `Game Started Level : ${level} `

let randIndex=Math.floor(Math.random()*3)
let randColor= btns[randIndex]
let randBtn= document.querySelector(`.${randColor}`)
gameSeq.push(randColor)
btnFlash(randBtn)

}

function checkAns(indx){
    
    if(userSeq[indx] === gameSeq[indx]){
        if(userSeq.length==gameSeq.length){
           setTimeout(levelUp,1000) 
        }
    }
    else{
        console.log("game over")
        h2.innerHTML= 'Game Over'
        let body = document.querySelector('body')
        
        body.classList.add("lose");
    setTimeout(function(){
        body.classList.remove('lose')
    },300)

        
        reset()
    }
}

function btnPressed(){
  console.log('i am pressed')
  let prsdbtn=this;
  btnFlash(prsdbtn)
  
 let usercolor=prsdbtn.getAttribute('id')
  console.log(usercolor)
  userSeq.push(usercolor)

  checkAns(userSeq.length -1)
}
for(let btn of allBtn){
    btn.addEventListener('click',btnPressed)
 }

 function reset(){
    started=false;
    gameSeq=[]
    userSeq=[]
    h2.innerHTML='Pres any key to start the gaem'
    level = 0;
 }