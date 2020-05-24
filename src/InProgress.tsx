import React, { useState, useEffect } from 'react';

const itemsUrls: string[] = [
  "/items/banana.png",
  "/items/blue-shell.png",
  "/items/lightning.png",
  "/items/mushroom.png",
  "/items/red-shell.png",
  "/items/star.png",
];

const InProgress = () => {
  const [itemUrl, setItemUrl] = useState("/items/item-box.png");

  useEffect(() => {
    const interval = setInterval(() => {
      setItemUrl(itemsUrls[Math.floor(Math.random() * itemsUrls.length)]);
    }, 250);
    return () => clearInterval(interval);
  });

  return (
    <div>
      <img src={itemUrl} width="400" height="400" />
    </div>
  )
};

export default InProgress;