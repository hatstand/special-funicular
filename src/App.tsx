import React, { useState } from 'react';
import './App.css';
import InProgress from './InProgress';

const leaderItems: string[] = [
  "items/banana.png",
  "items/lightning.png",
].map(x => process.env.PUBLIC_URL + "/" + x);

const midPackItems: string[] = [
  "items/blue-shell.png",
  "items/mushroom.png",
  "items/red-shell.png",
].map(x => process.env.PUBLIC_URL + "/" + x);

const bottomItems: string[] = [
  "items/blue-shell.png",
  "items/lightning.png",
  "items/star.png",
].map(x => process.env.PUBLIC_URL + "/" + x);

function App() {
  const [itemUrl, setItemUrl] = useState(process.env.PUBLIC_URL + "/items/item-box.png");
  const [isRunning, setRunning] = useState(false);
  const audioRef = React.createRef<HTMLAudioElement>();

  const pickLeaderItem = () => leaderItems[Math.floor(Math.random() * leaderItems.length)];
  const pickMidPackItem = () => midPackItems[Math.floor(Math.random() * midPackItems.length)];
  const pickBottomItem = () => bottomItems[Math.floor(Math.random() * bottomItems.length)];

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

  const onBottom = () => onStart(pickBottomItem());

  return (
    <div className="App">
      <audio src={process.env.PUBLIC_URL + "/roulette.opus"} autoPlay={false} ref={audioRef} />
      <div>
        {isRunning ? <InProgress /> : <img src={itemUrl} width="400" height="400" alt="item" />}
      </div>
      <div className="mt-4">
        <button className="btn btn-dark mx-2" onClick={onLeader} disabled={isRunning}>Leader</button>
        <button className="btn btn-dark mx-2" onClick={onMidPack} disabled={isRunning}>Mid Pack</button>
        <button className="btn btn-dark mx-2" onClick={onBottom} disabled={isRunning}>Bottom Two</button>
      </div>
    </div>
  );
}

export default App;
