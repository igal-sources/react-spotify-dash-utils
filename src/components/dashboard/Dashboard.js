import React, { useState } from "react";
import { useToken } from "../../services/hooks/use-selectors";
import { fetchArtist } from "../../apis/artistsService";

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
