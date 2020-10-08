import React, { Component } from 'react';
import './App.css';
import MemoryCard from './components/MemoryCard';

function generateDeck() {
  const symbols = ['😈','🤡','👻','💀','🎃','🧛🏻','🧟','🧙‍♀️'];
  const deck = [];
  for (let i=0; i<16; i++){
    const card = {
      isFlipped: false,
      symbol: symbols[i%8]
    }
    deck.push(card);
    
  }
  shuffle(deck);
  return deck;
}

/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      deck: generateDeck(), 
      pickedCards: []
    };

  }

  render() {
    const cardsJSX = this.state.deck.map((card,index) => {
      return(<MemoryCard symbol={card.symbol} isFlipped={card.isFlipped} />);
    });

    return (
      <div className="App">
        <header className="App-header">
          <h1>Memory Game</h1>
          <p className="subtitle">
            Match Cards To Win
          </p>
        </header>
        <div className="row">
          {cardsJSX.slice(0,4)}
        </div>
        <div className="row">
          {cardsJSX.slice(4,8)}
        </div>
        <div className="row">
        {cardsJSX.slice(8,12)}
        </div>
        <div className="row">
        {cardsJSX.slice(12,16)}
        </div>
      </div>
    );
  }
}

export default App;
