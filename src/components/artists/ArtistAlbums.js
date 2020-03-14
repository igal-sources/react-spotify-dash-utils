import React, { useState, useEffect, useRef } from "react";
import { fetchArtistsAlbums } from "apis";
import ArtistAlbumItem from "../artists/ArtistAlbumItem";
import "./artist-albums.scss";

const ArtistAlbums = props => {
  const {
    artist: { id }
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

  useEffect(() => {
    !isCancelled.current && fetchAlbumsByArtist();

    return () => {
      isCancelled.current = true;
    };
  }, []);

  return (
    <div className="ArtistAlbums-container">
      <div className="ArtistAlbums-items">
        {artistAlbums.map(album => (
          <ArtistAlbumItem key={album.id} {...album} />
        ))}
      </div>
    </div>
  );
};

export default ArtistAlbums;
