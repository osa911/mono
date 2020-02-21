import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Header
      </header>
      <iframe src="https://api.monobank.ua/" width={500} height={500}>
        some text
      </iframe>
    </div>
  );
}

export default App;
