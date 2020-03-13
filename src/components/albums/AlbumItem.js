import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { fetchAlbum, fetchAlbumsTracks } from "../../apis";
import "./album-item.scss";

const AlbumItem = ({ name, images, id }) => {
  const isCancelled = useRef(false);
  const [album, setAlbum] = useState();
  const [albumSongItems, setAlbumSongItems] = useState();
  const token = localStorage.getItem("token");

  useEffect(() => {
    !isCancelled.current &&
      fetchAlbumsTracks(token, id, songs => {
        setAlbumSongItems(songs.items);
      });
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
    <div className="AlbumItem-container">
      <Link
        to={{ pathname: "/songs", state: { container: { album }, songs: { albumSongItems } } }}
        className="AlbumItem-image"
      >
        {<img src={images[0] && images[0].url} alt={name} />}
      </Link>
      <div className="AlbumItem-name">{name}</div>
    </div>
  );
};

export default AlbumItem;
