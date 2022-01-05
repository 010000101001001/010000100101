import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

function Board()
{
  return(
    <div id='board'>
      <div id='player2'>
        <button id='discardedCardsP2'>Odrzucone karty</button>
        <button id='activeCardP2'>Aktywna karta</button>
        <div id='pointsP2'>Punkty:</div>
      </div>
      <div id='main'>
        <div id='mainField'>Główne pole</div>
        <button id='deck'>Talia</button>

      </div>
      <div id='player1'>
        <button id='activeCardP1'>Aktywna karta</button>
        <button id='discardedCardsP1'>Odrzucone karty</button>
        <div id='pointsP1'>Punkty:</div>
      </div>
    </div>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <Board />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
