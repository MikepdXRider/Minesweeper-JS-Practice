//check for win
export function checkForWin(squares, bombAmount) {
    let matches = 0
    for (let i = 0; i < squares.length; i++){
        if (squares[i].classList.contains('flag') && squares[i].classList.contains('bomb')){
            matches ++
        }
        if (matches === bombAmount){
            console.log('YOU WON!');
        }
    }
}