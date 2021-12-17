import { click } from "./click.js";
import { addFlag } from "./game.js";

//**create board
export function createBoard(squares, bombAmount, width, grid, isGameOver) {
    //get shuffled game array with random bombs
    const bombsArray = Array(bombAmount).fill('bomb');
    const emptyArray = Array(width*width - bombAmount).fill('valid');
    const gameArray = emptyArray.concat(bombsArray);
    const shuffledArray = gameArray.sort(() => Math.random() -0.5);

    //for loop to append divs/create squares
    for (let i = 0; i < width * width; i++) {
        //creates a div/square
        let square = document.createElement('div');
        //sets an ID to select and manipulate div later. The 'i' in setAttribute() gives square an ID equivelant to the current iteration count.
        square.setAttribute('id', i);
        //selects the new square/div element on line 22, per new square/div element we add a class equivelant to the relevant string in the shuffledArray on line 16.
        square.classList.add(shuffledArray[i]);
        //use the grid constant to append the new child within the parent grid/div in the HTML/DOM file.
        grid.appendChild(square);
        //push the newly created square to the squares array on line 8 for later selection and manipulation
        squares.push(square);

        //**normal click
        square.addEventListener('click', function(e) {
            click(square, isGameOver, squares, width);
            console.log(square);
        });

        //cntrl and left click
        square.oncontextmenu = function(e){
            e.preventDefault();
            addFlag(square);
        }
    }
}