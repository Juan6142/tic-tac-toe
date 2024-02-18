//gameboard FF

//turn
let playerOneTurn = true
let playerTwoTurn = false
//selection
let playerOneSelection = ""
let playerTwoSelection = ""
//spaces
let container1 = ""
let container2 = ""
let container3 = ""
let container4 = ""
let container5 = ""
let container6 = ""
let container7 = ""
let container8 = ""
let container9 = ""
//select
const space1 = document.querySelector(".cont1")
const space2 = document.querySelector(".cont2")
const space3 = document.querySelector(".cont3")
const space4 = document.querySelector(".cont4")
const space5 = document.querySelector(".cont5")
const space6 = document.querySelector(".cont6")
const space7 = document.querySelector(".cont7")
const space8 = document.querySelector(".cont8")
const space9 = document.querySelector(".cont9")
const finalResult = document.querySelector(".result-title")
//reset
const playAgain = document.querySelector(".play-again")
const resetButton = document.createElement("button")

space1.addEventListener("click", e => {
    if (playerOneTurn && space1.textContent === "") {
        space1.textContent = "X"
        container1 = "X"
        playerOneTurn = false
        playerTwoTurn = true
    } else if (playerTwoTurn && space1.textContent === "") {
        space1.textContent = "o"
        playerTwoTurn = false
        playerOneTurn = true    
    }
    ticTacToeResult()
})

space2.addEventListener("click", e => {
    if (playerOneTurn && space2.textContent === "") {
        space2.textContent = "X"
        container2 = "X"
        playerOneTurn = false
        playerTwoTurn = true
    } else if (playerTwoTurn && space2.textContent === "") {
        space2.textContent = "o"
        container2 = "o"
        playerTwoTurn = false
        playerOneTurn = true    
    }
    ticTacToeResult()
})

space3.addEventListener("click", e => {
    if (playerOneTurn && space3.textContent === "") {
        space3.textContent = "X"
        container3 = "X"
        playerOneTurn = false
        playerTwoTurn = true
    } else if (playerTwoTurn && space3.textContent === ""){
        space3.textContent = "o"
        container3 = "o"
        playerTwoTurn = false
        playerOneTurn = true    
    }
    ticTacToeResult()
})

space4.addEventListener("click", e => {
    if (playerOneTurn && space4.textContent === "") {
        space4.textContent = "X"
        container4 = "X"
        playerOneTurn = false
        playerTwoTurn = true
    } else if (playerTwoTurn && space4.textContent === "") {
        space4.textContent = "o"
        container4 = "o"
        playerTwoTurn = false
        playerOneTurn = true    
    }
    ticTacToeResult()
})

space5.addEventListener("click", e => {
    if (playerOneTurn && space5.textContent === "") {
        space5.textContent = "X"
        container5 = "X"
        playerOneTurn = false
        playerTwoTurn = true
    } else if (playerTwoTurn && space5.textContent === ""){
        space5.textContent = "o"
        container5 = "o"
        playerTwoTurn = false
        playerOneTurn = true    
    }
    ticTacToeResult()
})

space6.addEventListener("click", e => {
    if (playerOneTurn && space6.textContent === "") {
        space6.textContent = "X"
        container6 = "X"
        playerOneTurn = false
        playerTwoTurn = true
    } else if (playerTwoTurn && space6.textContent === "") {
        space6.textContent = "o"
        container6 = "o"
        playerTwoTurn = false
        playerOneTurn = true    
    }
    ticTacToeResult()
})

space7.addEventListener("click", e => {
    if (playerOneTurn && space7.textContent === "") {
        space7.textContent = "X"
        container7 = "X"
        playerOneTurn = false
        playerTwoTurn = true
    } else if (playerTwoTurn && space7.textContent === ""){
        space7.textContent = "o"
        container7 = "o"
        playerTwoTurn = false
        playerOneTurn = true    
    }
    ticTacToeResult()
})

space8.addEventListener("click", e => {
    if (playerOneTurn && space8.textContent === "") {
        space8.textContent = "X"
        container8 = "X"
        playerOneTurn = false
        playerTwoTurn = true
    } else if (playerTwoTurn && space8.textContent === ""){
        space8.textContent = "o"
        container8 = "o"
        playerTwoTurn = false
        playerOneTurn = true    
    }
    ticTacToeResult()
})

space9.addEventListener("click", e => {
    if (playerOneTurn && space9.textContent === "") {
        space9.textContent = "X"
        container9 = "X"
        playerOneTurn = false
        playerTwoTurn = true
    } else if (playerTwoTurn && space9.textContent === "") {
        space9.textContent = "o"
        container9 = "o"
        playerTwoTurn = false
        playerOneTurn = true    
    }
    ticTacToeResult()
})

function ticTacToeResult() {
    console.log("checking result")
    if (container1 === "X" && container2 === "X" && container3 === "X" 
    || container4 === "X" && container5 === "X" && container6 === "X" 
    || container7 === "X" && container8 === "X" && container9 === "X"
    || container3 === "X" && container5 === "X" && container7 === "X"
    || container1 === "X" && container4 === "X" && container7 === "X"
    || container2 === "X" && container5 === "X" && container8 === "X"
    || container3 === "X" && container6 === "X" && container9 === "X"
    || container1 === "X" && container5 === "X" && container9 === "X") {
        finalResult.textContent = "Player1 (X) wins"
        console.log("Player1 (X) wins")
        resetButton.classList.add("reset-button")
        playAgain.appendChild(resetButton)
        resetButton.textContent = "Play Again?"
    } else if 
       (container1 === "o" && container2 === "o" && container3 === "o" 
    || container4 === "o" && container5 === "o" && container6 === "o" 
    || container7 === "o" && container8 === "o" && container9 === "o"
    || container3 === "o" && container5 === "o" && container7 === "o"
    || container1 === "o" && container4 === "o" && container7 === "o"
    || container2 === "o" && container5 === "o" && container8 === "o"
    || container3 === "o" && container6 === "o" && container9 === "o"
    || container1 === "o" && container5 === "o" && container9 === "o") {
        finalResult.textContent = "Player2 (o) wins"
        console.log("Player2 (o) wins")
        resetButton.classList.add("reset-button")
        playAgain.appendChild(resetButton)
        resetButton.textContent = "Play Again?"
    }    
}

resetButton.addEventListener("click", reset)

function reset() {
    container1 = ""
    container2 = ""
    container3 = ""
    container4 = ""
    container5 = ""
    container6 = ""
    container7 = ""
    container8 = ""
    container9 = ""
    space1.textContent = ""
    space2.textContent = ""
    space3.textContent = ""
    space4.textContent = ""
    space5.textContent = ""
    space6.textContent = ""
    space7.textContent = ""
    space8.textContent = ""
    space9.textContent = ""
    playerOneTurn = true
    playerTwoTurn = false

    finalResult.textContent = ""
    playAgain.removeChild(resetButton)
}
