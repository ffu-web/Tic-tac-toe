//X => <i class="fas fa-times"></i>
//O => <i class="fas fa-circle-notch"></i>

// Selecting All "Starting Page" Tags
let startingPage = document.querySelector("#staringPage");
let choose = document.querySelectorAll(".choose");

// Selecting All "Main Page" Tags
let mainPage = document.querySelector("#mainPage");
let showChange = document.querySelector("#showChange");
let boxes = document.querySelectorAll(".boxes");

// Selecting All "Winner Page" Tags
let winner = document.querySelector("#winner");
let winnerName = document.querySelector("#winnerName");
let quit = document.querySelector("#quit");

// How Can We Change Turns
// False => X's Turn
// True => O's Turn
let changeTurn = null;


// Select Which You Want To Be>
// X or O
choose.forEach(chooseNow => {
    chooseNow.addEventListener("click", () => {
        if (chooseNow.id === "playerx") {
            changeTurn = false;
            // console.log(changeTurn);
            showChange.style.left = `0px`;
        } else {
            changeTurn = true;
            // console.log(changeTurn);
            showChange.style.left = `160px`;
        }
        startingPage.style.display = "none";
        mainPage.style.display = "block";
    })
});
boxes.forEach(items => {
    items.addEventListener("click", () => {
        // Add "X" Icon If "ChangeTurn" = False
        // Add "O" Icon If "ChangeTurn" = True
        if (changeTurn == false) {
            items.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg>`;
            items.id = "X";
            items.style.pointerEvents = "none";
            showChange.style.left = `160px`;
//


            // change The "changeTurn" Value False Into True
            changeTurn = true;
        } else {
            items.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d="M288 39.056v16.659c0 10.804 7.281 20.159 17.686 23.066C383.204 100.434 440 171.518 440 256c0 101.689-82.295 184-184 184-101.689 0-184-82.295-184-184 0-84.47 56.786-155.564 134.312-177.219C216.719 75.874 224 66.517 224 55.712V39.064c0-15.709-14.834-27.153-30.046-23.234C86.603 43.482 7.394 141.206 8.003 257.332c.72 137.052 111.477 246.956 248.531 246.667C393.255 503.711 504 392.788 504 256c0-115.633-79.14-212.779-186.211-240.236C302.678 11.889 288 23.456 288 39.056z"/></svg>`;
            items.id = "O";
            items.style.pointerEvents = "none";
            showChange.style.left = `0px`;

            // change The "changeTurn" Value False Into True
            changeTurn = false;
        }
        winningFunc();
        drawFunc();
    })
})
// All Possible Winning Combinations
let winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

let winningFunc = () => {
    for (let a = 0; a <= 7; a++) {
        let b = winningCombinations[a];
        // console.log(b);

        if (boxes[b[0]].id == "" || boxes[b[1]].id == "" || boxes[b[2]].id == "") {
            continue;
        } else if (boxes[b[0]].id == "X" && boxes[b[1]].id == "X" && boxes[b[2]].id == "X") {
            // console.log("X is The Winner");

            // Adding Winner text
            winnerName.innerText = `Player X Win The Game!`;

            // show "Winner Page" & Hide "Mai Page"
            mainPage.style.display = "none";
            winner.style.display = "block";
        } else if (boxes[b[0]].id == "O" && boxes[b[1]].id == "O" && boxes[b[2]].id == "O") {
            // console.log("O is The Winner");

            // Adding Winner text
            winnerName.innerText = `Player O Win The Game!`;

            // show "Winner Page" & Hide "Mai Page"
            mainPage.style.display = "none";
            winner.style.display = "block";
        } else {
            continue;
        }
    }
}

// Match Draw Function
let drawFunc = () => {
    if (boxes[0].id != "" && boxes[1].id != "" &&
        boxes[2].id != "" && boxes[3].id != "" &&
        boxes[4].id != "" && boxes[5].id != "" &&
        boxes[6].id != "" && boxes[7].id != "" && boxes[8].id != "") {
        // Adding "Draw" text
        winnerName.innerText = `Match Draw!`;

        // show "Winner Page" & Hide "Mai Page"
        mainPage.style.display = "none";
        winner.style.display = "block";
    }
}
// Reset Game
quit.addEventListener("click", () => {
    window.location.reload();
})