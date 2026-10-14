import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import Loader from "./components/Loader";
import "./index.css";

// HashRouter keeps every route working on plain static hosting (no server rewrites).
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Loader />
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
