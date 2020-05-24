import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

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

  useEffect(() => {
    const interval = setInterval(() => {
      setItemUrl(itemsUrls[Math.floor(Math.random() * itemsUrls.length)]);
    }, isRunning ? 250 : 10000000000);
    return () => clearInterval(interval);
  });

  const onLeader = () => {
    setRunning(true);
  };

  return (
    <div className="App">
      <div>{`Running: ${isRunning}`}</div>
      <img src={itemUrl} width="400" height="400" />
      <button onClick={onLeader}>Leader</button>
      <button>Mid Pack</button>
      <button>Bottom Two</button>
    </div>
  );
}

export default App;
