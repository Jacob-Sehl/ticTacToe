let humanScore = 0; // Initialize human score
let computerScore = 0; // Initialize computer score

function playRound(humanChoice, computerChoice) {
    // your code here!
    const result = (humanChoice === computerChoice) 
        ? "It's a tie!" 
        : (humanChoice === "ROCK" && computerChoice === "SCISSORS") || 
          (humanChoice === "PAPER" && computerChoice === "ROCK") || 
          (humanChoice === "SCISSORS" && computerChoice === "PAPER") 
        ? (humanScore++, "You win!") // Increment human score
        : (computerScore++, "You lose!"); // Increment computer score

    console.log("You: " + humanChoice + " The Enemy: " + computerChoice)
    console.log(result);
    console.log(`Scores - Human: ${humanScore}, Computer: ${computerScore}`); // Display scores
  }
  
  function playGame() {
    while (!isGameOver()) {
        let humanSelection = getHumanChoice();
        let computerSelection = getRandomHand();
        playRound(humanSelection, computerSelection);
    }
    if(humanScore > computerScore) {
        console.log("YOU ARE VICTORIOUS!!!!");
    } else {
        console.log("Oops, its over. Well, you tried")
    }
  }

  function getRandomHand(){
    let randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber) {
        case 0:
            return "ROCK"
        case 1:
            return "PAPER"
        case 2:
            return "SCISSORS"
    }
  }

  function getHumanChoice() {
    // Prompt the user for their choice
    const choice = prompt("Enter your choice (ROCK, PAPER, SCISSORS):").toUpperCase();
    // Validate the choice
    if (["ROCK", "PAPER", "SCISSORS"].includes(choice)) {
        return choice;
    } else {
        console.log("Invalid choice. Please enter ROCK, PAPER, or SCISSORS.");
        return getHumanChoice(); // Recursively prompt until a valid choice is made
    }
  }

  function isGameOver() {
    if (humanScore == 5 || computerScore == 5)
        return true;
    return false;
  }

  playGame();