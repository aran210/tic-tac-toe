let playerX = [];
let playerO = [];
let playerXScore = 0;
let playerOScore = 0;

const grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

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


addEventListener("click", xSelect);
addEventListener("click", oSelect);