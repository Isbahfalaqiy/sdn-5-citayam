import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Perpustakaan() {
  const [perpustakaan, setPerpustakaan] = useState([]); // Menggunakan huruf kecil untuk konsistensi

  useEffect(() => {
    const fetchPerpustakaan = async () => {
      try {
        const response = await fetch("http://localhost:3000/perpustakaan");
        const data = await response.json();
        setPerpustakaan(data); // Menggunakan setPerpustakaan untuk menyimpan data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchPerpustakaan();
  }, []);

  const CustomPrevArrow = (props) => (
    <button
      {...props}
      className="absolute left-1 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-600 md:left-1 lg:left-1 cursor-pointer"
    >
      <FaArrowLeft size={24} />
    </button>
  );

  const CustomNextArrow = (props) => (
    <button
      {...props}
      className="absolute right-1 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-600 md:right-1 lg:right-1 cursor-pointer"
    >
      <FaArrowRight size={24} />
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div>
      <div className="w-full mt-10">
        <div className="text-center">
          <h1 className="text-center text-[24px] font-bold text-birutua md:text-[30px]">
            Perpustakaan
            <span className="text-black font-bold ml-1">
              Di SD Negeri 05 Citayam
            </span>
          </h1>
          <p className="text-abu text-[13px] text-Poppins text-center md:text-[15px]">
            Perpustakaan SD Negeri 05 Citayam.
          </p>
          <button
            onClick={() =>
              (window.location.href =
                "https://perpustakaansdn05citayam.rf.gd/dist/login.php")
            }
            className="bg-blue-600 hover:bg-blue-700 transition-all text-white px-3 py-2 
             rounded-lg font-medium shadow-lg focus:ring-2 focus:ring-blue-300 mt-4 
             flex items-center gap-2 mx-auto cursor-pointer"
          >
            Manajemen Perpustakaan <FaArrowRight />
          </button>
        </div>

        {/* Slider */}
        <div className="relative mt-8 w-[387px] md:w-[650px] lg:w-[800px] mx-auto">
          <Slider {...settings}>
            {perpustakaan.length > 0 ? ( // Menggunakan perpustakaan untuk memeriksa panjang
              perpustakaan.map((item) => (
                <div key={item.id} className="flex">
                  <div className="p-4 rounded-md shadow-lg border border-gray-200 w-full lg:w-[800px]">
                    <img
                      src={item.image}
                      alt={item.nama_perpustakaan}
                      className="bg-cover rounded-md w-[350px] h-[350px] md:h-[480px] lg:h-[570px] md:w-[650px] lg:w-[800px]"
                    />
                    <h3 className="text-md md:text-lg font-semibold text-center mt-2">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-lg font-medium">Loading...</p>
            )}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Perpustakaan;
