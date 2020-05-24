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

const leaderItems: string[] = [
  "/items/banana.png",
  "/items/lightning.png",
];

const midPackItems: string[] = [
  "/items/blue-shell.png",
  "/items/mushroom.png",
  "/items/red-shell.png",
];

const bottomItems: string[] = [
  "/items/blue-shell.png",
  "/items/lightning.png",
  "/items/star.png",
];

function App() {
  const [itemUrl, setItemUrl] = useState("/items/item-box.png");
  const [isRunning, setRunning] = useState(false);
  const audioRef = React.createRef<HTMLAudioElement>();

  const pickLeaderItem = () => leaderItems[Math.floor(Math.random() * leaderItems.length)];
  const pickMidPackItem = () => midPackItems[Math.floor(Math.random() * leaderItems.length)];
  const pickerBottomItem = () => bottomItems[Math.floor(Math.random() * leaderItems.length)];

  const onStart = (resultUrl: string) => {
    audioRef.current?.load();
    audioRef.current?.play().then(() => {
      setRunning(true);
      setTimeout(() => {
        setItemUrl(resultUrl);
        setRunning(false);
      }, 3300);
    });
  };

  const onLeader = () => {
    onStart(pickLeaderItem());
  };

  const onMidPack = () => {
    onStart(pickMidPackItem())
  };

  const onBottom = () => onStart(pickerBottomItem());

  return (
    <div className="App">
      <audio src="/roulette.opus" autoPlay={false} ref={audioRef} />
      <div>
        {isRunning ? <InProgress /> : <img src={itemUrl} width="400" height="400" />}
      </div>
      <button onClick={onLeader} disabled={isRunning}>Leader</button>
      <button onClick={onMidPack} disabled={isRunning}>Mid Pack</button>
      <button onClick={onBottom} disabled={isRunning}>Bottom Two</button>
    </div>
  );
}

export default App;
