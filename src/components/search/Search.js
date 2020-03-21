import React, { useState, useEffect } from "react";
import ArtistAlbumItem from "../artists/ArtistAlbumItem";
import { search } from "apis";
import "./search.scss";

const Search = () => {
  //albums, artists, tracks, playlists
  const [searchResults, setSearchResults] = useState();
  const [searchValue, setSearchValue] = useState([]);
  console.log("searchResults: ", searchResults);

  const { albums } = searchValue;

  const handleChange = event => {
    const value = event.target.value;
    setSearchValue(value);
  };
  const doSearch = event => {
    if (event.keyCode === 13) {
      // Enter
      search(localStorage.getItem("token"), searchValue, "album,artist,playlist,track", result => {
        setSearchResults(result);
      });
    }
  };

  // useEffect(() => {
  //   //doSearch("abba", "album,artist,playlist,track");

  //   return () => {};
  // }, []);

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
        />
      </div>
      <div className="ArtistAlbums-sections">
        {albums && albums.length > 0 && (
          <section className="ArtistAlbums-albums-section">
            <h1>Albums</h1>
            <div className="ArtistAlbums-items">
              {albums.map(item => (
                <ArtistAlbumItem key={item.id} {...item} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Search;
