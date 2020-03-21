import React, { useState, useEffect, useRef } from "react";
import { fetchFollowedArtists } from "apis";
import ArtistsItem from "../artists/artists-item/ArtistsItem";
import "./artists.scss";

const Artists = () => {
  const isCancelled = useRef(false);
  const [followedArtists = [], setFollowedArtists] = useState();

  const fetchArtists = () => {
    fetchFollowedArtists(localStorage.getItem("token"), "artist", ({ artists }) => {
      setFollowedArtists(artists.items);
    });
  };

  useEffect(() => {
    !isCancelled.current && fetchArtists();

    return () => {
      isCancelled.current = true;
    };
  }, []);

  return (
    <div className="Artists-container">
      <div className="Artists-items">
        {followedArtists.map(artist => (
          <ArtistsItem key={artist.id} {...artist} />
        ))}
      </div>
    </div>
  );
};

export default Artists;
