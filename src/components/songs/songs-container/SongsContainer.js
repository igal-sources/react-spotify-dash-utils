import React from "react";
import { Grid } from "semantic-ui-react";
import SongsCard from "../songs-card/SongsCard";
import SongList from "../songs-list/SongList";
import "./songs-container.scss";

const SongsContainer = props => {
  const { playlist, songs } = props.location.state;
  console.log("playlist, songs: ", playlist, songs);

  return (
    <div className="SongsContainer-main">
      <Grid>
        <Grid.Column className="SongsContainer-card" width={5}>
          <SongsCard {...playlist} />
        </Grid.Column>
        <Grid.Column className="SongsContainer-list" width={11}>
          <SongList songs={songs} />
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default SongsContainer;
