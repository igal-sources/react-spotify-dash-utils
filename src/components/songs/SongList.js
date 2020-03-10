import React from "react";
import SongItem from "./SongItem";
import "./songs-list.scss";

const SongList = ({ songs: { playlistItems } }) => {
  return (
    <div className="SongList-container">
      <div className="SongList-playlistItems">
        {playlistItems.map(({ track }) => (
          <SongItem key={track.id} track={track} />
        ))}
      </div>
    </div>
  );
};

export default SongList;
