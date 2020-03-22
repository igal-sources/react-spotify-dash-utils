import React from "react";
import { useDispatch } from "react-redux";
import allActions from "actions";
import { Grid } from "semantic-ui-react";
import spotifyImage from "../../../images/Spotify_64.png";
import SongsCard from "../../songs/songs-card/SongsCard";
import "./album-songs-list.scss";

const AlbumSongsList = props => {
  const { album } = props.location.state;
  console.log("AlbumSongsList - props: ", props.location.state);
  const dispatch = useDispatch();

  const handleClickPlayTrack = trackUrl =>
    dispatch(allActions.songActions.playSong({ songId: trackUrl }));

  return (
    <div className="AlbumSongsList-main">
      <Grid>
        <Grid.Column className="AlbumSongsList-card" width={5}>
          <SongsCard {...album} />
        </Grid.Column>
        <Grid.Column className="SongsContainer-list" width={11}>
          <div className="AlbumSongsList-container">
            <div className="AlbumSongsList-playlistItems">
              {album.tracks.items.map(track => (
                <div key={track.id} className="AlbumSongsList-songItem-container">
                  <div className="AlbumSongsList-songItem-image">
                    <img src={spotifyImage} alt={track.name}></img>
                  </div>
                  <div className="AlbumSongsList-songItem-header">
                    <div
                      className="AlbumSongsList-songItem-title"
                      onClick={() => handleClickPlayTrack(track.uri)}
                    >
                      <p>{track.name}</p>
                    </div>
                    <div className="AlbumSongsList-songItem-album">
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
