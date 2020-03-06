import React from "react";
import SpotifyPlayer from "react-spotify-player";
import "./footer.scss";

function Footer() {
  const size = {
    width: "100%",
    height: 300
  };
  const view = "list";
  const theme = "black"; // or 'white'
  return (
    <div className="footer-container">
      <SpotifyPlayer
        uri="spotify:artist:0LcJLqbBmaGUft1e9Mm8HV"
        size={size}
        view={view}
        theme={theme}
      />
    </div>
  );
}

export default Footer;
