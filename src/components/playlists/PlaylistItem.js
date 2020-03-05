import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import allActions from "../../actions";
import { getPlaylistsTracks } from "../../apis";
import "./play-list-item.scss";

const PlaylistItem = ({ name, images, id }) => {
  const dispatch = useDispatch();

  const fetchPlaylistsTracks = () => {
    getPlaylistsTracks(localStorage.getItem("token"), id, songs => {
      dispatch(allActions.playlistActions.fetchPlaylistSongsSuccess(songs.items));
    });
  };

  return (
    <div className="playlist-item-container">
      <Link to="/songs" onClick={fetchPlaylistsTracks} className="playlist-item-image">
        {images[0] && <img src={images[0] ? images[0].url : ""} alt={name} />}
      </Link>
      <div className="playlist-item-name">{name}</div>
    </div>
  );
};

export default PlaylistItem;
