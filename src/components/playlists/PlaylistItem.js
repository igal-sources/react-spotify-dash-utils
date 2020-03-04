import React from "react";
import { Link } from "react-router-dom";
import "./play-list-item.scss";

const PlaylistItem = ({ name, images }) => {
  return (
    <div className="playlist-item-container">
      <Link to="/songs" className="playlist-item-image">
        {images[0] && <img src={images[0] ? images[0].url : ""} alt={name} />}
      </Link>
      <div className="playlist-item-name">{name}</div>
    </div>
  );
};

export default PlaylistItem;
