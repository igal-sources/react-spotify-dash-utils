import React, { useState, useEffect, useRef } from "react";
import { fetchArtistsAlbums } from "apis";
import ArtistAlbumItem from "../artists/ArtistAlbumItem";
import "./artist-albums.scss";

const ArtistAlbums = props => {
  const {
    artist: { id, name, images }
  } = props.location.state;
  console.log("ArtistAlbums - props: ", props.location.state);

  const isCancelled = useRef(false);
  const [artistAlbums, setArtistAlbums] = useState([]);
  console.log("artistAlbums: ", artistAlbums);

  const fetchAlbumsByArtist = () => {
    fetchArtistsAlbums(localStorage.getItem("token"), id, albums => {
      setArtistAlbums(albums.items);
    });
  };

  const albums = artistAlbums.filter(album => album.album_group === "album");
  console.log("albums: ", albums.length);
  const singles = artistAlbums.filter(album => album.album_group === "single");
  console.log("singles: ", singles.length);
  const compilations = artistAlbums.filter(album => album.album_group === "compilation");
  console.log("compilations: ", compilations.length);
  const appearsOn = artistAlbums.filter(album => album.album_group === "appears_on");
  console.log("appearsOn: ", appearsOn.length);

  console.log("images[0].url", images[0].url);
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
          <section className="ArtistAlbums-albums-section">
            <h1>Albums</h1>
            <div className="ArtistAlbums-items">
              {albums.map(item => (
                <ArtistAlbumItem key={item.id} {...item} />
              ))}
            </div>
          </section>
        )}
        {singles.length > 0 && (
          <section className="ArtistAlbums-singles-section">
            <h1>Singles</h1>
            <div className="ArtistAlbums-items">
              {singles.map(item => (
                <ArtistAlbumItem key={item.id} {...item} />
              ))}
            </div>
          </section>
        )}
        {compilations.length > 0 && (
          <section className="ArtistAlbums-compilations-section">
            <h1>Compilations</h1>
            <div className="ArtistAlbums-items">
              {compilations.map(item => (
                <ArtistAlbumItem key={item.id} {...item} />
              ))}
            </div>
          </section>
        )}
        {appearsOn.length > 0 && (
          <section className="ArtistAlbums-appearsOn-section">
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
