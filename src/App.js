import React from "react";
import { Toaster } from "react-hot-toast";

import UserInfo from "components/UserInfo/UserInfo";

import "styles/main.scss";

function App() {
  return (
    <div className="app">
      <Toaster
        toastOptions={{
          duration: 4000,
          position: "bottom-left",
          style: { marginBottom: "30px", marginLeft: "30px" },
        }}
      />
      <UserInfo />
    </div>
  );
}

export default App;
