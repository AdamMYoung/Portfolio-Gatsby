import React from "react";
import { Spinner } from "react-bootstrap";

const SuspenseFallback = () => (
  <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
    <Spinner animation="border" role="status" />
  </div>
);

export default SuspenseFallback;
