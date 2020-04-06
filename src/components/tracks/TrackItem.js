import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import allActions from "actions";
import "./track-item.scss";

const TrackItem = ({ name, album: { images, name: albumName }, uri }) => {
  const dispatch = useDispatch();

  const handleClickPlayTrack = (trackUrl) =>
    dispatch(allActions.songActions.playSong({ songId: trackUrl }));

  const getImage = (images) => {
    if (images.length === 0) {
      return undefined;
    }
    if (images.length === 1) {
      return images[0].url;
    }
    const imageItem = images.filter((item) => {
      return item.height === 64;
    });

    return imageItem && imageItem[0].url;
  };

  return (
    <div className="TrackItem-container">
      <div className="TrackItem-image">
        <img src={getImage(images)} alt={name} />
      </div>
      <div className="TrackItem-header">
        <div className="TrackItem-title" onClick={() => handleClickPlayTrack(uri)}>
          <p>{name}</p>
        </div>
        <div className="TrackItem-album">
          <p>{albumName}</p>
        </div>
      </div>
    </div>
  );
};

TrackItem.propTypes = {
  name: PropTypes.string,
  images: PropTypes.array,
  albumName: PropTypes.string,
};

export default TrackItem;
