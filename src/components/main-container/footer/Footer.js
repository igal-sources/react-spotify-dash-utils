import React, { useState, useEffect } from "react";
import { useSongData } from "../../../services/hooks/use-selectors";
import "./footer.scss";

function Footer() {
  const [initializeSongUri, setInitializeSongUri] = useState("artist/7jefIIksOi1EazgRTfW2Pk");
  const songUri = useSongData();

  const handlePlayerUri = uriString => {
    const mediaType = uriString.split(":")[1];
    const mediaId = uriString.split(":")[2];
    return `${mediaType}/${mediaId}`;
  };

  useEffect(() => {
    songUri && setInitializeSongUri(handlePlayerUri(songUri));
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [songUri]);

  return (
    <div className="Footer-container">
      <iframe
        title="Spotify Player"
        className="Footer-player"
        src={`https://open.spotify.com/embed/${initializeSongUri}`}
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
}

export default Footer;
