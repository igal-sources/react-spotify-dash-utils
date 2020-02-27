import React, { useState } from "react";

export const StoreContext = React.createContext(null);

const StoreProvider = ({ authToken, children, setAuthToken }) => {
  const [activeSession, setActiveSession] = useState(null);
  const [help, setHelp] = useState([]);
  const [pairing, setPairing] = useState([]);
  const [sharing, setSharing] = useState([]);
  const savedName = localStorage.getItem("userName");
  const [userName, setUserName] = useState(savedName);
  const [userProfile, setUserProfile] = useState({});

  const store = {
    activeSession,
    authToken,
    help: [help, setHelp],
    userName,
    userProfile,
    pairing: [pairing, setPairing],
    setActiveSession,
    setAuthToken,
    setUserName,
    setUserProfile,
    sharing: [sharing, setSharing]
  };

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};

export default StoreProvider;
