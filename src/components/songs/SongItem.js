import React from "react";
import "./song-item.scss";

const SongItem = ({ track }) => {
  const getImage = () => {
    const imageItem = track.album.images.filter(item => {
      return item.height === 64;
    });

    return imageItem[0].url;
  };

  return (
    <div className="SongItem-container">
      <div className="SongItem-image-link">
        <img src={getImage()} alt={track.name} />
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
