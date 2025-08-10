import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Guru from "./components/Guru";
import Perpustakaan from "./components/Perpustakaan";
import Berita from "./components/Berita";
import Faq from "./components/Faq";
import BeritaDetails from "./components/BeritaDetails";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const aboutRef = useRef(null);
  const guruRef = useRef(null);
  const perpustakaanRef = useRef(null);
  const faqRef = useRef(null);
  const footerRef = useRef(null);

  const scrollToAbout = () =>
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  const scrollToGuru = () =>
    guruRef.current?.scrollIntoView({ behavior: "smooth" });
  const scrollToPerpustakaan = () =>
    perpustakaanRef.current?.scrollIntoView({ behavior: "smooth" });
  const scrollToFaq = () =>
    faqRef.current?.scrollIntoView({ behavior: "smooth" });
  const scrollToFooter = () =>
    footerRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Navbar
                scrollToAbout={scrollToAbout}
                scrollToGuru={scrollToGuru}
                scrollToPerpustakaan={scrollToPerpustakaan}
                scrollToFaq={scrollToFaq}
                scrollToFooter={scrollToFooter}
              />
              <Hero scrollToAbout={scrollToAbout} />
              <section ref={aboutRef}>
                <About />
              </section>
              <section ref={guruRef}>
                <Guru />
              </section>

              <section ref={perpustakaanRef}>
                <Perpustakaan />
              </section>
              <section ref={faqRef}>
                <Faq />
              </section>
              <div className="text-center my-6">
                <a href="/berita" className="text-blue-600 underline">
                  Lihat Berita
                </a>
              </div>
              <footer ref={footerRef}>
                <Footer />
              </footer>
            </>
          }
        />

        {/* Halaman Berita */}
        <Route path="/berita" element={<Berita />} />
        <Route path="/berita/:id" element={<BeritaDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
