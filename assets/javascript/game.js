// The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

// check if the game is winnable: 
// take target score and divide it by largest crystal value check for whole integer === winnable if not take remainder and compare to remaining crystal values 
var $runningScore = $("#running-score-text");
var $targetScore = $("#target-score-text");
var $wins = $("#wins-text");
var $losses = $("#losses-text");

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
   
    // Generate a value 1-12 for use by crystals
    randomCrystalVal: function () {
        return Math.floor((Math.random() * 12) + 1);
    },


    // setupGame method is called when page first loads
    setupGame: function () {
        // computer generates a target score between 19 and 120
        this.targetScore = Math.floor((Math.random() * 101) + 19);
        console.log("target score =" + this.targetScore);
        // diplay targetScore on screen
        $targetScore.html(this.targetScore);
        // reset runningScore
        this.runningScore = 0;
        $runningScore.html(this.runningScore);
        // update wins and losses text
        $wins.html("Wins: " + this.wins); 
        $losses.html("Losses: " + this.losses);
        // generate values for crystals
        this.crystalOneVal = this.randomCrystalVal();
        this.crystalTwoVal = this.randomCrystalVal();
        this.crystalThreeVal = this.randomCrystalVal();
        this.crystalFourVal = this.randomCrystalVal();
        console.log("Crystal Values " + this.crystalOneVal + " " + this.crystalTwoVal + " " + this.crystalThreeVal + " " + this.crystalFourVal);
    },

    // This function runs whenever the user clicks a crystal
    updatePage: function () {
        // update value of running score on the screen 
        $runningScore.html(crystalGame.runningScore);
        // check and see if runningScore = targetScore
        if (this.runningScore === this.targetScore) {
            alert("You win!");
            this.wins++;
            this.setupGame();
            // check for loss condition 
        } else if (this.runningScore > this.targetScore) {
            alert("Oh no! You lost!");
            this.losses++;
            this.setupGame();
        } else {
            $runningScore.html(crystalGame.runningScore);
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



