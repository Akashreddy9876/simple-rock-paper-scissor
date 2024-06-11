
const options=['rock','paper','scissors'];
const getComputerChoice=()  => {
    const randomNumber=Math.floor(Math.random()*3);
    return options[randomNumber];
}

const getHumanChoice=() => {
    let humanChoice=prompt('Please enter your choice','rock');
    return humanChoice;
}

const playGame=() => {
    let humanScore=0,computerScore=0;
    const playRound= (humanChoice,computerChoice)=>{
    let winner="";
    if(humanChoice.toLowerCase()=='rock'&&computerChoice=='rock'||humanChoice.toLowerCase()=='paper'&&computerChoice=='paper'||humanChoice.toLowerCase()=='scissors'&&computerChoice=='scissors'){
    winner='draw';    
    }else{
        if(humanChoice.toLowerCase()=='paper'){
            if(computerChoice=='rock'){
                humanScore++;
            }else{
                computerScore++;
                winner='computer';
            }
        }else{
            if(humanChoice.toLowerCase()=='rock'){
                if(computerChoice=='paper'){
                    computerScore++;
                    winner='computer';
                }else{
                    humanScore++;
                }
            }
            else{
                if(computerChoice=='paper'){
                    humanScore++;
                }else{
                    computerScore++;
                    winner='computer';
                }
            }
        }
    }
    winner=='draw'?console.log('draw match'):winner?console.log(`You lose! ${computerChoice} beats ${humanChoice}`):console.log(`You win! ${humanChoice} beats ${computerChoice}`);
}
    for(let i=0;i<5;i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if(humanScore>computerScore) console.log(`Human wins humanScore: ${humanScore} computerScore: ${computerScore}`);
        else if(humanScore<computerScore) console.log(`Computer wins humanScore: ${computerScore} computerScore: ${humanScore}`);
        else{
         console.log('No result');
        }
}
playGame();