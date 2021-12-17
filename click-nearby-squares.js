import { click } from "./click.js"

//check neigboring squares once square is clicked.
export function clickNearbySquares(square, currentId, width, isGameOver, squares){
    const isLeftEdge = (currentId % width === 0)
    const isRightEdge = (currentId % width === width -1)

    setTimeout(() => {
        //Check square to West
        if (!isLeftEdge) {
            const newId = squares[parseInt(currentId) -1].id
            const newSquare = document.getElementById(newId) // <--- Identify this and follow it through the engine.
            click(newSquare, isGameOver, squares, width)
        }
        //Check square to NE
        if (currentId > 9 && !isRightEdge){
            const newId = squares[parseInt(currentId) +1 -width].id
            const newSquare = document.getElementById(newId)
            click(newSquare, isGameOver, squares, width);
        }
        //Check square to North
        if (currentId > 9){
            const newId = squares[parseInt(currentId) -width].id // keep an eye on this line.
            const newSquare = document.getElementById(newId)
            click(newSquare, isGameOver, squares, width);
        } 
        //Check square to NW
        if (currentId > 10 && !isLeftEdge){
            const newId = squares[parseInt(currentId) -1 -width].id
            const newSquare = document.getElementById(newId)
            click(newSquare, isGameOver, squares, width);
        }
        //Check square to East                       
        if (!isRightEdge){
            const newId = squares[parseInt(currentId) +1].id
            const newSquare = document.getElementById(newId)
            click(newSquare, isGameOver, squares, width);
        }
        //Check square to SW
        if (currentId < 90 && !isLeftEdge){
            const newId = squares[parseInt(currentId) -1 +width].id
            const newSquare = document.getElementById(newId)
            click(newSquare, isGameOver, squares, width);
        }
        //Check square to SE
        if (currentId < 89 && !isRightEdge){
            const newId = squares[parseInt(currentId) +1 +width].id
            const newSquare = document.getElementById(newId)
            click(newSquare, isGameOver, squares, width);
        }
        //Check square to South    
        if (currentId < 90){
            const newId = squares[parseInt(currentId) +width].id
            const newSquare = document.getElementById(newId)
            click(newSquare, isGameOver, squares, width);
        }                                                                
    }, 10)
}