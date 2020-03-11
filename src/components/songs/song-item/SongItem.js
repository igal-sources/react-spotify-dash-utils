import React, { useState, useEffect, useRef } from "react";
import "./song-item.scss";

const SongItem = ({ track }) => {
  const isCancelled = useRef(false);
  const [imageUrl, setImageUrl] = useState("");

  const getImage = () => {
    if (track.album.images.length === 0) {
      return undefined;
    }
    if (track.album.images.length === 1) {
      setImageUrl(track.album.images[0].url);
      return;
    }
    const imageItem = track.album.images.filter(item => {
      return item.height === 64;
    });
    setImageUrl(imageItem && imageItem[0].url);
  };

  useEffect(() => {
    !isCancelled.current && getImage();

    return () => {
      isCancelled.current = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="SongItem-container">
      <div className="SongItem-image-link">
        <img src={imageUrl} alt={track.name} />
      </div>
      <div className="SongItem-header">
        <div className="SongItem-title">
          <p>{track.name}</p>
        </div>
        <div className="SongItem-album">
          <p>{track.album.name}</p>
        </div>
      </div>
    </div>
  );
};

export default SongItem;
