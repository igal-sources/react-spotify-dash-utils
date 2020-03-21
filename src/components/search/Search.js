import React, { useState } from "react";
import { useDispatch } from "react-redux";
import allActions from "actions";
import PlaylistItem from "../playlists/playlist-item/PlaylistItem";
import AlbumItem from "../albums/AlbumItem";
import ArtistItem from "../artists/artists-item/ArtistsItem";
import { search } from "apis";
import "./search.scss";

const Search = () => {
  const [searchResults, setSearchResults] = useState({});
  const [searchValue, setSearchValue] = useState([]);
  const dispatch = useDispatch();
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

  const handleClickPlayTrack = trackUrl =>
    dispatch(allActions.songActions.playSong({ songId: trackUrl }));

  const doSearch = event => {
    // keyCode:13 = Enter
    if (event.keyCode === 13) {
      search(localStorage.getItem("token"), searchValue, "album,artist,playlist,track", result => {
        setSearchResults(result);
      });
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
          <section className="Search-albums-section">
            <h1>Albums</h1>
            <div className="Search-album-items">
              {albumItems.map(item => (
                <AlbumItem key={item.id} {...item} />
              ))}
            </div>
          </section>
        )}
        {artistsItems && artistsItems.length > 0 && (
          <section className="Search-albums-section">
            <h1>Artists</h1>
            <div className="Search-album-items">
              {artistsItems.map(item => (
                <ArtistItem key={item.id} {...item} />
              ))}
            </div>
          </section>
        )}
        {tracksItems && tracksItems.length > 0 && (
          <section className="Search-albums-section">
            <h1>Tracks</h1>
            <div className="Search-album-items">
              {tracksItems.map(({ album: { images }, name, id, uri }) => (
                <div
                  key={id}
                  className="Search-tracks-items-image"
                  onClick={() => handleClickPlayTrack(uri)}
                >
                  <img src={images[0] && images[0].url} alt={name} />
                  <div className="Search-tracks-items-name">{name}</div>
                </div>
              ))}
            </div>
          </section>
        )}
        {playlistsItems && playlistsItems.length > 0 && (
          <section className="Search-albums-section">
            <h1>Playlists</h1>
            <div className="Search-album-items">
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
