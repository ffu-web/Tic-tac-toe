const selectBox = document.querySelector(".select-box"), /* first box contains wich player to select*/
selectBtnX = selectBox.querySelector(".options .playerX"),
selectBtnO = selectBox.querySelector(".options .playerO"),
playBoard = document.querySelector(".play-board"),/*<!-- holds the window appears when the game active-->*/
players = document.querySelector(".players"),
allBox = document.querySelectorAll("section span"), /* holds the 9 buttons in the active game */
resultBox = document.querySelector(".result-box"), /* holds the popup when the game ends */
wonText = resultBox.querySelector(".won-text"), /* pop-ups the the winner is .... */
replayBtn = resultBox.querySelector("button"); /* holds replay the game button */


window.onload = ()=>{
    for (let i = 0; i < allBox.length; i++) {
       allBox[i].setAttribute("onclick", "clickedBox(this)","player2clicked(this)");
    }
}

/* Select which player you will be ---- Player(X) turn */
selectBtnX.onclick = ()=>{ 
    selectBox.classList.add("hide");
    playBoard.classList.add("show");
}
/* Select which player you will be ---- Player(O) turn */
selectBtnO.onclick = ()=>{ 
    selectBox.classList.add("hide"); /* Hides th e first windows -- player selection */
    playBoard.classList.add("show"); /* shows the second windows --- Active game */
    players.setAttribute("class", "players active player1"); /* Added  */
}
let playerXIcon = "fas fa-times",
playerOIcon = "far fa-circle",
player1Sign = "X"
player2Sign ="O"
// runBot = true;
/* Show hide icons when clicked */
function clickedBox(element){
    if(players.classList.contains("player1")){
        player1Sign = "O";
        element.innerHTML = `<i class="${playerOIcon}"></i>`;
        element.style="color:rgb(10,250,20,0.7";
        players.classList.remove("active");
        element.setAttribute("id", player1Sign);
    }
    else{
        element.innerHTML = `<i class="${playerXIcon}"></i>`;
        element.setAttribute("id", player1Sign);
        players.classList.add("active");
    }
}
    /* trying to add second player --- live player */
function player2clicked(element){
    if(players.classList.contains("player2")){
        player2Sign = "O";
        element.innerHTML = `<i class="${playerXIcon}"></i>`;
        element.style="color:rgb(10,250,20,0.7";
        players.classList.remove("active");
        element.setAttribute("id", player2Sign);
    }
    else{
        element.innerHTML = `<i class="${playerXIcon}"></i>`;
        element.setAttribute("id", player2Sign);
        players.classList.add("active");
    }
}
//     selectWinner();
//     element.style.pointerEvents = "none";
//     playBoard.style.pointerEvents = "none";
//     let randomTimeDelay = ((Math.random() * 1000) + 200).toFixed();
//     setTimeout(()=>{
//         bot(runBot);
//     }, randomTimeDelay);
// }

/* Automatic player -- by array indexs*/
// function bot(){
//     let array = [];
//     if(runBot){
//         playerSign = "O";
//         for (let i = 0; i < allBox.length; i++) {
//             if(allBox[i].childElementCount == 0){
//                 array.push(i);
//             }
//         }
//         let randomBox = array[Math.floor(Math.random() * array.length)];
//         if(array.length > 0){
//             if(players.classList.contains("player")){ 
//                 playerSign = "X";
//                 allBox[randomBox].innerHTML = `<i class="${playerXIcon}"></i>`;
//                 allBox[randomBox].setAttribute("id", playerSign);
//                 players.classList.add("active");
//             }
//             else{
//                 allBox[randomBox].innerHTML = `<i class="${playerOIcon}"></i>`;
//                 allBox[randomBox].style="color:rgb(10,250,20,0.7";
//                 players.classList.remove("active");
//                 allBox[randomBox].setAttribute("id", playerSign);
//             }
//             selectWinner();
//         }
//         allBox[randomBox].style.pointerEvents = "none";
//         playBoard.style.pointerEvents = "auto";
//         playerSign = "X";
//     }
// }

/* check  */
function getIdVal(classname){
    return document.querySelector(".box" + classname).id; /* will add .box class before classname */
}
function checkIdSign(val1, val2, val3, sign){ 
    if(getIdVal(val1) == sign && getIdVal(val2) == sign && getIdVal(val3) == sign){
        return true;
    }
}


/* processing winning --- then asigning to player */
function selectWinner(){
    if(checkIdSign(1,2,3,playerSign) || checkIdSign(4,5,6, playerSign) || checkIdSign(7,8,9, playerSign) || checkIdSign(1,4,7, playerSign) || checkIdSign(2,5,8, playerSign) || checkIdSign(3,6,9, playerSign) || checkIdSign(1,5,9, playerSign) || checkIdSign(3,5,7, playerSign)){
        runBot = false;
        bot(runBot);
        setTimeout(()=>{
            resultBox.classList.add("show");
            playBoard.classList.remove("show");
        }, 700);
        // wonText.innerHTML = `Player <p>${playerSign}</p> won the game!`;
        if(playerSign=="X"){
        document.getElementById("winner").textContent="Red is the winner!"
    }
    else{
        document.getElementById("winner").textContent="Green is the winner !"
    }
    }
    else{
        if(getIdVal(1) != "" && getIdVal(2) != "" && getIdVal(3) != "" && getIdVal(4) != "" && getIdVal(5) != "" && getIdVal(6) != "" && getIdVal(7) != "" && getIdVal(8) != "" && getIdVal(9) != ""){
            runBot = false;
            bot(runBot);
            setTimeout(()=>{
                resultBox.classList.add("show");
                playBoard.classList.remove("show");
            }, 700);
            document.getElementById("winner").textContent = "There is no winner !";
        }
    }
}

/* holds replay button at the end of the game.------REMACH */
replayBtn.onclick = ()=>{
    window.location.reload();
}