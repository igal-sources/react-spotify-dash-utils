const config = {
  CLIENT_ID: "148e8fbc32114f91b63719aa9001df97",
  BASE_URL: "https://api.spotify.com/v1",
  REDIRECT_URI: "http://localhost:3000/callback",
  SCOPE:
    "user-read-currently-playing playlist-read-private playlist-read-collaborative playlist-modify-public user-read-recently-played playlist-modify-private ugc-image-upload user-follow-modify user-follow-read user-library-read user-library-modify user-read-private user-read-playback-state user-modify-playback-state",
  AUTHORIZE_URL: "https://accounts.spotify.com/authorize"
};

export default config;
