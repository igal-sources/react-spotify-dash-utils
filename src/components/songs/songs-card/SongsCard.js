import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./songs-card.scss";

const SongsCard = ({ name, images }) => {
  const isCancelled = useRef(false);
  const [imageUrl, setImageUrl] = useState(undefined);

  const getImage = () => {
    const imageItem = images.filter((item) => item.url);
    setImageUrl(imageItem && imageItem[0].url);
  };

  useEffect(() => {
    !isCancelled.current && getImage();

    return () => {
      isCancelled.current = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const style = {
    backgroundImage: `url(${imageUrl})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="SongsCard-container">
      <div className="SongsCard-image" style={style}></div>
      <div className="SongsCard-title">
        <p>{name}</p>
      </div>
    </div>
  );
};

SongsCard.propTypes = {
  name: PropTypes.string,
  images: PropTypes.array,
};

export default SongsCard;
