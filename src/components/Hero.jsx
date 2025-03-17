import React from "react";
import { FaArrowRight } from "react-icons/fa";
import sdbg from "../assets/images/sdbg.jpg";

function Hero({ scrollToAbout }) {
  return (
    <div
      className="relative max-w-full h-[810px] md:h-[750px] lg:h-[800px] flex flex-col items-center justify-center text-center px-6 md:px-16 lg:px-[157px] py-20 gap-6 
        bg-cover bg-center bg-no-repeat object-cover"
      style={{ backgroundImage: `url(${sdbg})` }}
    >
      {/* Overlay Blur Lebih Halus */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-lg"></div>

      {/* Konten di atas overlay */}
      <div className="relative text-white max-w-4xl">
        <h1 className="text-2xl md:text-4xl lg:text-[50px] font-bold mb-4">
          Selamat Datang Di Website Sekolah Kami
        </h1>
        <p className="text-sm md:text-md lg:text-lg mb-6 text-justify">
          Sekolah kami adalah lingkungan yang mendukung dan nyaman untuk
          belajar. Kami berkomitmen menghadirkan pendidikan berkualitas bagi
          setiap siswa. Harapan kami, Anda dapat memperoleh semua informasi yang
          diperlukan melalui website ini.
        </p>

        {/* Button Get Started */}
        <button
          onClick={scrollToAbout}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition-all text-white px-5 py-3 cursor-pointer 
            rounded-lg font-medium shadow-lg focus:ring-2 focus:ring-blue-300"
        >
          Get Started <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

export default Hero;
