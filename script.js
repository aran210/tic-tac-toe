let playerX = [];
let playerO = [];
let playerXScore = 0;
let playerOScore = 0;
let startingPlayer = '';
const xStart = document.getElementById("xStart");
const oStart = document.getElementById("oStart");
const grid = document.getElementsByClassName("grid")[0];

// column wins = difference of 3
// row wins = difference of 1
/* diag wins = 1, 5, 9 or 3, 5, 7
*/

const xSelect = (event) => {
    const id = Number(event.target.id);
    playerX.push(id);
}

const oSelect = (event) => {
    const id = Number(event.target.id);
    playerO.push(id);
}

const selectStartingPlayer = (event) => {
    event.target.id === "xStart" ? startingPlayer = "X" : startingPlayer = "O";
    grid.classList.remove("hide");
}

xStart.addEventListener("click", selectStartingPlayer);
oStart.addEventListener("click", selectStartingPlayer);