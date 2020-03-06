import React from "react";

const Songs = props => {
  const { playlist, songs } = props.location.state;
  console.log("props.location.state: ", props.location.state);

  console.log(playlist);
  console.log(songs);
  return (
    <div>
      <h1>Songs</h1>
      <p>Songs page body content</p>
    </div>
  );
};

export default Songs;
