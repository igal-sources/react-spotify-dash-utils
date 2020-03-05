import React, { useState } from "react";
import { fetchArtist } from "apis";

const Dashboard = () => {  
  const [artist, setArtist] = useState("");

  fetchArtist(localStorage.getItem("token"), "3PhoLpVuITZKcymswpck5b", artist => {
    setArtist(artist.name);
  });

  return (
    <div>
      <h1>Dashboard</h1>
      <h3>{artist}</h3>
    </div>
  );
};

export default Dashboard;
