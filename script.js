//p
//game controller
//gameboard
//display controller
const player = (name, marker) => {
    return { name, marker}
} 

const gameController = (() => {
    const player1 = player("Player 1", "X")
    const player2 = player("Player 2", "O")
    let currentPlayer = player1

    const switchPlayer = () => {
        if (currentPlayer === player1) {
            currentPlayer = player2
        } else {
            currentPlayer = player1
        }
    }
    /* si vas a necesitar usar esa variable en otro modulo, tendras que leer la 
    variable en una function expression, con el nombre de get"var", para poder
    enviarla a otros modulos*/
    const getCurrentPlayer = () => currentPlayer

    const resetPlayers = () => {
        currentPlayer = player1;
    }
    /* like you see, every statement is in a function expression */ 
    const getPlayer1 = () => player1
    const getPlayer2 = () => player2

    /* just return the an object with the only functions that you will use*/
    return { switchPlayer, getCurrentPlayer, resetPlayers, getPlayer1, getPlayer2};
})();

const gameBoard = (() => {
    const board = ["", "", "", "", "", "", "", "", ""]

    const checkResult = () => {
        const linesToCheck = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]             // Diagonals
        ];
        for (const line of linesToCheck) {
            const [a, b, c] = line;
            //si no es falsy
            /*
            En JavaScript, la expresión board[a] en una condición se evalúa 
            como verdadera (true) si el valor en la posición a del array board 
            es "truthy". La verdad o falsedad de una expresión en JavaScript 
            no se limita estrictamente al valor booleano true o false. 
            La expresión se considera "truthy" si puede evaluarse como verdadera.
            */
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                let winner;
                if (board[a] === "X") {
                    winner = gameController.getPlayer1();
                    console.log("player 1 wins")
                } else {
                    winner = gameController.getPlayer2();
                    console.log("player 2 wins")
                }
                return winner;
            }
        }
        if (!board.includes("")) {
            return "tie";
        }
        // No winner yet
        // no hay valor valido o especifico // ausencia de valor especifico
        return null;       
    };

    const resetBoard = () => {
        board.fill("");
    };
    /* only return the functions and variables that we're going to use outside the
    module*/
    return { board, checkResult, resetBoard}
})();

const displayController = (() => {
    const spaces = document.querySelectorAll(".space")
    const currentTurn = document.querySelector(".current-turn")
    const finalResult = document.querySelector(".result-title")
    const playAgain = document.querySelector(".play-again")
    const resetButton = document.createElement("button")
    resetButton.classList.add("reset-button")
    let gameEnded = false;

    /* arr.forEach((value, index)) {      
    } */
    const render = () => {
        // for each para tierear sobre cada elemento del array
        // value = current value of the element in the array
        // index = index of the current element in the array
        gameBoard.board.forEach((value, index) => {
            // actualiza el contenido de texto en el html correspondiente al espacio
            // del tablero con el valor actual del array
            /* spaces[index]: 
            Accede al elemento del tablero en el HTML correspondiente al índice actual. */
            spaces[index].textContent = value;
        });
    };

    const currentTurnInfo = () => {
        const currentPlayer = gameController.getCurrentPlayer();
        if (currentPlayer) {
            currentTurn.textContent = `${currentPlayer.name} (${currentPlayer.marker}) turn`
        }
    }

    const handleClick = (index) => {
        if (gameEnded) {
            return
        }
        // we are going to use it
        const currentPlayer = gameController.getCurrentPlayer();
        if (gameBoard.board[index] === "" && currentPlayer) {
            gameBoard.board[index] = currentPlayer.marker;
            gameController.switchPlayer();
            render();
            //
            currentTurnInfo();
            const result = gameBoard.checkResult();
            if (result) {
                gameEnded = true
                if (result === "tie") {
                    finalResult.textContent = "It's a tie!";
                } else {
                    finalResult.textContent = `${result.name} (${result.marker}) wins`
                }
                playAgain.appendChild(resetButton);
                resetButton.textContent = "Play Again?";
            }       
        }
    }
    const reset = () => {
        //call to all reset functions
        gameBoard.resetBoard();
        gameController.resetPlayers();
        finalResult.textContent = "";
        gameEnded = false
        playAgain.removeChild(resetButton);
        render();
        currentTurn.textContent = "Player 1 (X) turn"
    };
    resetButton.addEventListener("click", reset)
    // call to handleclick
    spaces.forEach((space, index) => {
        /* Define una función de flecha que llama a la función handleClick con el 
        índice correspondiente cuando el espacio es clicado. */
        space.addEventListener("click", () => handleClick(index))
    });
    //exponer la funcion para uso externo(encapsulamiento, diseno modular)
    return { render }
})();