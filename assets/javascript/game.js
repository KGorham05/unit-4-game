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

// check if the game is winnable: 
// take target score and divide it by largest crystal value check for whole integer === winnable if not take remainder and compare to remaining crystal values 

// Each crystal should have a random hidden value between 1 - 12.



// Create a giant object that will house our logic and variables
var crystalGame = {

    //list of variabls that set the inital state of the game
    wins: 0,
    losses: 0,
    targetScore: 0,
    runningScore: 0,
    yourPick: 0,
    crystalOneVal: 0,
    crystalTwoVal: 0,
    crystalThreeVal: 0,
    crystalFourVal: 0,
    runningScoreText: document.querySelector("#running-score-text"),
    targetScoreText: document.querySelector("#target-score-text"),
    winsText: document.querySelector("#wins-text"),
    lossesText: document.querySelector("#losses-text"),

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
        // update wins and losses text
        this.winsText.innerHTML = "Wins: " + this.wins;
        this.lossesText.innerHTML = "Losses: " + this.losses;
        // generate values for crystals
        this.crystalOneVal = Math.floor((Math.random() * 12) + 1);
        this.crystalTwoVal = Math.floor((Math.random() * 12) + 1);
        this.crystalThreeVal = Math.floor((Math.random() * 12) + 1);
        this.crystalFourVal = Math.floor((Math.random() * 12) + 1);
        console.log("Crystal Values " + this.crystalOneVal + " " + this.crystalTwoVal + " " + this.crystalThreeVal + " " + this.crystalFourVal);
    },

    // This function runs whenever the user clicks a crystal
    updatePage: function () {
        // update value of running score on the screen 
        crystalGame.runningScoreText.innerHTML = crystalGame.runningScore;
        // check and see if runningScore = targetScore
        if (this.runningScore === this.targetScore) {
            alert("You win!");
            this.wins++;
            this.setupGame();
        } else if (this.runningScore > this.targetScore) {
            alert("Oh no! You lost!");
            this.losses++;
            this.setupGame();
        } else {
            crystalGame.runningScoreText.innerHTML = crystalGame.runningScore;
        };


    },


    // end of crystalGame function
};

// when hovering over crystals, changer cursor to pointer and add a border
$('.crystal-choice').css('cursor', 'pointer');
$('.crystal-choice').hover(function () {
    $(this).css('border-style', 'dotted');
}, function () {
    $(this).css('border-style', 'none');
});

$(".crystal-choice").on("click", function () {
    // depending on which crystal is clicked
    crystalGame.yourPick = parseInt(this.id);
    // if crystal 1 is picked
    if (crystalGame.yourPick === 1) {
        // add value of crystal 1 to runningScore
        crystalGame.runningScore += crystalGame.crystalOneVal;
        // update scoreboard 
        crystalGame.updatePage();
    } else if (crystalGame.yourPick === 2) {
        crystalGame.runningScore += crystalGame.crystalTwoVal;
        crystalGame.updatePage();
    } else if (crystalGame.yourPick === 3) {
        crystalGame.runningScore += crystalGame.crystalThreeVal;
        crystalGame.updatePage();
    } else {
        crystalGame.runningScore += crystalGame.crystalFourVal;
        crystalGame.updatePage();
    };


});

crystalGame.setupGame();



