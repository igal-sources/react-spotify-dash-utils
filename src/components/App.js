import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./main-container/appRoutes";
import "semantic-ui-css/semantic.min.css";
import { Grid } from "semantic-ui-react";
import Header from "./main-container/header/Header";
import Footer from "./main-container/footer/Footer";
import HomeIcon from "@material-ui/icons/Home";
import ReceiptIcon from "@material-ui/icons/Receipt";
import NotificationsIcon from "@material-ui/icons/Notifications";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import SettingsIcon from "@material-ui/icons/Settings";
import Sidebar from "../components/main-container/side-bar/SideBar";
import "./app.scss";

function onClick(e, item) {
  window.alert(JSON.stringify(item, null, 2));
}

const items = [
  { name: "home", label: "Home", Icon: HomeIcon },
  {
    name: "billing",
    label: "Billing",
    Icon: ReceiptIcon,
    items: [
      { name: "statements", label: "Statements", onClick },
      { name: "reports", label: "Reports", onClick }
    ]
  },
  "divider",
  {
    name: "settings",
    label: "Settings",
    Icon: SettingsIcon,
    items: [
      { name: "profile", label: "Profile" },
      { name: "insurance", label: "Insurance", onClick },
      "divider",
      {
        name: "notifications",
        label: "Notifications",
        Icon: NotificationsIcon,
        items: [
          { name: "email", label: "Email", onClick },
          {
            name: "desktop",
            label: "Desktop",
            Icon: DesktopWindowsIcon,
            items: [
              { name: "schedule", label: "Schedule" },
              { name: "frequency", label: "Frequency" }
            ]
          },
          { name: "sms", label: "SMS" }
        ]
      }
    ]
  }
];
const App = () => {
  return (
    <BrowserRouter>
      <div className="App-main">
        <Header />
        <Grid>
          <Grid.Column className="App-sidebar" width={3}>
            <Sidebar items={items} />
          </Grid.Column>
          <Grid.Column className="App-content" width={13}>
              <Routes />
          </Grid.Column>
        </Grid>
        <div className="App-footer">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
