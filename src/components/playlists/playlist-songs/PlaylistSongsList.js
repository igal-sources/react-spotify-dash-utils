import React from "react";
import { Grid } from "semantic-ui-react";
import TrackItem from "../../tracks/TrackItem";
import SongsCard from "../../songs/songs-card/SongsCard";
import "./playlist-songs-list.scss";

const PlaylistSongsList = props => {
  let { playlist } = props.location.state;
  console.log("PlaylistSongsList - props: ", props.location.state);

  return (
    <div className="SongsContainer-main">
      <Grid>
        <Grid.Column className="SongsContainer-card" width={5}>
          <SongsCard {...playlist} />
        </Grid.Column>
        <Grid.Column className="SongsContainer-list" width={11}>
          <div className="SongList-container">
            <div className="SongList-playlistItems">
              {playlist.tracks.items.map(({ track }) => (
                <TrackItem key={track.id} {...track} />
              ))}
            </div>
          </div>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default PlaylistSongsList;
