// There will be four crystals displayed as buttons on the page.

// The player will be shown a random number at the start of the game.

// When the player clicks on a crystal, it will add a specific amount of points to the player's total score.

// Your game will hide this amount until the player clicks a crystal.
// When they do click one, update the player's score counter.
// The player wins if their total score matches the random number from the beginning of the game.

// The player loses if their score goes above the random number.

// The game restarts whenever the player wins or loses.

// When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.
// The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.



// Each crystal should have a random hidden value between 1 - 12.



// Create a giant object that will house our logic and variables
var crystalGame = {

    //list of variabls that set the inital state of the game
    wins: 0,
    losses: 0,
    targetScore: 0,
    runningScore: 0,
    yourPick: 0,
    crystalOneVal: Math.floor((Math.random() * 12) + 1),
    crystalTwoVal: Math.floor((Math.random() * 12) + 1),
    crystalThreeVal: Math.floor((Math.random() * 12) + 1),
    crystalFourVal: Math.floor((Math.random() * 12) + 1),
    runningScoreText: document.querySelector("#running-score-text"),
    targetScoreText: document.querySelector("#target-score-text"),
    
    // setupGame method is called when page first loads
    setupGame: function () {
        // computer generates a target score between 19 and 120
        this.targetScore = Math.floor((Math.random() * 101) + 19);
        console.log("target score =" + this.targetScore);
        // diplay targetScore on screen
        this.targetScoreText.innerHTML = this.targetScore;
        // reset runningScore
        this.runningScore = 0;
        this.runningScoreText.innerHTML = this.runningScore;
    },

    // This function runs whenever the user clicks a crystal
    updatePage: function() {
    // add value of crystal selected to runningScore
    // update value of running score on the screen 
    // check and see if runningScore = targetScore
        // if so wins++; reset game variables
    // if not check for runningScore > targetscore
        // if so losses++; reset game variables
    },


    // end of crystalGame function
};

$(".crystal-choice").on("click", function() {
    // depending on which crystal is clicked
    crystalGame.yourPick = parseInt(this.id);
    console.log("your pick: " + crystalGame.yourPick);
    if (crystalGame.yourPick === 1) {
      // add value of crystal to runningScore
    runningScore += crystalOneVal;   
    // update scoreboard 
    }
   
});

console.log(crystalGame.crystalOneVal);
console.log(crystalGame.crystalTwoVal);
console.log(crystalGame.crystalThreeVal);
console.log(crystalGame.crystalFourVal);
crystalGame.setupGame();



