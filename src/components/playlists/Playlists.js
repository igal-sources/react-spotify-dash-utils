import React, { useState, useEffect, useRef } from "react";
import { CurrentUsersPlaylists } from "apis";
import Spinner from "../main-container/spinner/Spinner";
import PlaylistItem from "./playlist-item/PlaylistItem";
import "./playlists.scss";

const Playlists = () => {
  const isCancelled = useRef(false);
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPlaylist = () => {
    setLoading(true);
    CurrentUsersPlaylists(localStorage.getItem("token"), playlists => {
      setPlaylists(playlists.items);
      setLoading(false);
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
      <Spinner isLoading={loading} />
      <div className="Playlists-items">
        {playlists.map(playlist => (
          <PlaylistItem key={playlist.id} {...playlist} />
        ))}
      </div>
    </div>
  );
};

export default Playlists;
