import React from "react";
import { useDispatch } from "react-redux";
import allActions from "actions";
import { Grid } from "semantic-ui-react";
import spotifyImage from "../../../images/spotify.png";
import SongsCard from "../../songs/songs-card/SongsCard";
import "./artist-songs-list.scss";

const ArtistSongsList = props => {
  const { artist } = props.location.state;
  const dispatch = useDispatch();

  const handleClickPlayTrack = trackUrl =>
    dispatch(allActions.songActions.playSong({ songId: trackUrl }));

  return (
    <div className="ArtistSongsList-main">
      <Grid>
        <Grid.Column className="ArtistSongsList-card" width={5}>
          <SongsCard {...artist} />
        </Grid.Column>
        <Grid.Column className="ArtistSongsList-list" width={11}>
          <div className="ArtistSongsList-container">
            <div className="ArtistSongsList-playlistItems">
              {artist.tracks.items.map(track => (
                <div key={track.id} className="ArtistSongsList-songItem-container">
                  <div className="ArtistSongsList-songItem-image">
                    <img src={spotifyImage} alt={track.name}></img>
                  </div>
                  <div className="ArtistSongsList-songItem-header">
                    <div
                      className="ArtistSongsList-songItem-title"
                      onClick={() => handleClickPlayTrack(track.uri)}
                    >
                      <p>{track.name}</p>
                    </div>
                    <div className="ArtistSongsList-songItem-album">
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
