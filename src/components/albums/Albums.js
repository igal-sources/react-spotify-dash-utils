import React, { useState, useEffect, useRef } from "react";
import { GetCurrentUsersSavedAlbums } from "apis";
import AlbumItem from "../albums/album-item/AlbumItem";
import "./albums.scss";

const Albums = () => {
  const isCancelled = useRef(false);
  const [albums, setAlbums] = useState([]);

  const fetchAlbums = () => {
    GetCurrentUsersSavedAlbums(localStorage.getItem("token"), albums => {
      setAlbums(albums.items);
    });
  };

  useEffect(() => {
    !isCancelled.current && fetchAlbums();

    return () => {
      isCancelled.current = true;
    };
  }, []);

  return (
    <div className="Albums-container">
      <div className="Albums-items">
        {albums.map(({ album }) => (
          <AlbumItem key={album.id} {...album} />
        ))}
      </div>
    </div>
  );
};

export default Albums;
