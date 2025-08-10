import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import ikon menu
import logosd from "../assets/images/logo-sd.jpg";

function Navbar({
  scrollToAbout,
  scrollToGuru,
  scrollToPerpustakaan,
  scrollToBerita,
  scrollToFaq,
  scrollToFooter,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  // Efek perubahan navbar saat di-scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolling
          ? "bg-white  shadow-md"
          : "bg-transparent md:bg-transparent backdrop-blur-md"
      }`}
    >
      <div className="flex justify-between items-center py-4 px-6 md:px-10">
        {/* Logo dan Tulisan */}
        <div className="flex items-center gap-1 md:gap-1">
          <img src={logosd} alt="logo-sd" className="h-9 w-9" />
          <a
            href="/"
            className="text-[25px] md:text-[30px] lg:text-[35px] text-blue-500 font-bold cursor-pointer"
          >
            SDN 5
            <span className="text-birutua font-bold cursor-pointer">
              {" "}
              CITAYAM
            </span>
          </a>
        </div>

        {/* Menu Icon for Mobile */}
        <button
          className="lg:hidden text-birutua cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Navigasi */}
        <ul
          className={`absolute lg:static top-16 left-0 w-full lg:w-auto lg:flex lg:gap-6 bg-white lg:bg-transparent shadow-md lg:shadow-none transition-all ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li className="py-3 lg:py-0 text-center hover:bg-blue-50 lg:hover:bg-transparent">
            <a
              href="/"
              className={`cursor-pointer hover:text-birutua block px-4 ${
                scrolling
                  ? "text-black lg:text-black"
                  : "text-black lg:text-white"
              }`}
            >
              Beranda
            </a>
          </li>
          <li className="py-3 lg:py-0 text-center hover:bg-blue-50 lg:hover:bg-transparent">
            <a
              role="button"
              onClick={scrollToAbout}
              className={`cursor-pointer hover:text-birutua block px-4 ${
                scrolling
                  ? "text-black lg:text-black"
                  : "text-black lg:text-white"
              }`}
            >
              Tentang Kami
            </a>
          </li>
          <li className="py-3 lg:py-0 text-center hover:bg-blue-50 lg:hover:bg-transparent">
            <a
              role="button"
              onClick={scrollToGuru}
              className={`cursor-pointer hover:text-birutua block px-4 ${
                scrolling
                  ? "text-black lg:text-black"
                  : "text-black lg:text-white"
              }`}
            >
              Guru
            </a>
          </li>
          <li className="py-3 lg:py-0 text-center hover:bg-blue-50 lg:hover:bg-transparent">
            <a
              href="/berita"
              className={`cursor-pointer hover:text-birutua block px-4 ${
                scrolling
                  ? "text-black lg:text-black"
                  : "text-black lg:text-white"
              }`}
            >
              Berita
            </a>
          </li>
          <li className="py-3 lg:py-0 text-center hover:bg-blue-50 lg:hover:bg-transparent">
            <a
              role="button"
              onClick={scrollToPerpustakaan}
              className={`cursor-pointer hover:text-birutua block px-4 ${
                scrolling
                  ? "text-black lg:text-black"
                  : "text-black lg:text-white"
              }`}
            >
              Perpustakaan
            </a>
          </li>
          <li className="py-3 lg:py-0 text-center hover:bg-blue-50 lg:hover:bg-transparent">
            <a
              role="button"
              onClick={scrollToFaq}
              className={`cursor-pointer hover:text-birutua block px-4 ${
                scrolling
                  ? "text-black lg:text-black"
                  : "text-black lg:text-white"
              }`}
            >
              FAQ
            </a>
          </li>
        </ul>

        {/* Tombol Kontak */}
        <button
          onClick={scrollToFooter}
          className="hidden lg:flex bg-birutua text-white text-[18px] font-semibold hover:bg-blue-500 transition w-[124px] h-[45px] rounded-[30px] items-center justify-center cursor-pointer"
        >
          Contact
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
