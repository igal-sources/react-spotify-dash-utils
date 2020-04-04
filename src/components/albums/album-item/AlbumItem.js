import React from "react";
import { Link } from "react-router-dom";
//import { fetchAlbum } from "../../../apis";
import spotifyImage from "../../../images/spotify.png";
import "./album-item.scss";

const AlbumItem = ({ name, images, id }) => {
  return (
    <div className="AlbumItem-container">
      <Link
        to={{
          pathname: "/album-songs",
          state: { id }
        }}
        className="AlbumItem-image"
      >
        {<img src={images[0] ? images[0].url : spotifyImage} alt={name} />}
      </Link>
      <div className="AlbumItem-name">{name}</div>
    </div>
  );
};

export default AlbumItem;
