import React, { useState, useEffect, useRef } from "react";
import { fetchArtistsAlbums } from "apis";
import { useTranslation } from "react-i18next";
import AlbumItem from "../../albums/album-item/AlbumItem";
// import ArtistAlbumItem from "../artist-album-item/ArtistAlbumItem";
import "./artist-albums.scss";

const ArtistAlbums = props => {
  const { t } = useTranslation();
  const {
    artist: { id, name }
  } = props.location.state;

  const isCancelled = useRef(false);
  const [artistAlbums, setArtistAlbums] = useState([]);
  const token = localStorage.getItem("token");

  const fetchAlbumsByArtist = () => {
    fetchArtistsAlbums(token, id, albums => {
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
            <h1>{t("albums")}</h1>
            <div className="ArtistAlbums-items">
              {albums.map(item => (
                <AlbumItem key={item.id} token={token} {...item} />
              ))}
            </div>
          </section>
        )}
        {singles.length > 0 && (
          <section className="ArtistAlbums-section">
            <h1>{t("singles")}</h1>
            <div className="ArtistAlbums-items">
              {singles.map(item => (
                <AlbumItem key={item.id} {...item} />
              ))}
            </div>
          </section>
        )}
        {compilations.length > 0 && (
          <section className="ArtistAlbums-section">
            <h1>{t("compilations")}</h1>
            <div className="ArtistAlbums-items">
              {compilations.map(item => (
                <AlbumItem key={item.id} {...item} />
              ))}
            </div>
          </section>
        )}
        {appearsOn.length > 0 && (
          <section className="ArtistAlbums-section">
            <h1>{t("appears-on")}</h1>
            <div className="ArtistAlbums-items">
              {appearsOn.map(item => (
                <AlbumItem key={item.id} {...item} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ArtistAlbums;
