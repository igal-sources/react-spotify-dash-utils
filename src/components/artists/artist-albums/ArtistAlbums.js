import React, { useState, useEffect, useRef } from "react";
import { fetchArtistsAlbums } from "apis";
import ArtistAlbumItem from "../artist-album-item/ArtistAlbumItem";
import "./artist-albums.scss";

const ArtistAlbums = props => {
  const {
    artist: { id, name }
  } = props.location.state;

  const isCancelled = useRef(false);
  const [artistAlbums, setArtistAlbums] = useState([]);

  const fetchAlbumsByArtist = () => {
    fetchArtistsAlbums(localStorage.getItem("token"), id, albums => {
      setArtistAlbums(albums.items);
    });
  };

  const albums = artistAlbums.filter(album => album.album_group === "album");
  const singles = artistAlbums.filter(album => album.album_group === "single");
  const compilations = artistAlbums.filter(album => album.album_group === "compilation");
  const appearsOn = artistAlbums.filter(album => album.album_group === "appears_on");

  useEffect(() => {
    !isCancelled.current && fetchAlbumsByArtist();

    return () => {
      isCancelled.current = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="ArtistAlbums-container">
      <div className="ArtistAlbums-Header">
        <p>{name}</p>
      </div>
      <div className="ArtistAlbums-sections">
        {albums.length > 0 && (
          <section className="ArtistAlbums-section">
            <h1>Albums</h1>
            <div className="ArtistAlbums-items">
              {albums.map(item => (
                <ArtistAlbumItem key={item.id} {...item} />
              ))}
            </div>
          </section>
        )}
        {singles.length > 0 && (
          <section className="ArtistAlbums-section">
            <h1>Singles</h1>
            <div className="ArtistAlbums-items">
              {singles.map(item => (
                <ArtistAlbumItem key={item.id} {...item} />
              ))}
            </div>
          </section>
        )}
        {compilations.length > 0 && (
          <section className="ArtistAlbums-section">
            <h1>Compilations</h1>
            <div className="ArtistAlbums-items">
              {compilations.map(item => (
                <ArtistAlbumItem key={item.id} {...item} />
              ))}
            </div>
          </section>
        )}
        {appearsOn.length > 0 && (
          <section className="ArtistAlbums-section">
            <h1>Appears On</h1>
            <div className="ArtistAlbums-items">
              {appearsOn.map(item => (
                <ArtistAlbumItem key={item.id} {...item} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ArtistAlbums;
