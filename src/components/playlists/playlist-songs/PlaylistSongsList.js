import React from "react";
import PropTypes from "prop-types";
import { Grid } from "semantic-ui-react";
import TrackItem from "../../tracks/TrackItem";
import SongsCard from "../../songs/songs-card/SongsCard";
import "./playlist-songs-list.scss";

const PlaylistSongsList = (props) => {
  let { playlist } = props.location.state;

  return (
    <div className="PlaylistSongsList-main">
      <Grid>
        <Grid.Column className="PlaylistSongsList-card" width={5}>
          <SongsCard {...playlist} />
        </Grid.Column>
        <Grid.Column className="SongsContainer-list" width={11}>
          <div className="PlaylistSongsList-container">
            <div className="PlaylistSongsList-playlistItems">
              {playlist.tracks.items.map(({ track }, index) => (
                <TrackItem key={index} {...track} />
              ))}
            </div>
          </div>
        </Grid.Column>
      </Grid>
    </div>
  );
};

PlaylistSongsList.propTypes = {
  playlist: PropTypes.object,
};

export default PlaylistSongsList;
