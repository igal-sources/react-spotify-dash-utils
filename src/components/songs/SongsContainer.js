import React from "react";
import { Grid } from "semantic-ui-react";
import SongsCard from "./SongsCard";
import SongList from "./SongList";
import "./songs-container.scss";

const SongsContainer = props => {
  const { playlist, songs } = props.location.state;
  console.log("playlist: ", playlist);
  console.log("songs: ", songs);

  return (
    <div className="SongsContainer-main">
      <Grid>
        <Grid.Column className="songs-card" width={5}>
          <SongsCard />
        </Grid.Column>
        <Grid.Column className="song-list" width={11}>
          <SongList songs={songs} />
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default SongsContainer;
