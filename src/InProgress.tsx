import React, { useState, useEffect } from 'react';

const itemsUrls: string[] = [
  "items/banana.png",
  "items/blue-shell.png",
  "items/lightning.png",
  "items/mushroom.png",
  "items/red-shell.png",
  "items/star.png",
].map(x => process.env.PUBLIC_URL + "/" + x);

const InProgress = () => {
  const [itemUrl, setItemUrl] = useState("items/item-box.png");
  const animationRef = React.useRef<number>();

  const animate = () => {
    setItemUrl(itemsUrls[Math.floor(Math.random() * itemsUrls.length)]);
    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    animationRef.current = requestAnimationFrame(() => {
      animate();
    });
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  });

  return (
    <div style={{padding: '24px'}}>
      <img src={itemUrl} width="400" height="400" alt="item" />
    </div>
  )
};

export default InProgress;