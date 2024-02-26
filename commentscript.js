//players
const player = (name, marker) => {
    return {name, marker};
};

//gamecontroller
const gameController = (() => {
    const player1 = player("Player1", "X");
    const player2 = player("Player2", "O");
    let currentPlayer = player1;
  /*const switchPlayer = () => {
        if (currentPlayer === player1) {
            currentPlayer = player2;
        } else {
            currentPlayer = player1;
        }
    };
    */
    const switchPlayer = () => {
        currentPlayer = currentPlayer === player1 ? player2 : player1;
    };

    const getCurrentPlayer = () => currentPlayer;

    const resetPlayers = () => {
        currentPlayer = player1;
    };

    const getPlayer1 = () => player1;
    const getPlayer2 = () => player2;

    return { switchPlayer, getCurrentPlayer, resetPlayers, getPlayer1, getPlayer2 };
})();

//gameboard
const ticTacToe = (() => {
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
    return { board, checkResult, resetBoard} 
})();

//displaycontroller
const displayController = (() => {
    const spaces = document.querySelectorAll(".space")
    const currentTurn = document.querySelector(".current-turn")
    const finalResult = document.querySelector(".result-title")
    const playAgain = document.querySelector(".play-again")
    const resetButton = document.createElement("button")
    resetButton.classList.add("reset-button")
    let gameEnded = false;
    /*
    arr.forEach(function callback(currentValue, index, array) {
    // tu iterador
    }[, thisArg]); 
     */
    const render = () => {
        ticTacToe.board.forEach((value, index) => {
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
        /* En lugar de ejecutar el resto del código y luego devolver undefined 
        explícitamente, se utiliza return para finalizar la función inmediatamente
        y devolver automáticamente undefined. */
        if (gameEnded) {
            return
        }

        const currentPlayer = gameController.getCurrentPlayer();
        if (ticTacToe.board[index] === "" && currentPlayer) {
            ticTacToe.board[index] = currentPlayer.marker;
            gameController.switchPlayer();
            
            render();
            //
            currentTurnInfo()
            const result = ticTacToe.checkResult();
            if (result) {
                gameEnded = true
                if (result === "tie") {
                    finalResult.textContent = "It's a tie!";
                } else {
                    finalResult.textContent = `${result.name} (${result.marker}) wins`;
                }
                playAgain.appendChild(resetButton);
                resetButton.textContent = "Play Again?";
            }
        }
    };
    const reset = () => {
        ticTacToe.resetBoard();
        gameController.resetPlayers();
        finalResult.textContent = "";
        gameEnded = false;
        playAgain.removeChild(resetButton);
        render();
    };

    resetButton.addEventListener("click", reset);

    spaces.forEach((space, index) => {
        space.addEventListener("click", () => handleClick(index));
    });
    return { render };
})()

    

