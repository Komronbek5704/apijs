import React from "react";
import ReactDOM from "react-dom/client"; // Bu yerdan createRoot import qilinadi
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")); // createRoot yaratish
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
