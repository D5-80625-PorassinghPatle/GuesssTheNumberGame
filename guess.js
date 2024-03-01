let randomNumber=(parseInt(Math.random()*100+1));

const submit = document.querySelector("#subt");
const userInput=document.querySelector("#guessField");

const guessSlot=document.querySelector(".guesses");
const remainig=document.querySelector(".lastResult")
const lowOrhi=document.querySelector(".lowOrHi");
const startOver=document.querySelector(".resultParas");

const p=document.createElement("p");

let prevGuess=[];
let numGuess=1;
let playGamee=true;

if(playGamee){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess=parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
        
    });
}

function validateGuess(guess)
{
    //check for negative , range , of values 
    if(isNaN(guess)){
        alert("please enter a valid number")
    }else if(guess<1){
        alert("please enter a valid number")
    }else if(guess>100){
        alert("please enter a valid number")
    }else{
        prevGuess.push(guess)
        if(numGuess ===11){
            displayGuess(guess);
            displayMessage(`game over RANDOM NUMBER WAS ${randomNumber}`);
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
            
        }
    }
}

function checkGuess(guess)
{
    //here we will finallly check and display the message further4

    if(guess === randomNumber){
        displayGuess(guess);
        displayMessage("You guesssed it right VICTRORY");
        endGame();
    }else if(guess < randomNumber)
    {
        displayMessage("number is too low");
    }else if(guess > randomNumber)
    {
        displayMessage("number is too high"
        );
    }

}

function displayMessage(message)
{
    //display message if its matched or not matched , Win OR Loss

    lowOrhi.innerHTML=`<h2>${message}</h2>`
}

function displayGuess(guess)
{
    
    userInput.value='';
    guessSlot.innerHTML+=`${guess}  `;
    numGuess++;
    remainig.innerHTML=`${12-numGuess}`;

}


function endGame()

{
    userInput.value=" ";
    userInput.setAttribute('disabled', '')
    p.classList.add('button');
    p.innerHTML=`<h3 id="newGame"> GAME IS OVER </h3>`;
    startOver.appendChild(p);
    playGamee=false;
    newGame();
    
}

function newGame()
{
    const newGameButton =  document.querySelector('#newGame');
     newGameButton.addEventListener("click",function(e){
        randomNumber=(parseInt(Math.random()*100+1));
        prevGuess=[];
        numGuess=1;
        guessSlot.innerHTML='';
        remainig.innerHTML=`${12-numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGamee=true;
    })
}


