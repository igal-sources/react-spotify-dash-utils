import React from "react";
import { Artist } from "react-spotify-api";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Artist id="3PhoLpVuITZKcymswpck5b">
        {(artist, loading, error) => (artist ? <h1>{artist.name}</h1> : null)}
      </Artist>
    </div>
  );
};

export default Dashboard;
