import React, { useState, useEffect, useRef } from "react";
import Spinner from "../main-container/spinner/Spinner";
import { GetCurrentUsersSavedAlbums } from "apis";
import AlbumItem from "../albums/album-item/AlbumItem";
import "./albums.scss";

const Albums = ({ token }) => {
  const isCancelled = useRef(false);
  const [albums, setAlbums] = useState([]);
  console.log("Albums: ", albums);
  const [loading, setLoading] = useState(false);

  const fetchAlbums = () => {
    setLoading(true);
    GetCurrentUsersSavedAlbums(token, albums => {
      setAlbums(albums.items);
      setLoading(false);
    });
  };

  useEffect(() => {
    !isCancelled.current && fetchAlbums();

    return () => {
      isCancelled.current = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="Albums-container">
      <Spinner isLoading={loading} />
      <div className="Albums-items">
        {albums.map(({ album }) => (
          <AlbumItem key={album.id} {...album} />
        ))}
      </div>
    </div>
  );
};

export default Albums;
