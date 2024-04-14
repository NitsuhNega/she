// Main.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Weather from "./Weather";

const Main = () => {
  return (
    <Routes>
      <Route exact={true} path="/" element={<Weather city="lisbon" />} />
      <Route exact={true} path="/paris" element={<Weather city="Paris" />} />
      <Route exact={true} path="/sydney" element={<Weather city="Sydney" />} />
      <Route
        exact={true}
        path="/san-francisco"
        element={<Weather city="San Francisco" />}
      />
    </Routes>
  );
};

export default Main;
