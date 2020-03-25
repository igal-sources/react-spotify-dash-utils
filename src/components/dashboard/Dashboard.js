import React, { useState } from "react";
import { fetchArtist } from "apis";
import Spinner from "../main-container/spinner/Spinner";

const Dashboard = () => {
  const [artist, setArtist] = useState("");
  const [loading, setLoading] = useState(false);

  //GetUsersTopArtistsAndTracks - The type of entity to return. Valid values: artists or tracks.
  //fetchListOfNewReleases
  //GetCurrentUsersRecentlyPlayedTracks
  //fetchRecommendationsBasedOnSeeds
  fetchArtist(localStorage.getItem("token"), "3PhoLpVuITZKcymswpck5b", artist => {
    setArtist(artist.name);
  });

  return (
    <div>
      <h1>Dashboard</h1>
      <Spinner isLoading={loading} />
      <h3>{artist}</h3>
    </div>
  );
};

export default Dashboard;
