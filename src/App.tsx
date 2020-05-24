import React, { useState, useEffect } from 'react';
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

enum State {
  INITIAL = 0,
  RUNNING = 1,
  SELECTED = 2,
  COMPLETE = 3,
}

interface Props {
  state: State;
  itemUrl: string;
}

const BaseItemBox: React.FC<{itemUrl: string}> = ({itemUrl}) => {
  return (
    <div style={{padding: '24px', display: 'inline-block'}}>
      <img src={itemUrl} width="400" height="400" alt="item" />
    </div>
  )
};

const ItemBox: React.FC<Props> = ({state, itemUrl}) => {
  switch (state) {
    case State.INITIAL:
      return (
        <BaseItemBox itemUrl={process.env.PUBLIC_URL + "/items/item-box.png"} />
      );
    case State.RUNNING:
      return (
        <InProgress />
      );
    case State.SELECTED:
      return (
        <SelectedItemBox itemUrl={itemUrl} />
      );
    case State.COMPLETE:
      return (
        <BaseItemBox itemUrl={itemUrl} />
      );
  }
};

const SelectedItemBox: React.FC<{itemUrl: string}> = ({itemUrl}) => {
  const [highlight, setHighlight] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlight(!highlight);
    }, 150)
    return () => clearInterval(interval);
  })

  return (
    <div style={{padding: '24px', display: 'inline-block', backgroundColor: highlight ? 'black' : 'white'}}>
      <img src={itemUrl} width="400" height="400" alt="item"/>
    </div>
  )
}

function App() {
  const [itemUrl, setItemUrl] = useState(process.env.PUBLIC_URL + "/items/item-box.png");
  const [runState, setRunning] = useState(State.INITIAL);
  const audioRef = React.createRef<HTMLAudioElement>();

  const pickLeaderItem = () => leaderItems[Math.floor(Math.random() * leaderItems.length)];
  const pickMidPackItem = () => midPackItems[Math.floor(Math.random() * midPackItems.length)];
  const pickBottomItem = () => bottomItems[Math.floor(Math.random() * bottomItems.length)];

  const onStart = (resultUrl: string) => {
    audioRef.current?.load();
    audioRef.current?.play().then(() => {
      setRunning(State.RUNNING);
      setTimeout(() => {
        setItemUrl(resultUrl);
        setRunning(State.SELECTED);

        setTimeout(() => {
          setRunning(State.COMPLETE);
        }, 1700);
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

  const isRunning = () => runState === State.RUNNING || runState == State.SELECTED;

  return (
    <div className="App">
      <audio src={process.env.PUBLIC_URL + "/roulette.opus"} autoPlay={false} ref={audioRef} />
      <div>
        <ItemBox state={runState} itemUrl={itemUrl} />
      </div>
      <div className="mt-4">
        <button className="btn btn-dark mx-2" onClick={onLeader} disabled={isRunning()}>Leader</button>
        <button className="btn btn-dark mx-2" onClick={onMidPack} disabled={isRunning()}>Mid Pack</button>
        <button className="btn btn-dark mx-2" onClick={onBottom} disabled={isRunning()}>Bottom Two</button>
      </div>
    </div>
  );
}

export default App;
