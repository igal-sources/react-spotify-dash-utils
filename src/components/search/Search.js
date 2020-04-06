import React, { useState } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import Spinner from "../main-container/spinner/Spinner";
import PlaylistItem from "../playlists/playlist-item/PlaylistItem";
import AlbumItem from "../albums/album-item/AlbumItem";
import TrackItem from "../tracks/TrackItem";
import ArtistItem from "../artists/artists-item/ArtistsItem";
import { search } from "apis";
import "./search.scss";

const Search = ({ token }) => {
  const { t } = useTranslation();
  const [searchResults, setSearchResults] = useState({});
  const [searchValue, setSearchValue] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log("searchResults: ", searchResults);

  const {
    albums: { items: albumItems } = [],
    artists: { items: artistsItems } = [],
    tracks: { items: tracksItems } = [],
    playlists: { items: playlistsItems } = [],
  } = searchResults;

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);
  };

  const doSearch = (event) => {
    // keyCode:13 = Enter
    if (event.keyCode === 13) {
      setLoading(true);
      search(token, searchValue, "album,artist,playlist,track", 20, (result) => {
        setSearchResults(result);
        setLoading(false);
      });
    }
  };

  return (
    <div className="Search-container">
      <div className="Search-content">
        <input
          type="text"
          className="Search__input"
          placeholder={t("search-for-music")}
          onKeyDown={doSearch}
          onChange={handleChange}
          value={searchValue}
          autoFocus
        />
      </div>
      <div className="Search-sections">
        <Spinner isLoading={loading} />
        {albumItems && albumItems.length > 0 && (
          <section className="Search-section album">
            <h1>{t("albums")}</h1>
            <div className="Search-items">
              {albumItems.map((item) => (
                <AlbumItem key={item.id} {...item} />
              ))}
            </div>
          </section>
        )}
        {artistsItems && artistsItems.length > 0 && (
          <section className="Search-section">
            <h1>{t("artists")}</h1>
            <div className="Search-items">
              {artistsItems.map((item) => (
                <ArtistItem key={item.id} {...item} />
              ))}
            </div>
          </section>
        )}
        {tracksItems && tracksItems.length > 0 && (
          <section className="Search-tracks-section">
            <h1>{t("tracks")}</h1>
            <div className="Search-track-items">
              {tracksItems.map((item) => (
                <TrackItem key={item.id} {...item} />
              ))}
            </div>
          </section>
        )}
        {playlistsItems && playlistsItems.length > 0 && (
          <section className="Search-section">
            <h1>{t("playlists")}</h1>
            <div className="Search-items">
              {playlistsItems.map((item) => (
                <PlaylistItem key={item.id} {...item} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

Search.propTypes = {
  token: PropTypes.string,
};

export default Search;
