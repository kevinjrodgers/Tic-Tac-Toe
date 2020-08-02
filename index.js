const playerFactory = (name, gamePiece) => {
    let playerWin = 0;
    let playerLose = 0;
    let playerDraw = 0;
    let playerName = name;
    let playerGamePiece = gamePiece;
    let playerWinRate = () => {
        (playerWin/(playerWin+playerLose+playerDraw)) * 100;
    }
    let playerLoseRate = () => {
        (playerLose/(playerWin+playerLose+playerDraw)) * 100;
    }
    let playerDrawRate = () => {
        (playerDraw/(playerWin+playerLose+playerDraw)) * 100;
    }
    let increaseWin = () => {
        playerWin+=1;
    }
    let increaseLose = () => {
        playerLose+=1;
    }
    let increaseDraw = () =>  {
        playerDraw = playerDraw + 1;
    }
    const getPlayerWin = () => {
        return playerWin;
    }
    const getPlayerLose = () => {
        return playerLose;
    }
    const getPlayerDraw = () => {
        return playerDraw;
    }
    const setPlayerName = (newPlayerName) => {
        playerName = newPlayerName;
    }
    return {playerWinRate, playerLoseRate, playerDrawRate, increaseWin, increaseLose, increaseDraw, playerName, playerGamePiece, getPlayerWin, getPlayerLose, getPlayerDraw, setPlayerName};
};

let gameBoard = document.getElementById("game-board");
let gameBoardSpaceOne = gameBoard.children[0];
let gameBoardSpaceTwo = gameBoard.children[1];
let gameBoardSpaceThree = gameBoard.children[2];
let gameBoardSpaceFour = gameBoard.children[3];
let gameBoardSpaceFive = gameBoard.children[4];
let gameBoardSpaceSix = gameBoard.children[5];
let gameBoardSpaceSeven = gameBoard.children[6];
let gameBoardSpaceEight = gameBoard.children[7];
let gameBoardSpaceNine = gameBoard.children[8];
let currentPlayer;
let playerOne = playerFactory("Player One", "X");
let playerTwo = playerFactory("Player Two","O");
let playerOneWinLabel = document.getElementById("player-one-win");
let playerOneLoseLabel = document.getElementById("player-one-lose");
let playerOneDrawLabel = document.getElementById("player-one-draw");
let playerTwoWinLabel = document.getElementById("player-two-win");
let playerTwoLoseLabel = document.getElementById("player-two-lose");
let playerTwoDrawLabel = document.getElementById("player-two-draw");



function gameSetup() {
    //Clear the game board
    gameBoardSpaceOne.innerHTML = "";
    gameBoardSpaceTwo.innerHTML = "";
    gameBoardSpaceThree.innerHTML = "";
    gameBoardSpaceFour.innerHTML = "";
    gameBoardSpaceFive.innerHTML = "";
    gameBoardSpaceSix.innerHTML = "";
    gameBoardSpaceSeven.innerHTML = "";
    gameBoardSpaceEight.innerHTML = "";
    gameBoardSpaceNine.innerHTML = "";
    //Make the players
    let playerOnePanel = document.getElementById("player-one");
    let playerOneName = document.getElementById("player-one-name").innerHTML;
    //console.log(playerOneName, "X");
    playerOne.setPlayerName(playerOneName);
    //console.log(playerOne.playerWinRate());
    let playerTwoName = document.getElementById("player-two-name").innerHTML;
    playerTwo.setPlayerName(playerOneName);
    //console.log(playerTwoName);
    console.log(playerOne.playerName);
    console.log(playerOne.playerGamePiece);
    console.log(playerTwo.playerName);
    console.log(playerTwo.playerGamePiece);
    chooseStartPlayer();
    //Make the board clickable
    gameBoard.style.setProperty("pointer-events", "initial");
}

function chooseStartPlayer() {
    //Make both player panels white, then, after a delay, the panel that is colored is the first player
    //let numOfPlayerSelectionCycles = Math.floor(Math.random() * Math.floor(2));
    //let numOfPlayerSelectionCycles = Math.floor(Math.random() * Math.floor(15)) + 5;
    //Make 2nd player's background panel white;
    currentPlayer = Math.floor(Math.random() * Math.floor(2) + 1);
    let playerOnePanel = document.getElementById("player-one");
    let playerTwoPanel = document.getElementById("player-two");
    playerOnePanel.style.backgroundColor = "white";
    playerTwoPanel.style.backgroundColor = "white";
    playerSwitcher();
    //let choosePlayerTimer = setTimeout(randomChooser(currentPlayer), 300);
    //clearTimeout(choosePlayerTimer);

}

