import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { useTranslation } from "react-i18next";
import {
  GetCurrentUsersRecentlyPlayedTracks,
  fetchListOfFeaturedPlaylists,
  GetUsersTopArtistsAndTracks,
  fetchListOfNewReleases,
  fetchRecommendationsBasedOnSeeds,
} from "apis";
import AlbumItem from "../albums/album-item/AlbumItem";
import PlaylistItem from "../playlists/playlist-item/PlaylistItem";
import ArtistsItem from "../artists/artists-item/ArtistsItem";
import TrackItem from "../tracks/TrackItem";
import Spinner from "../main-container/spinner/Spinner";
import "./Dashboard.scss";

const Dashboard = ({ token }) => {
  const { t } = useTranslation();
  const isCancelled = useRef(false);
  const [playedTracks, setPlayedTracks] = useState("");
  const [playlists, setPlaylists] = useState("");
  const [topArtists, setTopArtists] = useState("");
  const [topTracks, setTopTracks] = useState("");
  const [newReleases, setNewReleases] = useState("");
  const [recommendations, setRecommendations] = useState("");
  const [loading, setLoading] = useState(false);

  const artistIds = [
    "6zFYqv1mOsgBRQbae3JJ9e",
    "7hMpCrQFkZm9Sy1S9ZwBFe",
    "4rQnQQusV2VVuGmDTLlybe",
    "3PhoLpVuITZKcymswpck5b",
  ];
  const fetchData = () => {
    setLoading(true);
    axios
      .all([
        GetCurrentUsersRecentlyPlayedTracks(token, 50, (tracks) => {
          setPlayedTracks(tracks);
        }),
        fetchListOfFeaturedPlaylists(token, ({ playlists }) => {
          setPlaylists(playlists.items);
        }),
        GetUsersTopArtistsAndTracks(token, "artists", (artists) => {
          setTopArtists(artists.items);
        }),
        GetUsersTopArtistsAndTracks(token, "tracks", (tracks) => {
          setTopTracks(tracks.items);
        }),
        fetchListOfNewReleases(token, ({ albums }) => {
          setNewReleases(albums.items);
        }),
        fetchRecommendationsBasedOnSeeds(token, 50, artistIds, ({ tracks }) => {
          setRecommendations(tracks);
        }),
      ])
      .catch((errors) => console.log(errors));
    setLoading(false);
  };

  useEffect(() => {
    !isCancelled.current && fetchData(token, (data) => {});
    return () => {
      isCancelled.current = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="Dashboard-container">
      <div className="Dashboard-sections">
        <Spinner isLoading={loading} />
        {playedTracks && playedTracks.length > 0 && (
          <section className="Dashboard-section">
            <h1>{t("recently-played")}</h1>
            <div className="Dashboard-items">
              {playedTracks.map(({ track, track: { album } }, index) => (
                <AlbumItem key={index} name={track.name} images={album.images} id={album.id} />
              ))}
            </div>
          </section>
        )}
        {playlists && playlists.length > 0 && (
          <section className="Dashboard-section">
            <h1>{t("popular-playlists")}</h1>
            <div className="Dashboard-items">
              {playlists.map(({ name, images, id }, index) => (
                <PlaylistItem key={index} name={name} images={images} id={id} />
              ))}
            </div>
          </section>
        )}
        {topArtists && topArtists.length > 0 && (
          <section className="Dashboard-section">
            <h1>{t("top-artists")}</h1>
            <div className="Dashboard-items">
              {topArtists.map(({ name, images, id }, index) => (
                <ArtistsItem key={index} name={name} images={images} id={id} />
              ))}
            </div>
          </section>
        )}
        {topTracks && topTracks.length > 0 && (
          <section className="Dashboard-tracks-section">
            <h1>{t("top-tracks")}</h1>
            <div className="Dashboard-track-items">
              {topTracks.map((track, index) => (
                <TrackItem key={index} {...track} />
              ))}
            </div>
          </section>
        )}
        {newReleases && newReleases.length > 0 && (
          <section className="Dashboard-section">
            <h1>{t("new-releases")}</h1>
            <div className="Dashboard-items">
              {newReleases.map(({ name, images, id }, index) => (
                <AlbumItem key={index} name={name} images={images} id={id} />
              ))}
            </div>
          </section>
        )}
        {recommendations && recommendations.length > 0 && (
          <section className="Dashboard-section">
            <h1>{t("recommendations")}</h1>
            <div className="Dashboard-items">
              {recommendations.map(({ name, album: { images, id } }, index) => (
                <AlbumItem key={index} name={name} images={images} id={id} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  token: PropTypes.string,
};

export default Dashboard;
