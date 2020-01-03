import React, { useState, useRef, useEffect } from "react";
import * as p5 from "p5";
import SimpleBar from "simplebar-react";

import TOPOLOGY from "./animation/vanta-topology.min.js";

import Navbar from "./navigation/Navbar";
import Routes from "./routes/Routes";

const Layout = () => {
  const [color, setColor] = useState("#2635a6");
  const [vantaEffect, setVantaEffect] = useState(null);
  const bgRef = useRef(null);

  //Updates the background when the page loads.
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        TOPOLOGY({
          el: bgRef.current,
          p5: p5,
          color: parseInt("00b0ff", 16),
          backgroundColor: parseInt("00b0ff", 16)
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div style={{ position: "relative" }}>
      <div style={{ position: "absolute", right: 0, zIndex: 1000 }}>
        <Navbar color={color} onColourChanged={color => setColor(color)} />
      </div>
      <div
        ref={bgRef}
        style={{
          position: "absolute",
          height: "100vh",
          width: "100vw",
          backgroundColor: color,
          transition: "background-color 1.5s ease"
        }}
      >
        <SimpleBar style={{ height: "100vh" }}>
          <Routes color={color} />
        </SimpleBar>
      </div>
    </div>
  );
};

export default Layout;
