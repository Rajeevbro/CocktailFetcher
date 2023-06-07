import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import DataRackContext from "./Context/DataRackContext.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <DataRackContext>
    <App />
  </DataRackContext>
);
