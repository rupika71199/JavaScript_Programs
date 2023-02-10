'use strict'; 

//Selecting Elements
//Scores
const score0Element = document.querySelector("#score0");
const score1Element = document.getElementById("score1"); 
const currentscore0 = document.getElementById("current0");
const currentscore1 = document.getElementById("current1"); 
//Dice and buttons 
const diceElemet = document.querySelector(".dice"); 
const roleDice = document.querySelector(".role"); 
const newGame = document.querySelector(".new");
const endGame = document.querySelector(".end");
const hold = document.querySelector(".hold"); 
const yesModal = document.querySelector(".yes"); 
const noModal = document.querySelector(".no"); 
// Players
const player0Element = document.querySelector(".player0");
const player1Element = document.querySelector(".player1");
//End modal
const modal = document.querySelector(".endModal");

//Initializing conditions
score0Element.textContent = 0; 
score1Element.textContent = 0; 
let currentScore = 0; 
let activePlayer = 0;
let scores = [0,0];
let state = true; 

const switchingActivePlayer = function(){
        document.querySelector(`.player${activePlayer}`).classList.remove("playeractive");
        document.getElementById(`current${activePlayer}`).textContent=0;
        currentScore=0;
        activePlayer = activePlayer === 0? 1:0; 
        document.querySelector(`.player${activePlayer}`).classList.add("playeractive");
};
//Rolling Dice 
roleDice.addEventListener("click", function(){
    if(state){
        // Generating the random dice roll
        const dice = Math.trunc(Math.random()*6)+1;
        console.log(dice);

        // Display dice
        diceElemet.classList.remove("hidden");
        diceElemet.src = `dice-${dice}.png`; 

        //Checking whether dice number is 1
        if (dice===1){
        switchingActivePlayer();
        
        }
        else{
        currentScore = currentScore+dice; 
        document.getElementById(`current${activePlayer}`).textContent=currentScore;
        }
    }
    
});
//Winner score
const winnerAttribute = function(){
    state=false;
    diceElemet.classList.add("hidden");
    document.querySelector(`.player${activePlayer}`).classList.add('player--winner');
    document.querySelector(`.player${activePlayer}`).classList.remove('playeractive');
};
//Holding current score
hold.addEventListener("click",function(){
    if(state){
        //Adding current score to total score and make current score as 0
        scores[activePlayer]+=currentScore; 
        document.querySelector(`#score${activePlayer}`).textContent=scores[activePlayer];

        //Checking whether player's score is 100 
        if (scores[activePlayer]>=100){
            winnerAttribute();
        }
        else{
            switchingActivePlayer();
        }
    }
    // player0Element.classList.toggle("playeractive");

    //Starting new game 
    newGame.addEventListener("click", function(){
        //Setting all scores to 0 
        score0Element.textContent = 0; 
        score1Element.textContent = 0; 
        currentscore0.textContent = 0;
        currentscore1.textContent = 0; 
        document.querySelector(`.player${activePlayer}`).classList.remove('player--winner');
        currentScore = 0; 
        scores = [0,0];

        //Set player 1 as active player
        player0Element.classList.add("playeractive");
        activePlayer=0;
        state=true;
    });
    
});

//Ending the game 
endGame.addEventListener("click",function(){
    if (state){
        modal.classList.remove("hidden");
        document.querySelector(".overlay").classList.remove("hidden");
        //Adding hidden tag 
        const addHidden = function(){
            modal.classList.add("hidden");
            document.querySelector(".overlay").classList.add("hidden");
        }
        //Close the modal
        document.querySelector(".close").addEventListener("click",addHidden);
        document.addEventListener("keydown",function(e){
            console.log(e.key);
            if (e.key==='Escape'){
                addHidden();
            }
        });
        //If no clicked
        noModal.addEventListener("click",addHidden);
        //if yes clicked
        yesModal.addEventListener("click",function(){
            addHidden();
            if (scores[0]===0 && scores[1]===0){
                addHidden();
            }
            else{
                if(scores[0]>scores[1]){
                    activePlayer=0;
                    winnerAttribute();
                }
                else{
                    activePlayer=1;
                    winnerAttribute();
                }
            }
            
        });

    }
    
});