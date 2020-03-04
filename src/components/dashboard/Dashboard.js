import React, { useState } from "react";
import { fetchArtist, GetCurrentUsersSavedTracks } from "apis";

const Dashboard = () => {
  const [artist, setArtist] = useState("");

  fetchArtist(localStorage.getItem("token"), "3PhoLpVuITZKcymswpck5b", artist => {
    setArtist(artist.name);
  });

  // GetCurrentUsersSavedTracks(localStorage.getItem("token"), songs => {
  //   console.log("songs: ", songs);
  // });

  return (
    <div>
      <h1>Dashboard</h1>
      <h3>{artist}</h3>
    </div>
  );
};

export default Dashboard;
