let playerX = [];
let playerO = [];
let playerXScore = 0;
let playerOScore = 0;
let turn = '';
const xStart = document.getElementById("xStart");
const oStart = document.getElementById("oStart");
const grid = document.getElementsByClassName("grid-container")[0];
const startingInfo = document.getElementById("choose-starter");

// column wins = difference of 3
// row wins = difference of 1
/* diag wins = 1, 5, 9 or 3, 5, 7
*/

const selectSquare = (event) => {
    const squareId = Number(event.target.id);
    const playerId = turn;
    const square = document.getElementById(squareId);
    if (square.classList.contains("free")) {
        console.log(`${turn} picked ${squareId}`);
        updateSquare(square, playerId);
        turn = nextTurn();
    }
    else {
        alert("Square already taken, pick another.")
    }
}

const updateSquare = (square, playerId) =>  {
    square.innerHTML = playerId;
    square.classList.remove("free");
}

const nextTurn = () => turn==="X" ? turn="O" : turn="X";

const selectStartingPlayer = (event) => {
    event.target.id === "xStart" ? turn = "X" : turn = "O";
    grid.classList.remove("hide");
    startingInfo.classList.add("hide");
    console.log(`${turn} starts.`);
}

xStart.addEventListener("click", selectStartingPlayer);
oStart.addEventListener("click", selectStartingPlayer);
grid.addEventListener("click", selectSquare);