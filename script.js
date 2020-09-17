
function playRound(playerInput, computerInput){
    let playerRound = 'nothing'
    if(playerInput == "rock" && computerInput == "rock"){
        playerRound = "draw"
    }else if(playerInput == "rock" && computerInput == "papper"){
        playerRound = "loose"
    }else if(playerInput == "rock" && computerInput == "scissors"){
        playerRound = "win"
    }
    if(playerInput == "papper" && computerInput == "rock"){
        playerRound = "win"
    }else if(playerInput == "papper" && computerInput == "papper"){
        playerRound = "draw"
    }else if(playerInput == "papper" && computerInput == "scissors"){
        playerRound ="loose"
    }
    if(playerInput == "scissors" && computerInput == "rock"){
        playerRound = "loose"
    }else if(playerInput == "scissors" && computerInput == "papper"){
        playerRound = "win"
    }else if(playerInput == "scissors" && computerInput == "scissors"){
        playerRound = "draw"
    }
    console.log(playerInput)
    console.log(computerInput)
    console.log(playerRound)
    return playerRound
}

function computerPlay(){
    let options = ["rock", "papper", "scissors"];
    return options[Math.floor(Math.random() * Math.floor(3))];
}

const buttons = document.querySelectorAll('button')
let playerCounter = 0
let roundCounter = 0
let computerCounter = 0
let playerRound = ''

const playerTotal = document.getElementById('player-choice')
const computerTotal = document.getElementById('computer-choice')
const playerScore = document.getElementById('player-score')
const computerScore = document.getElementById('computer-score')
const totalRound = document.getElementById('total-rounds') 


buttons.forEach((button) => {

    button.addEventListener('click', () => {

        
        let computerChoice = computerPlay()
        playerRound = playRound(button.id, computerChoice)
        
        playerTotal.textContent = `You: ${button.id}`
        computerTotal.textContent = `Computer: ${computerChoice}`
        if(playerRound == "win"){
            playerCounter++
            playerScore.textContent = `Score: ${playerCounter}`
        }else if(playerRound == "loose"){
            computerCounter++
            computerScore.textContent = `Score: ${computerCounter}`
        } 
        roundCounter++
        totalRound.textContent = ` Round ${roundCounter}`
        if(playerCounter == 5 || computerCounter == 5){
            if(playerCounter == 5){
                alert(`Game over! You won!`)
            }else if(computerCounter == 5){
                alert('Game over! Computer won!')
            }
            playerCounter = 0
            computerCounter = 0
            roundCounter = 0
            computerTotal.textContent = `Computer:`
            playerScore.textContent = `Score:`
            computerScore.textContent = `Score:`
            totalRound.style.display = 'none'
        }
  });
})
