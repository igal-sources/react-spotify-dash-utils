import React, { useState, useEffect } from "react";
import { useSongData } from "../../../services/hooks/use-selectors";
import "./footer.scss";

function Footer() {
  const [initializeSongUri, setInitializeSongUri] = useState("artist/7jefIIksOi1EazgRTfW2Pk");
  console.log("initializeSongUri: ", initializeSongUri);
  const songUri = useSongData();

  const handlePlayerUri = uriString => {
    const mediaId = uriString.split(":")[2];
    const mediaType = uriString.split(":")[1];
    console.log("`${mediaType}/${mediaId}`: ", `${mediaType}/${mediaId}`);
    return `${mediaType}/${mediaId}`;
  };
  //https://open.spotify.com/embed/track/3tBKRwJPL5IP8l8WIlnD6i

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
