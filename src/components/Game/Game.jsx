import React, { useState } from "react";
import { Board } from "../Board/Board";
import { Modal } from "../Modal/Modal";
import { calculateWinner } from "../../utils/winnerCalculater";
import "./Game.css";

export const Game = () => {
  const [cellValues, setCellValues] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [xIsNext, setXIsNext] = useState(true);
  const [isGameOver, setIsGameOver] = useState(false);
  const[numberOfTurnsLeft , setNumberOfTurnsLeft] = useState(9)
  const [winner , setWinner]= useState()
  const [winningCombination , setWinningCombination] = useState();

  const isCellEmpty = (cellIndex) => cellValues[cellIndex] === "";

  const restartGame= () => {
    setCellValues([
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ]);
    setXIsNext(true);
    setIsGameOver(false);
    setNumberOfTurnsLeft(9);
    setWinner(undefined);
    setWinningCombination([]);
  }

  const OnCellClicked = (cellIndex) => {
    if (isCellEmpty(cellIndex)) {
      const newCellValues = [...cellValues];

      newCellValues[cellIndex] = xIsNext ? "X" : "O";
      const newNumberOfTurnsLeft = numberOfTurnsLeft-1;
      const calResult = calculateWinner(newCellValues, newNumberOfTurnsLeft,cellIndex);

      // calculate the result
      setCellValues(newCellValues);
      setXIsNext(!xIsNext);
      setIsGameOver(calResult.hasResult);
      setNumberOfTurnsLeft(newNumberOfTurnsLeft);
      setWinner(calResult.winner);
      setWinningCombination(calResult.winnerCombanition);
    }
  };
  return (
    <>
      <div id="game">
        <h1>Tic Tac Toe</h1>
        <Board
          cellValues={cellValues}
          winningCombination={winningCombination}
          cellClicked={OnCellClicked}
        />
      </div>

      <Modal isGameOver={isGameOver} winner={winner} onNewGameClicked={restartGame}/>
      <calculateWinner />
    </>
  );
};
