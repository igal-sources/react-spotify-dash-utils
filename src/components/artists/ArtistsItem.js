import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { fetchArtist } from "../../apis";
import "./artists-item.scss";

const ArtistItem = ({ name, images, id }) => {
  const isCancelled = useRef(false);
  const [artist, setArtist] = useState();
  const token = localStorage.getItem("token");

  useEffect(() => {
    !isCancelled.current &&
      fetchArtist(token, id, artist => {
        setArtist(artist);
      });
    return () => {
      isCancelled.current = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="ArtistItem-container">
      <Link to={{ pathname: "/artist-albums", state: { artist } }} className="ArtistItem-image">
        {<img src={images[0] && images[0].url} alt={name} />}
      </Link>
      <div className="ArtistItem-name">{name}</div>
    </div>
  );
};

export default ArtistItem;