function playerSwitcher() {
    let playerOnePanel = document.getElementById("player-one");
    let playerTwoPanel = document.getElementById("player-two");
    playerOnePanel.style.backgroundColor = "white";
    playerTwoPanel.style.backgroundColor = "white";
    if(currentPlayer == 1) {
        playerOnePanel.style.backgroundColor = "#FF5959";
        playerTwoPanel.style.backgroundColor = "white";

    }
    else if(currentPlayer == 2) {
        playerOnePanel.style.backgroundColor = "white";
        playerTwoPanel.style.backgroundColor = "dodgerblue";
    }
}

function determineIfWinner() {
    //If there is a winner, end the game
    let gBSOneValue = gameBoardSpaceOne.innerHTML;
    let gBSTwoValue = gameBoardSpaceTwo.innerHTML;
    let gBSThreeValue = gameBoardSpaceThree.innerHTML;
    let gBSFourValue = gameBoardSpaceFour.innerHTML;
    let gBSFiveValue = gameBoardSpaceFive.innerHTML;
    let gBSSixValue = gameBoardSpaceSix.innerHTML;
    let gBSSevenValue = gameBoardSpaceSeven.innerHTML;
    let gBSEightValue = gameBoardSpaceEight.innerHTML;
    let gBSNineValue = gameBoardSpaceNine.innerHTML;
    //Check all winning row combinations
    if((gBSOneValue == "X" && gBSTwoValue == "X" && gBSThreeValue == "X") || (gBSOneValue == "O" && gBSTwoValue == "O" && gBSThreeValue == "O")) {
        //return who is winner
        if(gBSOneValue == "X" && gBSTwoValue == "X" && gBSThreeValue == "X") {
            alert(playerOne.playerName + " is the winner in the top row!");
            updatePlayerStats(1);
        }
        else {
            alert(playerTwo.playerName + " is the winner in the top row!");
            updatePlayerStats(2);

        }
    }
    else if((gBSFourValue == "X" && gBSFiveValue == "X" && gBSSixValue == "X") || (gBSFourValue == "O" && gBSFiveValue == "O" && gBSSixValue == "O")) {
        if(gBSFourValue == "X" && gBSFiveValue == "X" && gBSSixValue == "X") {
            alert(playerOne.playerName + " is the winner in the middle row!");
            updatePlayerStats(1);
        }
        else {
            alert(playerTwo.playerName + " is the winner in the middle row!");
            updatePlayerStats(2);
        }
    }
    else if((gBSSevenValue == "X" && gBSEightValue == "X" && gBSNineValue == "X") || (gBSSevenValue == "O" && gBSEightValue == "O" && gBSNineValue == "O")) {
        if(gBSSevenValue == "X" && gBSEightValue == "X" && gBSNineValue == "X") {
            alert(playerOne.playerName + " is the winner in the bottom row!");
            updatePlayerStats(1);
        }
        else {
            alert(playerTwo.playerName + " is the winner in the bottom row!");
            updatePlayerStats(2);
        }
    }

    //Check all winning column combinations
    else if((gBSOneValue == "X" && gBSFourValue == "X" && gBSSevenValue == "X") || (gBSOneValue == "O" && gBSFourValue == "O" && gBSSevenValue == "O")) {
        if(gBSOneValue == "X" && gBSFourValue == "X" && gBSSevenValue == "X") {
            alert(playerOne.playerName + " is the winner in the first column!");
            updatePlayerStats(1);
        }
        else {
            alert(playerTwo.playerName + " is the winner in the first column!");
            updatePlayerStats(2);
        }
    }
    else if((gBSTwoValue == "X" && gBSFiveValue == "X" && gBSEightValue == "X") || (gBSTwoValue == "O" && gBSFiveValue == "O" && gBSEightValue == "O")) {
        if(gBSTwoValue == "X" && gBSFiveValue == "X" && gBSEightValue == "X") {
            alert(playerOne.playerName + " is the winner in the second column!");
            updatePlayerStats(1);
        }
        else {
            alert(playerTwo.playerName + " is the winner in the second column!");
            updatePlayerStats(2);
        }
    }
    else if((gBSThreeValue == "X" && gBSSixValue == "X" && gBSNineValue == "X") || (gBSThreeValue == "O" && gBSSixValue == "O" && gBSNineValue == "O")) {
        if(gBSThreeValue == "X" && gBSSixValue == "X" && gBSNineValue == "X") {
            alert(playerOne.playerName + " is the winner in the third column!");
            updatePlayerStats(1);
        }
        else {
            alert(playerTwo.playerName + " is the winner in the third column!");
            updatePlayerStats(2);
        }
    }
    //Check all winning cross combinations
    else if((gBSOneValue == "X" && gBSFiveValue == "X" && gBSNineValue == "X") || (gBSOneValue == "O" && gBSFiveValue == "O" && gBSNineValue == "O")) {
        if(gBSOneValue == "X" && gBSFiveValue == "X" && gBSNineValue == "X") {
            alert(playerOne.playerName + " is the winner by diagonal from top-left to bottom-right!");
            updatePlayerStats(1);
        }
        else {
            alert(playerTwo.playerName + " is the winner diagonal from top-left to bottom-right!");
            updatePlayerStats(2);
        }
    }
    else if((gBSThreeValue == "X" && gBSFiveValue == "X" && gBSSevenValue == "X") || (gBSThreeValue == "O" && gBSFiveValue == "O" && gBSSevenValue == "O")) {
        if(gBSThreeValue == "X" && gBSFiveValue == "X" && gBSSevenValue == "X") {
            alert(playerOne.playerName + " is the winner by diagonal from top-right to bottom-left!");
            updatePlayerStats(1);
        }
        else {
            alert(playerTwo.playerName + " is the winner diagonal from top-right to bottom-left!");
            updatePlayerStats(2);
        }
    }

    //Check for draw
    else if((gBSOneValue == "X" || gBSOneValue == "O")
            && (gBSTwoValue == "X" || gBSTwoValue == "O")
            && (gBSThreeValue == "X" || gBSThreeValue == "O")
            && (gBSFourValue == "X" || gBSFourValue == "O")
            && (gBSFiveValue == "X" || gBSFiveValue == "O")
            && (gBSSixValue == "X" || gBSSixValue == "O")
            && (gBSSevenValue == "X" || gBSSevenValue == "O")
            && (gBSEightValue == "X" || gBSEightValue == "O")
            && (gBSNineValue == "X" || gBSNineValue == "O")) {

            alert("Draw! No one wins!");
            updatePlayerStats(3);
    }

}

