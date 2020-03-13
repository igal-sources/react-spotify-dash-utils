import React, { useState, useEffect } from "react";
import { useViewType } from "../../../services/hooks/use-selectors";
import { Grid } from "semantic-ui-react";
import SongsCard from "../songs-card/SongsCard";
import SongList from "../songs-list/SongList";
import { VIEW_TYPE } from "shared/types";
import "./songs-container.scss";

const SongsContainer = props => {
  let { container, songs } = props.location.state;
  console.log("props.location.state: ", props.location.state);

  const viewType = useViewType();

  switch (viewType) {
    case VIEW_TYPE.PLAYLIST:
      container = container.playlist;
      break;
    case VIEW_TYPE.ALBUMS:
      container = container.album;
      songs = songs.albumSongItems;
      break;
    case VIEW_TYPE.ARTISTS:
    case VIEW_TYPE.PODCASTS:
    case VIEW_TYPE.TRACKS:
    case VIEW_TYPE.SEARCH:
      break;

    default:
      break;
  }

  return (
    <div className="SongsContainer-main">
      <Grid>
        <Grid.Column className="SongsContainer-card" width={5}>
          <SongsCard {...container} />
        </Grid.Column>
        <Grid.Column className="SongsContainer-list" width={11}>
          <SongList songs={songs} />
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default SongsContainer;
