import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Kegiatan() {
  const [kegiatan, setKegiatan] = useState([]);

  useEffect(() => {
    const fetchKegiatan = async () => {
      try {
        const response = await fetch("http://localhost:3000/kegiatan");
        const data = await response.json();
        setKegiatan(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchKegiatan();
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
    <div className="container mx-auto px-1 items-center ">
      {/* Header */}
      <div className="text-center my-6">
        <h1 className="text-[24px] md:text-3xl font-bold md:text-[30px]">
          Kegiatan Di <span className="text-birutua">SD Negeri 05 Citayam</span>
        </h1>
        <p className="text-abu text-[13px] text-Poppins text-center md:text-[15px]">
          Kegiatan Siswa di SD Negeri 05 Citayam.
        </p>
      </div>

      {/* Slider */}
      <div className="relative mt-8 w-[387px] md:w-[650px] lg:w-[800px] mx-auto ">
        <Slider {...settings}>
          {kegiatan.length > 0 ? (
            kegiatan.map((item) => (
              <div key={item.id} className="flex  ">
                <div className="p-4 rounded-md shadow-lg border border-gray-200 w-full lg:w-[800px]">
                  <img
                    src={item.image}
                    alt={item.nama_kegiatan}
                    className="bg-cover rounded-md w-[350px] md:w-[650px] lg:w-[800px]"
                  />
                  <h3 className="text-md md:text-lg font-semibold text-center mt-2">
                    {item.nama_kegiatan}
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
  );
}

export default Kegiatan;
