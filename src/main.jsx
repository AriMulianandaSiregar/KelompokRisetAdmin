import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);

// npm install @fortawesome/react-fontawesome
// npm install @fortawesome/free-solid-svg-icons
// npm install @fortawesome/fontawesome-svg-core
