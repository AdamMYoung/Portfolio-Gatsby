import React, { useState, Suspense } from "react";

import background from "./static/5-dots.png";

import Navbar from "./navigation/Navbar";
import Routes from "./routes/Routes";
import Footer from "./navigation/Footer";
import Placeholder from "./views/Placeholder";

const Layout = () => {
  const [color, setColor] = useState("#002f6c");

  const r = parseInt(color.slice(1, 3), 16),
    g = parseInt(color.slice(3, 5), 16),
    b = parseInt(color.slice(5, 7), 16);
  return (
    <div
      style={{
        backgroundImage: `url(${background})`
      }}
    >
      <div
        style={{
          overflow: "auto",
          height: "100vh",
          backgroundColor: `rgba(${r},${g},${b},0.4)`,
          transition: "background-color 1.5s ease"
        }}
      >
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
