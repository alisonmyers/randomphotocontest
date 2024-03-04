import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="banner">
        <marquee behavior="scroll" direction="left" scrollamount="10">
          <h1>Mac Wins</h1>
        </marquee>
        <p>He dug a big hole</p>
      </div>
    </div>
  );
}

export default App;