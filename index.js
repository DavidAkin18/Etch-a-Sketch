// let color ='black'
let click = false;

document.addEventListener("DOMContentLoaded", ()=>{
    makeBoard(16);
    
   document.querySelector('body').addEventListener('click', function(e){
    if(e.target.tagName != "BUTTON"){
        click = !click;
        let draw = document.querySelector('#draw');
        if(click){
            draw.innerHTML = 'now you can draw'
        }else{
            draw.innerHTML="not allowed to draw"
        }
    }
   });
    
    let btn_pop = document.querySelector("#popUp");
    btn_pop.addEventListener("click", ()=>{
        let size = getSize();
        makeBoard(size);
    });
});

//adds value to board container
function makeBoard(size){
    let board = document.querySelector(".board");
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let myDiv =size * size;

    for( let r = 0; r < myDiv; r++){
        let cell = document.createElement('div');
        cell.addEventListener("mouseover", colorDiv);
        board.insertAdjacentElement("beforeend", cell);
    }
}makeBoard()

//allows user input to inner div of board 
function  getSize(){
    let input = prompt("What will be the size of the board?");
    let message = document.querySelector('#message');
    
    if(input == ""){
        message.innerHTML = "Please provide message";
    }
    else if(input < 0 || input > 100){
        message.innerHTML = "Prove a number between 1 to 100";
    }
    else{
        message.innerHTML = "Now you play";
        return input;
    }
};


//the footer buttons
function colorDiv(){
    if(click){
        if(color == "random"){
            this.style.backgroundColor = randomColor();
        }
        else{
            this.style.backgroundColor="black"
        }
    }
}
function setColor(colorChoice){
    color = colorChoice;
}
function resetBoard(){
    let divs = document.querySelectorAll('div');
    divs.forEach((div)=>div.style.backgroundColor ="white")
}

//randomize the color of div 

function randomColor(){
    return `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`
}





