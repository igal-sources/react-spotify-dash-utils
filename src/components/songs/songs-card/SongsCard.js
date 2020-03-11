import React, { useState, useEffect, useRef } from "react";
import "./songs-card.scss";

const SongsCard = ({ playlist }) => {
  const isCancelled = useRef(false);
  const [imageUrl, setImageUrl] = useState("");

  const getImage = () => {
    const imageItem = playlist.images.filter(item => item.url);
    setImageUrl(imageItem && imageItem[0].url);
  };

  useEffect(() => {
    !isCancelled.current && getImage();

    return () => {
      isCancelled.current = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const style = {
    backgroundImage: `url(${imageUrl})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  };
  return (
    <div className="SongsCard-container">
      <div className="SongsCard-image" style={style}></div>
      <div className="SongsCard-title">
        <p>{playlist.name}</p>
      </div>
    </div>
  );
};

export default SongsCard;
