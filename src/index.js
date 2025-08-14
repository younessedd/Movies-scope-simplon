// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// استخدم basename عند النشر على GitHub Pages
const basename =
  process.env.NODE_ENV === "production"
    ? "/Movies-scope-simplon" // غيّرها لاسم مستودع GitHub الخاص بك
    : "/";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename={basename}>
    <App />
  </BrowserRouter>
);
