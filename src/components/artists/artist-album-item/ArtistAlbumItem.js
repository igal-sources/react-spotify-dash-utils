import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { fetchAlbum } from "../../../apis";
import "./artist-album-item.scss";

const ArtistAlbumItem = ({ name, images, id }) => {
  console.log("name, images, id: ", name, images, id);
  const isCancelled = useRef(false);
  const [album, setAlbum] = useState();
  const token = localStorage.getItem("token");

  useEffect(() => {
    !isCancelled.current &&
      fetchAlbum(token, id, album => {
        setAlbum(album);
      });
    return () => {
      isCancelled.current = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="ArtistAlbumItem-container">
      <Link
        to={{
          pathname: "/album-songs",
          state: { album }
        }}
        className="ArtistAlbumItem-image"
      >
        {<img src={images[0] && images[0].url} alt={name} />}
      </Link>
      <div className="ArtistAlbumItem-name">{name}</div>
    </div>
  );
};

export default ArtistAlbumItem;
