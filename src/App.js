import React from 'react';
import './App.css';
import MemoryCard from './components/MemoryCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Memory Game</h1>
        <p className="subtitle">
          Match Cards To Win
        </p>
      </header>
      <div className="gamebody">
        <div className='gamebox'>
          <div className='row'>
            <div className='column'><MemoryCard /></div>
            <div className='column'><MemoryCard /></div>
            <div className='column'><MemoryCard /></div>
            <div className='column'><MemoryCard /></div>
          </div>
          <div className='row'>
            <div className='column'><MemoryCard /></div>
            <div className='column'><MemoryCard /></div>
            <div className='column'><MemoryCard /></div>
            <div className='column'><MemoryCard /></div>
          </div>
          <div className='row'>
            <div className='column'><MemoryCard /></div>
            <div className='column'><MemoryCard /></div>
            <div className='column'><MemoryCard /></div>
            <div className='column'><MemoryCard /></div>
          </div>
          <div className='row'>
            <div className='column'><MemoryCard /></div>
            <div className='column'><MemoryCard /></div>
            <div className='column'><MemoryCard /></div>
            <div className='column'><MemoryCard /></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
