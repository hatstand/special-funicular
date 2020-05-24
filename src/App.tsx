import React from 'react';
import logo from './logo.svg';
import './App.css';

const itemsUrls: string[] = [
  "/items/banana.png",
  "/items/lightning.png",
  "/items/blue-shell.png",
  "/items/mushroom.png",
  "/items/star.png",
];

function App() {
  return (
    <div className="App">
      <img src="/items/banana.png" width="400" height="400" />
    </div>
  );
}

export default App;
