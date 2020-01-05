import React, { useState, useRef, useEffect, Suspense } from "react";
import SimpleBar from "simplebar-react";
import * as p5 from "p5";

import TOPOLOGY from "./animation/vanta.topology.js";

import Navbar from "./navigation/Navbar";
import Routes from "./routes/Routes";
import Footer from "./navigation/Footer";
import Placeholder from "./views/Placeholder";

const Layout = () => {
  const [color, setColor] = useState("#2635a6");
  const [vantaEffect, setVantaEffect] = useState(null);

  const bgRef = useRef(null);
  const scrollRef = useRef(null);

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
    <div
      ref={bgRef}
      style={{ height: "100vh", width: "100vw", backgroundColor: color, transition: "background-color 1.5s ease" }}
    >
      <SimpleBar scrollableNodeProps={{ ref: scrollRef }} style={{ height: "100vh" }}>
        <div style={{ position: "absolute", right: 0, zIndex: 1000 }}>
          <Navbar color={color} onColourChanged={color => setColor(color)} />
        </div>
        <Suspense fallback={<Placeholder />}>
          <Routes color={color} />
        </Suspense>

        <Footer onScroll={() => (scrollRef.current.scrollTop = 0)} />
      </SimpleBar>
    </div>
  );
};

export default Layout;
