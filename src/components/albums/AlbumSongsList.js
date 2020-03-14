import React from "react";
import { useDispatch } from "react-redux";
import allActions from "actions";
import { Grid } from "semantic-ui-react";
import { ReactComponent as SpotifyImage } from "./spotify.svg";
import SongsCard from "../songs/songs-card/SongsCard";
import "./album-songs-list.scss";

const AlbumSongsList = props => {
  const { album } = props.location.state;
  console.log("props.location.state: ", props.location.state);
  const dispatch = useDispatch();

  const handleClickPlayTrack = trackUrl =>
    dispatch(allActions.songActions.playSong({ songId: trackUrl }));

  return (
    <div className="SongsContainer-main">
      <Grid>
        <Grid.Column className="SongsContainer-card" width={5}>
          <SongsCard {...album} />
        </Grid.Column>
        <Grid.Column className="SongsContainer-list" width={11}>
          <div className="SongList-container">
            <div className="SongList-playlistItems">
              {album.tracks.items.map(track => (
                <div key={track.id} className="SongItem-container">
                  <div className="SongItem-image">
                    <SpotifyImage />
                  </div>
                  <div className="SongItem-header">
                    <div className="SongItem-title" onClick={() => handleClickPlayTrack(track.uri)}>
                      <p>{track.name}</p>
                    </div>
                    <div className="SongItem-album">
                      <p>{album.name}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default AlbumSongsList;
