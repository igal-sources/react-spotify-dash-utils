/* import React from "react";
import SongItem from "../song-item/SongItem";
import "./songs-list.scss";

const SongList = ({ songs, viewType }) => {
  console.log("SongList: ", songs, viewType);

  const viewTypeSelector = {
    Playlist: songs.map(({ track }) => <SongItem key={track.id} track={track} />),
    Albums: songs.map((id, uri) => <SongItem key={id} track={uri} />)
  };

  const songsSelected = viewTypeSelector[viewType];
  console.log("songsSelected: ", songsSelected);

  return (
    <div className="SongList-container">
      <div className="SongList-playlistItems">{songsSelected}</div>
    </div>
  );
};

export default SongList;
 */
