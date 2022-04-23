const PLAYER_X_CLASS = 'x'
const PLAYER_O_CLASS ='O'

const WINNING_COMBINATIONS =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

const cellElements = document.querySelectorAll('[data-cell]')
const boardElement = document.getElementById('board')
const winningMessageElement = document.getElementById('winningMessage')
const restartButton = getElementById('restartButton')
const winningMessageTextElement = document.getElementById('winningmessageText')

let isPlayer_O_turn = false;

function startGame(){
    isPlayer_O_turn = false
    cellElements.forEach(cell=>{
        cell.classList.remove(PLAYER_X_CLASS)
        cell.classList.remove(PLAYER_O_CLASS)
        cell.removeEventListener('click', handleCellClick)
        cell.addEventListener
    })
    setBoardHoverClass()
    winningMessageElement.classList.remove('show')
}

function handleCellClick(e){
    const cell = e.target
    const currentClass = isPlayer_O_turn ? PLAYER_O_CLASS : PLAYER_X_CLASS
    placeMark(cell,currentClass)
    if(checkWin(currentClass)){
        endGame(false)
    }else if(isDraw()){
        endGame(true)
    }else{
        swapTurns()
        setBoardHoverClass()
    }
}

function endGame(draw){
    if(draw){
        winningMessageTextElement.innerText ="It is a draw!"
    }else{
        winningMessageTextElement.innerText = `Player with ${isPlayer_Turn ? "O's": "X's"} wins!!`
    }
    winningMessageElement.classList.add('show')
}

function isDraw(){
    return [...cellElements].every(cell=>{
        return cell.classList.contains(PLAYER_X_CLASS) || cell.classList.contains(PLAYER_O_CLASS)
    })
}

