// Define an object representing the game
const game = {
  // Properties
  computerChoiceDisplay: document.getElementById('computer-choice'),
  userChoiceDisplay: document.getElementById('user-choice'),
  resultDisplay: document.getElementById('result'),
  possibleChoices: document.querySelectorAll('button'),
  userChoice: null,
  computerChoice: null,
  result: null,

  // Methods
  init() {
    // Set up event listeners for the possible choices
    this.possibleChoices.forEach(possibleChoice => {
      possibleChoice.addEventListener('click', () => {
        this.userChoice = possibleChoice.id;
        this.userChoiceDisplay.innerHTML = this.userChoice;
        this.generateComputerChoice();
        this.getResult();
      });
    });
  },

  generateComputerChoice() {
    // Generate a random number between 1 and 3
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    // Map the random number to a computer choice
    switch (randomNumber) {
      case 1:
        this.computerChoice = 'rock';
        break;
      case 2:
        this.computerChoice = 'scissors';
        break;
      case 3:
        this.computerChoice = 'paper';
        break;
      default:
        console.error('Invalid random number');
        break;
    }

    // Update the computer choice display
    this.computerChoiceDisplay.innerHTML = this.computerChoice;
  },

  getResult() {
    // Determine the result of the game based on the user and computer choices
    switch (`${this.computerChoice}-${this.userChoice}`) {
      case 'rock-paper':
      case 'scissors-rock':
      case 'paper-scissors':
        this.result = 'you win!';
        break;
      case 'rock-scissors':
      case 'scissors-paper':
      case 'paper-rock':
        this.result = 'you lose!';
        break;
      case 'rock-rock':
      case 'scissors-scissors':
      case 'paper-paper':
        this.result = 'it\'s a draw!';
        break;
      default:
        console.error('Invalid choices');
        break;
    }

    // Update the result display
    this.resultDisplay.innerHTML = this.result;
  }
};

// Initialize the game
game.init();