//Not used?
function markGamePiece(index) {
    //X
    if(currentPlayer == 1) {
        //Check if the current space already has a mark
        if(gameBoard.children[index].innerHTML != "O") {
            //Mark the space with an X
            gameBoard.children[index].innerHTML = "X";
            determineIfWinner();
            //Change the current player now to 2 (0)
            currentPlayer = 2;
            playerSwitcher(currentPlayer);
        }
    }
    //O
    else {
        //Check if the current space already has a mark
        if(gameBoard.children[index].innerHTML != "X") {
            //Mark the space with a O
            gameBoard.children[index].innerHTML = "O";
            determineIfWinner();
            //Change the current player now to 1 (X)
            currentPlayer = 1;
            playerSwitcher(currentPlayer);
        }
    }
}

function updatePlayerStats(winSituation) {
    switch(winSituation) {
        case 1:
            //Player 1 won
            playerOne.increaseWin();
            playerTwo.increaseLose();
            playerOneWinLabel.innerHTML = "W: " + playerOne.getPlayerWin();
            playerTwoLoseLabel.innerHTML = "L: " + playerTwo.getPlayerLose();
            console.log(playerOne.getPlayerWin());
            console.log(playerTwo.getPlayerLose());
            gameBoard.style.setProperty("pointer-events", "none");
            break;
        case 2:
            //Player 2 won
            playerTwo.increaseWin();
            playerOne.increaseLose();
            playerTwoWinLabel.innerHTML = "W: " + playerTwo.getPlayerWin();
            playerOneLoseLabel.innerHTML = "L: " + playerOne.getPlayerLose();
            console.log(playerOne.getPlayerWin());
            console.log(playerTwo.getPlayerLose());
            gameBoard.style.setProperty("pointer-events", "none");
            break;
        case 3:
            //Draw, no winner
            playerOne.increaseDraw();
            playerTwo.increaseDraw();
            playerOneDrawLabel.innerHTML = "D: " + playerOne.getPlayerDraw();
            playerTwoDrawLabel.innerHTML = "D: " + playerTwo.getPlayerDraw();
            console.log(playerOne.getPlayerDraw());
            console.log(playerTwo.getPlayerDraw());
            gameBoard.style.setProperty("pointer-events", "none");
            break;
        default:
            console.log("Error");
    }
}
