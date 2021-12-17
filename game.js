import { createBoard } from "./create-board.js";
import {checkForWin} from "./check-for-win.js";

let width = 10;
let bombAmount = 20;
let flags = 0;
let squares = [];
let isGameOver = false;

//DOMContentLoaded allows the HTML file to fully load before running the JS. One can also do this by placing the <script> at the bottom of HTML file.
document.addEventListener('DOMContentLoaded', () => {
    //cache - set variable grid to select the .grid class in the HTML/DOM file
    const grid = document.querySelector('.grid');
    //cache - set variable width to 10 squares
    createBoard(squares, bombAmount, width, grid, isGameOver);
})

//add flag with right click
export function addFlag(square){
    if(isGameOver){
        return;
    }
    if(!square.classList.contains('checked') && (flags < bombAmount)) {
        if(!square.classList.contains('flag')){
            square.classList.add('flag');
            square.innerHTML ='🚩'
            flags ++;
            checkForWin(squares, bombAmount);
        } else {
            square.classList.remove('flag');
            square.innerHTML = '';
            flags --;
        }
    }
}

export function gameOver(square) {
    console.log('BOOM! Game Over!');
    isGameOver = true;

    //show ALL the bombs
    squares.forEach(square => {
    if (square.classList.contains('bomb')) {
        square.innerHTML = '💣'
    }   
    })
}