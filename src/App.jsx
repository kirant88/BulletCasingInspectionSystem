// src/App.js
import React from "react";
import BulletInspection from "./components/BulletInspection";

import "./app.css";

const App = ({ toggleTheme, mode }) => {
  return <BulletInspection toggleTheme={toggleTheme} mode={mode} />;
};

export default App;
