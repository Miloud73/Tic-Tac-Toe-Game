import React from 'react';
import './Modal.css';
import classNames from 'classnames';
export const Modal = (props) => {
  const resultModalClasses=classNames({
    'modal-open':props.isGameOver
  })
  const message=props.winner? `winner is ${props.winner}`:'it is a tie';
    return(
        <div id="modal-overlay" className={resultModalClasses}>
        <div id="game-result-modal">
          <div id="result-container">
            <div id="winner-container">
              <span>{message}</span>
            </div>
          </div>
          <div id="new-game-container">
            <button id="new-game-button"
            onClick={props.onNewGameClicked}>Start New Game</button>
          </div>
        </div>
      </div>
    )
}