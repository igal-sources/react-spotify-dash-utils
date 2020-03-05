import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import allActions from '../../actions'
import { CurrentUsersPlaylists } from "apis";
import PlaylistItem from "./PlaylistItem";
import "./playlists.scss";

const Playlists = () => {
  const [playlists, setPlaylists] = useState([]);
  console.log("playlists: ", playlists);
  const dispatch = useDispatch();

  useEffect(() => {
    CurrentUsersPlaylists(localStorage.getItem("token"), playlists => {
      dispatch(allActions.playlistActions.fetchPlaylistMenuSuccess(playlists.items));
      setPlaylists(playlists.items);
    });
    return () => {};
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
