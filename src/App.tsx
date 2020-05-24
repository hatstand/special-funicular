import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import InProgress from './InProgress';

const itemsUrls: string[] = [
  "/items/banana.png",
  "/items/blue-shell.png",
  "/items/lightning.png",
  "/items/mushroom.png",
  "/items/red-shell.png",
  "/items/star.png",
];

function App() {
  const [itemUrl, setItemUrl] = useState("/items/item-box.png");
  const [isRunning, setRunning] = useState(false);

  const onLeader = () => {
    setRunning(true);
  };

  return (
    <div className="App">
      <div>{`Running: ${isRunning}`}</div>
      {isRunning ? <InProgress /> : <img src={itemUrl} width="400" height="400" />}
      <button onClick={onLeader}>Leader</button>
      <button>Mid Pack</button>
      <button>Bottom Two</button>
    </div>
  );
}

export default App;
