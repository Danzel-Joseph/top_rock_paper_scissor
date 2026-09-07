let computerScore  = 0; 
let humanScore  = 0;

function getComputerChoice(){
    const max = 3; 

    let computerValue = Math.floor(((Math.random()*max)+1));
    if(computerValue===1){
        return 'rock'
    }else if(computerValue===2){
        return 'paper';
    }else if(computerValue===3){
        return 'scissor';
    }


}

function getHumanChoice(){
    let humanChoice = prompt('Enter your pick (Rock, paper, scissor)');
    return humanChoice? humanChoice.toLowerCase() : " ";
}

let humanChoice 
let computerChoice 

function playRound(){

    humanChoice = getHumanChoice()
    computerChoice = getComputerChoice();

    if(computerChoice === 'rock' && humanChoice === 'scissor'){
        computerScore += 1 ;
        console.log("You lose! rock beats scissor");
    }
    else if(computerChoice==='paper' && humanChoice === 'rock'){
        computerScore += 1 ;
        console.log("You lose! paper beat rock");
    }else if(computerChoice === 'scissor' && humanChoice === 'paper'){
        computerScore += 1 ;
        console.log("You lose! paper beat rock");
    }
    else if(humanChoice === 'rock' && computerChoice === 'scissor'){
        humanScore += 1; 
        console.log('You win! rock beats scissor');
    } else if(humanChoice === 'paper' && computerChoice === 'rock'){
        humanScore += 1 ;
        console.log("You win! paper beats rock") ;
    } else if(humanChoice === 'scissor' && computerChoice === 'paper'){
        humanScore += 1 ; 
        console.log("you win! scissor beats paper");
    } else  if(humanChoice === computerChoice){
        console.log("Play is tied! computer wins");
        computerScore  += 1 ;
    }
}


function iteration(){
    for(let i=0; i<5; i++){
        playRound();
    }
}

function winner(computerScore, humanScore){
    if(humanScore > computerScore){
        console.log(`You win! your score ${humanScore} => computer score ${computerScore}`);

    } else if(computerScore > humanScore){
        console.log(`You lose! your score ${humanScore} => computer Score ${computerScore}`);
    }
    else {
        console.log("Scores are tied");
    }

}

iteration() ;
winner(computerScore, humanScore);
