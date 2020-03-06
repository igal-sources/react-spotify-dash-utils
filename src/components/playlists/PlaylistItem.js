import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import allActions from "../../actions";
import { getPlaylist, getPlaylistsTracks } from "../../apis";
import "./play-list-item.scss";

const PlaylistItem = ({ name, images, id }) => {
  const [playlist, setPlaylist] = useState();
  const [playlistItems, setPlaylistItems] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    getPlaylistsTracks(localStorage.getItem("token"), id, songs => {
      setPlaylistItems(songs.items);
      dispatch(allActions.playlistActions.fetchPlaylistSongsSuccess(songs.items));
    });
    getPlaylist(localStorage.getItem("token"), id, playlist => {
      setPlaylist(playlist);
      dispatch(allActions.playlistActions.fetchSelectedPlaylist(playlist));
    });
    return () => {};
  }, []);

  return (
    <div className="playlist-item-container">
      <Link
        to={{ pathname: "/songs", state: { playlist: { playlist }, songs: { playlistItems } } }}
        className="playlist-item-image"
      >
        {images[0] && <img src={images[0] ? images[0].url : ""} alt={name} />}
      </Link>
      <div className="playlist-item-name">{name}</div>
    </div>
  );
};

export default PlaylistItem;
