import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import allActions from "actions";
import { fetchAlbum } from "../../../apis";
import { Grid } from "semantic-ui-react";
import spotifyImage from "../../../images/Spotify_64.png";
import SongsCard from "../../songs/songs-card/SongsCard";
import "./album-songs-list.scss";

const AlbumSongsList = props => {
  const isCancelled = useRef(false);
  const [album, setAlbum] = useState(undefined);
  const { albumId } = props.match.params;
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  const handleClickPlayTrack = trackUrl =>
    dispatch(allActions.songActions.playSong({ songId: trackUrl }));

  useEffect(() => {
    !isCancelled.current &&
      fetchAlbum(token, albumId, album => {
        setAlbum(album);
      });
    return () => {
      isCancelled.current = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="AlbumSongsList-main">
      <Grid>
        <Grid.Column className="AlbumSongsList-card" width={5}>
          {album && <SongsCard {...album} />}
        </Grid.Column>
        <Grid.Column className="SongsContainer-list" width={11}>
          <div className="AlbumSongsList-container">
            <div className="AlbumSongsList-playlistItems">
              {album &&
                album.tracks.items.map(track => (
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
