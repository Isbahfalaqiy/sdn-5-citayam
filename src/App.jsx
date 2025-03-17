import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Guru from "./components/Guru";
import Kegiatan from "./components/Kegiatan";
import Perpustakaan from "./components/Perpustakaan";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  // Buat referensi untuk bagian About, Guru, Kegiatan, Perpustakaan, dan Footer
  const navbarRef = useRef(null);
  const aboutRef = useRef(null);
  const guruRef = useRef(null);
  const kegiatanRef = useRef(null);
  const perpustakaanRef = useRef(null);
  const footerRef = useRef(null);

  // Fungsi untuk scroll ke bagian About
  const scrollToNavbar = () => {
    navbarRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Fungsi untuk scroll ke bagian Guru
  const scrollToGuru = () => {
    guruRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToKegiatan = () => {
    kegiatanRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToPerpustakaan = () => {
    perpustakaanRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* Navbar menerima dua props secara terpisah */}
      <Navbar
        scrollToAbout={scrollToAbout}
        scrollToGuru={scrollToGuru}
        scrollToKegiatan={scrollToKegiatan}
        scrollToPerpustakaan={scrollToPerpustakaan}
        scrollToFooter={scrollToFooter}
      />

      <Hero scrollToAbout={scrollToAbout} />

      {/* About Section */}
      <section ref={aboutRef}>
        <About />
      </section>

      {/* Guru Section */}
      <section ref={guruRef}>
        <Guru />
      </section>

      {/* Kegiatan Section */}
      <section ref={kegiatanRef}>
        <Kegiatan />
      </section>

      {/* Perpustakaan Section */}
      <section ref={perpustakaanRef}>
        <Perpustakaan />
      </section>

      {/* Footer Section */}
      <footer ref={footerRef}>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
