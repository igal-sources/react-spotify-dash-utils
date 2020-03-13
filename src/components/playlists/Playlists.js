import React, { useState, useEffect, useRef } from "react";
import { CurrentUsersPlaylists } from "apis";
import PlaylistItem from "./playlist-item/PlaylistItem";
import "./playlists.scss";

const Playlists = () => {
  const isCancelled = useRef(false);
  const [playlists, setPlaylists] = useState([]);

  const fetchPlaylist = () => {
    CurrentUsersPlaylists(localStorage.getItem("token"), playlists => {
      setPlaylists(playlists.items);
    });
  };

  useEffect(() => {
    !isCancelled.current && fetchPlaylist();

    return () => {
      isCancelled.current = true;
    };
  }, []);

  return (
    <div className="Playlists-container">
      <div className="Playlists-items">
        {playlists.map(playlist => (
          <PlaylistItem key={playlist.id} {...playlist} />
        ))}
      </div>
    </div>
  );
};

export default Playlists;
