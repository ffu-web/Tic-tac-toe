var squares = [];
var xIsNext = false;
var winner = null;
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function newGame() {
    squares = Array(9).fill(null);
    xIsNext = true;
    winner = null;

    //reset the game board
    squares.forEach(function (value, index) {
        document.getElementById('square' + index).innerText = value;
        document.getElementById('square' + index).classList.remove('playerX');
        document.getElementById('square' + index).classList.remove('playerO');
        document.getElementById('square' + index).classList.remove('highlight');
    })

    document.getElementById('winner').innerText = '';
}

function getPlayer() {
    return xIsNext ? 'X' : 'O';
}

function makeMove(index) {
    if (squares[index] === null && winner === null) {
        document.getElementById('square' + index).innerText = getPlayer();
        document.getElementById('square' + index).classList.add('player' + getPlayer())
        squares[index] = getPlayer();
        xIsNext = !xIsNext;
        winner = selectWinner();
        if (winner !== null) {
            document.getElementById('winner').innerText = 'Congratz! Player ' + winner + ' Wins!';
        }
    }
}

function selectWinner() {
    var _winner = null;
    winningConditions.forEach(function (wc, index) {
        if (squares[wc[0]] !== null && squares[wc[0]] === squares[wc[1]] && squares[wc[0]] === squares[wc[2]]) {
            _winner = squares[wc[0]];
            document.getElementById('square' + wc[0]).classList.add('highlight');
            document.getElementById('square' + wc[1]).classList.add('highlight');
            document.getElementById('square' + wc[2]).classList.add('highlight');
        }
    })
    return _winner;
}