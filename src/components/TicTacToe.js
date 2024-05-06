import React from "react";
import useTicTacToe from "../hooks/UseTicTacToe";

function TicTacToe() {
  const { board, handleClick, getStatusMessage, resetGame } = useTicTacToe();
  return (
    <div className="game">
      <h1>Tic-Tac-Toe Game</h1>
      <div className="status">
        {getStatusMessage()}
        <button className="reset-button" onClick={resetGame}>
          Reset Game
        </button>
      </div>
      <div className="board">
        {/* render my board */}
        {board.map((b, index) => {
          return (
            <button
              className="cell"
              key={index}
              onClick={() => handleClick(index)}
              disabled={b !== null}
            >
              {b}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default TicTacToe;
