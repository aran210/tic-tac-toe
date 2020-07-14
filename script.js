let playerX = [];
let playerO = [];
let turn = '';
let turnCount = 0;
const xStart = document.getElementById("xStart");
const oStart = document.getElementById("oStart");
const grid = document.getElementsByClassName("grid-container")[0];
const startingInfo = document.getElementById("choose-starter");

const selectStartingPlayer = (event) => {
    event.target.id === "xStart" ? turn = "X" : turn = "O";
    grid.classList.remove("hide");
    startingInfo.classList.add("hide");
    turnCount = 0
    console.log(`${turn} starts.`);
}

const selectSquare = (event) => {
    const squareId = Number(event.target.id);
    const playerId = turn;
    const square = document.getElementById(squareId);

    if (square.classList.contains("free")) {
        playerId==="X" ? playerX.push(squareId) : playerO.push(squareId);
        updateSquare(square, playerId);
        checkWinner();
        turnCount++
        turnCount===9 ? gameOver() : turn = nextTurn();
        console.log(turnCount);
    }
    else {
        alert("Square already taken, pick another.")
    }
}

const updateSquare = (square, playerId) =>  {
    square.innerHTML = playerId;
    square.classList.remove("free");
}

const checkWinner = () => {
    const didPlayerXWin = checkRow(playerX) || checkCol(playerX) || checkDiag(playerX);
    const didPlayerOWin = checkRow(playerO) || checkCol(playerO) || checkDiag(playerO);
    console.log("X champ:", didPlayerXWin);
    console.log("O champ:", didPlayerOWin);
    if (didPlayerXWin) gameOver("X Wins!");
    if (didPlayerOWin) gameOver("O Wins!");
}

const checkRow = (player) =>  {
    let a = 0, b = 0, c = 0;
    for (var i = 0; i < player.length; i++) {
        player[i] === 1 ? a++ : null;
        player[i] === 2 ? a++ : null;
        player[i] === 3 ? a++ : null;
        player[i] === 4 ? b++ : null;
        player[i] === 5 ? b++ : null;
        player[i] === 6 ? b++ : null;
        player[i] === 7 ? c++ : null;
        player[i] === 8 ? c++ : null;
        player[i] === 9 ? c++ : null;
    }
    return (a===3 || b===3 || c===3);
}

const checkCol = (player) =>  {
    let a = 0, b = 0, c = 0;
    for (var i = 0; i < player.length; i++) {
        player[i] === 1 ? a++ : null;
        player[i] === 2 ? b++ : null;
        player[i] === 3 ? c++ : null;
        player[i] === 4 ? a++ : null;
        player[i] === 5 ? b++ : null;
        player[i] === 6 ? c++ : null;
        player[i] === 7 ? a++ : null;
        player[i] === 8 ? b++ : null;
        player[i] === 9 ? c++ : null;
    }
    return (a===3 || b===3 || c===3);
}

const checkDiag = (player) =>  {
    let a = 0, b = 0, c = 0;
    for (var i = 0; i < player.length; i++) {
        player[i] === 1 ? a++ : null;
        player[i] === 3 ? b++ : null;
        player[i] === 5 ? (a++, b++) : null;
        player[i] === 7 ? b++ : null;
        player[i] === 9 ? a++ : null;
    }
    return (a===3 || b===3);
}

// const checkRow = (player) => player.includes((1 && 2 && 3) || (4 && 5 && 6) || (7 && 8 && 9));

// const checkCol = (player) => player.includes((1 && 4 && 7) || (2 && 5 && 8) || (3 && 6 && 9));

// const checkDiag = (player) => player.includes((1 && 5 && 9) || (3 && 5 && 7));

const nextTurn = () => turn==="X" ? turn="O" : turn="X";

const gameOver = (outcome="Tie!") => {
    alert(`Game Over! ${outcome}`);
    resetBoard();
}

const resetBoard = () => {
    for (var i = 1; i < 10; i++) {
        const square = document.getElementById(i);
        square.innerHTML = '';
        square.classList.remove("free");
        square.classList.add("free");
    }

    playerX = [];
    playerO = [];
    turn = '';
    turnCount = 0;

    grid.classList.add("hide");
    startingInfo.classList.remove("hide");
}


xStart.addEventListener("click", selectStartingPlayer);
oStart.addEventListener("click", selectStartingPlayer);
grid.addEventListener("click", selectSquare);