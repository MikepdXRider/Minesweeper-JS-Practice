export function countNearbyBombs(square, squares, width){
    let total = 0;
    // console.log('square passing through countNearbyBombs on click', square.id);
    const squareIDInt = parseInt(square.id);
    const isLeftEdge =(square.id % width === 0);
    const isRightEdge = (square.id % width === width -1);    
    
    if (square.classList.contains('valid')) {
        //Bomb is West?
        if (!isLeftEdge && squares[squareIDInt - 1].classList.contains('bomb')){
            total ++
        }
        //Bomb is NE?
        if (square.id > 9 && !isRightEdge && squares[squareIDInt +1 -10].classList.contains('bomb')){
            total ++
        }
        //Bomb is North?
        if (square.id > 9 && squares[squareIDInt - width].classList.contains('bomb')){
            total ++
        }
        //Bomb is NW?
        if(square.id > 10 && !isLeftEdge && squares[squareIDInt - 1 - width].classList.contains('bomb')){
            total ++
        }
        //Bomb is East?
        if(!isRightEdge && squares[squareIDInt + 1].classList.contains('bomb')){
            total++
        }
        //Bomb is SW?
        if(square.id < 90 && !isLeftEdge && squares[squareIDInt - 1 + width].classList.contains('bomb')){
            total++
        }
        //Bomb is SE?
        if(square.id < 89 && !isRightEdge && squares[squareIDInt + 1 + width].classList.contains('bomb')){
            total++
        }
        //Bomb is South?
        if (square.id < 90 && squares[squareIDInt + width].classList.contains('bomb')){
            total++
        }
        square.setAttribute('totalNearbyBombs', total);
    }
}

