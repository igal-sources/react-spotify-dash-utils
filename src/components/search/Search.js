import React, { useState } from "react";
import PlaylistItem from "../playlists/playlist-item/PlaylistItem";
import AlbumItem from "../albums/album-item/AlbumItem";
import TrackItem from "../tracks/TrackItem";
import ArtistItem from "../artists/artists-item/ArtistsItem";
import { search } from "apis";
import "./search.scss";

const Search = () => {
  const [searchResults, setSearchResults] = useState({});
  const [searchValue, setSearchValue] = useState([]);

  console.log("searchResults: ", searchResults);

  const {
    albums: { items: albumItems } = [],
    artists: { items: artistsItems } = [],
    tracks: { items: tracksItems } = [],
    playlists: { items: playlistsItems } = []
  } = searchResults;

  const handleChange = event => {
    const value = event.target.value;
    setSearchValue(value);
  };

  const doSearch = event => {
    // keyCode:13 = Enter
    if (event.keyCode === 13) {
      search(
        localStorage.getItem("token"),
        searchValue,
        "album,artist,playlist,track",
        20,
        result => {
          setSearchResults(result);
        }
      );
    }
  };

  return (
    <div className="Search-container">
      <div className="Search-content">
        <input
          type="text"
          className="Search__input"
          placeholder="Search for music..."
          onKeyDown={doSearch}
          onChange={handleChange}
          value={searchValue}
          autoFocus
        />
      </div>
      <div className="Search-sections">
        {albumItems && albumItems.length > 0 && (
          <section className="Search-section">
            <h1>Albums</h1>
            <div className="Search-items">
              {albumItems.map(item => (
                <AlbumItem key={item.id} {...item} />
              ))}
            </div>
          </section>
        )}
        {artistsItems && artistsItems.length > 0 && (
          <section className="Search-section">
            <h1>Artists</h1>
            <div className="Search-items">
              {artistsItems.map(item => (
                <ArtistItem key={item.id} {...item} />
              ))}
            </div>
          </section>
        )}
        {tracksItems && tracksItems.length > 0 && (
          <section className="Search-tracks-section">
            <h1>Tracks</h1>
            <div className="Search-track-items">
              {tracksItems.map(item => (
                <TrackItem key={item.id} {...item} />
              ))}
            </div>
          </section>
        )}
        {playlistsItems && playlistsItems.length > 0 && (
          <section className="Search-section">
            <h1>Playlists</h1>
            <div className="Search-items">
              {playlistsItems.map(item => (
                <PlaylistItem key={item.id} {...item} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Search;
