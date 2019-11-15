// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.
var turn = "x";

function setTurn() {
    var turnElement = document.getElementById("turn");
    turnElement.innerText = "It is player " + turn + "'s turn";
}

function setWinner(winner) {
    var turnElement = document.getElementById("turn");
    turnElement.innerText = "Player " + winner + " wins!";
}

function checkForWinner() {
    var cells = document.getElementsByClassName("square");
    for (var i = 0; i < 9; i += 3) {
        if (cells[0 + i].innerText !== "" && cells[0 + i].innerText === cells[1 + i].innerText && cells[1 + i].innerText === cells[2 + i].innerText) {
            setWinner(cells[0 + i].innerText);
            return true;
        }
    }
    for (var j = 0; j < 9; j += 3) {
        if (cells[0 + j].innerText !== "" && cells[0 + j].innerText === cells[3 + j].innerText && cells[3 + j].innerText === cells[6 + j].innerText) {
            setWinner(cells[0 + j].innerText);
            return true;
        }
    }
    if (cells[0].innerText !== "" && cells[0].innerText === cells[4].innerText && cells[4].innerText === cells[8].innerText) {
        setWinner(cells[0].innerText);
        return true;
    }
    if (cells[2].innerText !== "" && cells[2].innerText === cells[4].innerText && cells[4].innerText === cells[6].innerText) {
        setWinner(cells[2].innerText);
        return true;
    }
}

function OnClick(event) {
    event.preventDefault();
    if (!event.target.innerText) {
        event.target.innerText = turn;
        if (turn === "x") turn = "o";
        else turn = "x";
        if (!checkForWinner()) setTurn();
    }
}

var cells = document.getElementsByClassName("square");
for (i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", OnClick);
}

setTurn();

var form = document.getElementById("board");
var cells = document.getElementsByClassName("cell");
for (var i = 0; i < cells.Length; i++) {
    cells[i].addEventListener(event => {
        event.preventDefault();
    })
}

var dragging;
var squares = document.getElementsByClassName("square");
for (var i = 0; i < squares.length; i++) {
    square[i].addEventListener('dragenter', onDragEnter);
    squares[i].addEventListener('drop', onDrop);
    squares[i].addEventListener('dragend', onDragEnd);
    squares[i].addEventListener('dragstart', onDragStart)
    squares[i].addEventListener('dragleave', onDragLeave);
}

function onDragEnter(event) {
    if (event.target.children.length > 0) return;
    if (event.target.classList.contains("checker")) return;
    if (event.target.classList.contains("red")) return;
    event.preventDefault();
    event.target.style.backgroundColor = "yellow";
}

function onDrop(event) {
    console.log(event);
}

function onDragEnd(event) {
    console.log(event);

}

function onDragStart(event) {
    dragging = {
        x: event.target.dataset.x,
        y: event.target.dataset.y
    }
    console.log(event);
}

function onDragLeave(event) {
    event.target.style.backgroundColor = null;
}
