import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import LongTextTooltip from "../../../shared/custom-components/LongTextTooltip";
import spotifyImage from "../../../images/spotify.png";
import "./album-item.scss";

const AlbumItem = ({ name, images, id }) => {
  return (
    <div className="AlbumItem-container">
      <Link to={`/album-songs/${id}`} className="AlbumItem-image">
        {<img src={images[0] ? images[0].url : spotifyImage} alt={name} />}
      </Link>
      <LongTextTooltip className="AlbumItem-name">{name}</LongTextTooltip>
    </div>
  );
};

AlbumItem.propTypes = {
  name: PropTypes.string,
  images: PropTypes.array,
  id: PropTypes.string,
};

export default AlbumItem;
