import React from "react";
import SongItem from "../song-item/SongItem";
import "./songs-list.scss";

const SongList = ({ songs }) => {
  console.log("SongList: ", songs);
  const { playlistItems} = songs;

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
