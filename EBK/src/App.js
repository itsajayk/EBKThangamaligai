import React from "react";
import { Helmet } from "react-helmet";
import { Routes, Route, BrowserRouter } from "react-router-dom";

// Layout
import TopNavbar from "./components/Nav/TopNavbar";

// Pages
import Landing from "./screens/Landing";
import About from "./components/Sections/About";
import Contact from "./components/Sections/Contact";
import AdminPanel from "./components/Sections/AdminPanel";

// Utils
import ScrollToHash from "./components/utils/ScrollToHash";

export default function App() {
  return (
    <>
        <BrowserRouter>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <ScrollToHash />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
          </BrowserRouter>
    </>
  );
}
