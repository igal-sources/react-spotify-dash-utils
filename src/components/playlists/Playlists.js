import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import allActions from "../../actions";
import { CurrentUsersPlaylists } from "apis";
import PlaylistItem from "./PlaylistItem";
import "./playlists.scss";

const Playlists = () => {
  const isCancelled = useRef(false);
  const [playlists, setPlaylists] = useState([]);
  console.log("playlists: ", playlists);
  const dispatch = useDispatch();

  const fetchPlaylist = () => {
    CurrentUsersPlaylists(localStorage.getItem("token"), playlists => {
      //dispatch(allActions.playlistActions.fetchPlaylistMenuSuccess(playlists.items));
      !isCancelled.current && setPlaylists(playlists.items);
    });
  };

  useEffect(() => {
    fetchPlaylist();

    return () => {
      isCancelled.current = true;
    };
  }, []);

  return (
    <div className="playlist-container">
      <h1>Playlists</h1>
      <div className="playlist-items">
        {playlists.map(playlist => (
          <PlaylistItem key={playlist.id} {...playlist} />
        ))}
      </div>
    </div>
  );
};

export default Playlists;
