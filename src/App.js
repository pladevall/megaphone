import React from "react";
import "antd/dist/antd.css";
import "./App.css";

import Application from "./components/App";
import UserProvider from "./providers/UserProvider";

function App() {
  return (
    <UserProvider>
      <Application />
    </UserProvider>
  );
}

export default App;
