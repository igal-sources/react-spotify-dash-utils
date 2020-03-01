import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import rootReducer from "./reducers";
import { Provider } from "react-redux";
import { SpotifyApiContext } from "react-spotify-api";
import App from "./components/App";

const token =
  "BQAF2DQqmcJFz0lzuMjuoAT4PK4WV_f4_RjjM0ceE6i9RTftqjPew4RIvSCKGNQfd2qzfRf5IURf_9B_KfQXSJdd1tTFfLBlC0pun5Ub9mH7xbKfMwjjZCyrH-GX4GEf3NYZfVeMOkMyqu6Cc36D1QDG1xFXuLIztbllujFTLaTD9-3m3sJa20jIYYg8UpRYKiifxpPM5OeczW4kXh7CnYnjCCbSKCmmn8W43ueSLhWhpGqamzJbi-D-CKGx7lyEM4rffqZ1pn7c3Ja2uBhy-1hQyrdIPbt_cQ";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <SpotifyApiContext.Provider value={token}>
      <App />
    </SpotifyApiContext.Provider>
  </Provider>,
  document.getElementById("root")
);
