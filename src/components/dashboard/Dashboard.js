import React, { useState } from "react";
import { useToken } from "services/hooks";
import { fetchArtist } from "apis";


const Dashboard = () => {
  const [artist, setArtist] = useState("");
  const token = useToken();

  fetchArtist(token, "3PhoLpVuITZKcymswpck5b", artist => {
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
