import React from "react";
import sdncitayam from "../assets/images/sd.jpg";

function About() {
  return (
    <div className="w-full px-12 md:px-20 flex flex-col items-center mt-10 md:mt-30 ">
      <h1 className="text-center text-[24px] font-bold  text-birutua md:text-[30px]">
        Tentang <span className="text-black">Kami</span>
      </h1>
      <p className="text-abu text-[13px] text-Poppins text-center md:text-[15px]">
        Peranan Sekolah di SD Negeri 05 Citayam.
      </p>
      <div className="flex flex-col sm:flex-col md:flex-row items-start mt-10 lg:mt-[20px] w-full">
        {/* Gambar */}
        <div className="w-full md:w-1/2 flex justify-center p-4 rounded-md shadow-lg border border-gray-200">
          <img
            src={sdncitayam}
            alt="sdn5citayam"
            className="w-[350px] h-[200px]  md:w-[100%] md:h-[310px] lg:h-[350px] object-cover rounded-[5px]"
          />
        </div>
        {/* Teks */}
        <div className=" w-full md:w-1/2 px-5  flex flex-col mt-5 md:mt-0 md:items-start lg:mt-4">
          <h2 className="text-[20px] font-semibold mb-1 text-birutua  text-center lg:text-[25px]">
            Peran <span className="text-black">Sekolah:</span>
          </h2>
          <p className="mt-1 text-justify text-[13px] md:text-[14px] lg:text-[19px]">
            Sekolah adalah tempat mencetak generasi penerus bangsa yang
            berkualitas, berkarakter, dan berprestasi di berbagai bidang.
            Melalui pendidikan yang terarah, siswa dibekali ilmu pengetahuan,
            keterampilan, serta nilai-nilai moral agar mampu bersaing di tingkat
            nasional maupun internasional.
          </p>
          <p className="mt-1 lg:mt-2 text-justify text-[13px] md:text-[14px] lg:text-[19px]">
            Dengan bimbingan tenaga pendidik yang profesional, sekolah berperan
            dalam membentuk individu yang siap menghadapi tantangan global dan
            berkontribusi bagi masyarakat.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
