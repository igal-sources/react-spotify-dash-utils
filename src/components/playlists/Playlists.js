import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { CurrentUsersPlaylists } from "apis";
import Spinner from "../main-container/spinner/Spinner";
import PlaylistItem from "./playlist-item/PlaylistItem";
import "./playlists.scss";

const Playlists = ({ token }) => {
  const isCancelled = useRef(false);
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPlaylist = () => {
    setLoading(true);
    CurrentUsersPlaylists(token, (playlists) => {
      setPlaylists(playlists.items);
      setLoading(false);
    });
  };

  useEffect(() => {
    !isCancelled.current && fetchPlaylist();

    return () => {
      isCancelled.current = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="Playlists-container">
      <Spinner isLoading={loading} />
      <div className="Playlists-items">
        {playlists.map((playlist) => (
          <PlaylistItem key={playlist.id} {...playlist} />
        ))}
      </div>
    </div>
  );
};

Playlists.propTypes = {
  token: PropTypes.string,
};

export default Playlists;
