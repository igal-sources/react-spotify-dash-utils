import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import { getPlaylist, getPlaylistsTracks } from "../../../apis";

import spotifyImage from "./spotify.png";
import "./playlist-item.scss";

const PlaylistItem = ({ name, images, id }) => {
  const isCancelled = useRef(false);
  const [playlist, setPlaylist] = useState();
  const [playlistItems, setPlaylistItems] = useState();
  const token = localStorage.getItem("token");

  useEffect(() => {
    !isCancelled.current &&
      getPlaylistsTracks(token, id, songs => {
        setPlaylistItems(songs.items);
      });
    !isCancelled.current &&
      getPlaylist(token, id, playlist => {
        setPlaylist(playlist);
      });
    return () => {
      isCancelled.current = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="playlist-item-container">
      <Link
        to={{ pathname: "/playlist-songs", state: { playlist, playlistItems } }}
        className="playlist-item-image"
      >
        {<img src={images[0] ? images[0].url : { spotifyImage }} alt={name} />}
      </Link>
      <div className="playlist-item-name">{name}</div>
    </div>
  );
};

export default PlaylistItem;
