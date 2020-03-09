import React, { useState } from "react";
import SongItem from "./SongItem";
import "./songs-list.scss";

const SongList = ({ songs: { playlistItems } }) => {
  return (
    <div className="SongList-container">
      <div className="SongList-playlistItems">
        {playlistItems.map(({ track }, index) => (
          <p key={index}>{track.name}</p>
        ))}
      </div>
    </div>
  );
};

export default SongList;
