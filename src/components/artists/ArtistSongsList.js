import React from "react";
import { useDispatch } from "react-redux";
import allActions from "actions";
import { Grid } from "semantic-ui-react";
import { ReactComponent as SpotifyImage } from "./spotify.svg";
import SongsCard from "../songs/songs-card/SongsCard";
import "./artist-songs-list.scss";

const ArtistSongsList = props => {
  const { artist } = props.location.state;
  console.log("ArtistSongsList - props: ", props.location.state);
  const dispatch = useDispatch();

  const handleClickPlayTrack = trackUrl =>
    dispatch(allActions.songActions.playSong({ songId: trackUrl }));

  return (
    <div className="SongsContainer-main">
      <Grid>
        <Grid.Column className="SongsContainer-card" width={5}>
          <SongsCard {...artist} />
        </Grid.Column>
        <Grid.Column className="SongsContainer-list" width={11}>
          <div className="SongList-container">
            <div className="SongList-playlistItems">
              {artist.tracks.items.map(track => (
                <div key={track.id} className="SongItem-container">
                  <div className="SongItem-image">
                    <SpotifyImage />
                  </div>
                  <div className="SongItem-header">
                    <div className="SongItem-title" onClick={() => handleClickPlayTrack(track.uri)}>
                      <p>{track.name}</p>
                    </div>
                    <div className="SongItem-album">
                      <p>{artist.name}</p>
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

export default ArtistSongsList;
