'use strict';

//--------USED DRY PRINCIPLE {Do not repeat yourself Refractoring of code}----------



// console.log(document.querySelector('.message').textContent);
// //Document :- special object that is the entry point to the DOM

// //Selecting /manipulating 
// document.querySelector('.message').textContent ="Text Content is changed ..";
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent=13;
// document.querySelector('.score').textContent=20;

// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value =23;
// console.log(document.querySelector('.guess').value);

// //Changing the title of the webpage

// document.title ="Guess my number ";
// console.log(document.head);


let secretnumber = Math.trunc(Math.random()*20+1);

let score =20;
let highScore =0;

const displayMessage =function(message){
    document.querySelector('.message').textContent = message;
}
//Displaying the secret number in the browser

document.querySelector('.check').addEventListener('click',function(){
    
const guess =Number(document.querySelector('.guess').value);
 
if(!guess) {
    // document.querySelector('.message').textContent ='No number';
    displayMessage('No number');
}
else if(guess!==secretnumber){
    if(score>0){
        // document.querySelector('.message').textContent= guess>secretnumber?'Too high':'Too low';
        displayMessage(guess>secretnumber?'Too high':'Too low');
        score--;
    
        document.querySelector('.score').textContent=score;
        }
        else{
            displayMessage("You losed the game :( ");
            document.querySelector('.score').textContent=0;
        }

}
//     else if (guess>secretnumber){

//     if(score>0){
//     document.querySelector('.message').textContent='Too high';
//     score--;

//     document.querySelector('.score').textContent=score;
//     }
//     else{
//         document.querySelector('.message').textContent ="You losed the game :( ";
//     }
// }
// else if(guess<secretnumber){
//     if(score>0){
//     document.querySelector('.message').textContent='Too low';
//     score--;
//     document.querySelector('.score').textContent=score;
//     }
//     else{
//         document.querySelector('.message').textContent ="You losed the game :( ";
//     }
// }
else if(guess===secretnumber){
    displayMessage('Correct Number!');
    if(score>highScore){
        highScore =score;
        document.querySelector('.highscore').textContent=highScore;
    }
    document.querySelector('.number').textContent =secretnumber;
    //Background color and width
    document.querySelector('.number').style.width='30rem';
    document.querySelector('body').style.backgroundColor ='#60b347';
}  
 // console.log(document.querySelector('.message').textContent='Correct Number!');
});

//Adding again button functionality

document.querySelector('.again').addEventListener('click',function(){

//Resetting all the values 
score =20;
secretnumber = Math.trunc(Math.random()*20+1);
//reset
displayMessage('Start guessing...');
document.querySelector('.score').textContent =score;

//Changing the background Color 
document.querySelector('body').style.background='#222';
document.querySelector('.number').style.width='15rem';

document.querySelector('.guess').value ='';

document.querySelector('.number').textContent='?';



});

