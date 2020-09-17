import React from "react";
import { Spinner } from "react-bootstrap";

const Placeholder = () => (
  <div style={{ height: "100vh", textAlign: "center" }}>
    <Spinner style={{ marginTop: "40vh" }} animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  </div>
);

export default Placeholder;
