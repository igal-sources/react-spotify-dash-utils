import React from "react";
import SpotifyPlayer from "react-spotify-player";
import { useSongData } from "../../../services/hooks/use-selectors";
import "./footer.scss";

function Footer() {
  const initializeSongUri = "spotify:artist:7jefIIksOi1EazgRTfW2Pk";
  const songUri = useSongData();
  const size = { width: "100%", height: 300 };
  const view = "list";
  const theme = "black"; // or 'white'

  return (
    <div className="footer-container">
      <SpotifyPlayer
        uri={songUri ? songUri : initializeSongUri}
        size={size}
        view={view}
        theme={theme}
      />
    </div>
  );
}

export default Footer;
