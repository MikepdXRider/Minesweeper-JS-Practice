import { countNearbyBombs } from "./count-nearby-bombs.js";
import { gameOver } from "./game.js"
import { clickNearbySquares } from "./click-nearby-squares.js";


//click on square actions
export function click(square, isGameOver, squares, width) {
        
    let currentId = square.id;
    // if game is over, click does nothing.
    if(isGameOver) {
        return;
    };
    // if square is already checked or has a flag, click does nothing. 
    if (square.classList.contains('checked') || square.classList.contains('flag')){
        return;
    };
    // if square contains a bomb, gameover!
    if(square.classList.contains('bomb')){
        gameOver(square); //STYLE THIS LATER!!!
    } else {
        countNearbyBombs(square, squares, width);
        // otherwise...
        let total = square.getAttribute('totalNearbyBombs');
        console.log('total', total)
        // if number of bombs is greater than 0....
        if (total != 0) {
            // display the number of bombs near it.
            square.innerHTML = total;
            // add checked
            square.classList.add('checked');
            return;
        }
        clickNearbySquares(square, currentId, width, isGameOver, squares);
    }
    square.classList.add('checked');
}   