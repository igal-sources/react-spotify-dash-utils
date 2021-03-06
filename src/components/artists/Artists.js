import React, { useState, useEffect, useRef } from "react";
import { fetchFollowedArtists } from "apis";
import ArtistsItem from "../artists/artists-item/ArtistsItem";
import Spinner from "../main-container/spinner/Spinner";
import "./artists.scss";

const Artists = ({ token }) => {
  const isCancelled = useRef(false);
  const [followedArtists = [], setFollowedArtists] = useState();
  const [loading, setLoading] = useState(false);

  const fetchArtists = () => {
    setLoading(true);
    fetchFollowedArtists(token, "artist", ({ artists }) => {
      setFollowedArtists(artists.items);
      setLoading(false);
    });
  };

  useEffect(() => {
    !isCancelled.current && fetchArtists();

    return () => {
      isCancelled.current = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="Artists-container">
      <Spinner isLoading={loading} />
      <div className="Artists-items">
        {followedArtists.map(artist => (
          <ArtistsItem key={artist.id} {...artist} />
        ))}
      </div>
    </div>
  );
};

export default Artists;
