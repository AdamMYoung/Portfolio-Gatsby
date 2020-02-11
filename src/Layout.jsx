import React, { useState, useRef, useEffect, Suspense } from "react";

import Navbar from "./navigation/Navbar";
import Routes from "./routes/Routes";
import Footer from "./navigation/Footer";
import Placeholder from "./views/Placeholder";

const Layout = () => {
  const [color, setColor] = useState("#002f6c");

  return (
    <div style={{ backgroundColor: color, transition: "background-color 1.5s ease" }}>
      <div style={{ overflow: "auto", height: "100vh" }}>
        <div style={{ position: "absolute", right: 15, zIndex: 1000 }}>
          <Navbar color={color} onColourChanged={color => setColor(color)} />
        </div>
        <Suspense fallback={<Placeholder />}>
          <Routes color={color} />
        </Suspense>

        <Footer onScroll={() => window.scrollTo(0)} />
      </div>
    </div>
  );
};

export default Layout;
