import React from "react";
import guruAll from "../assets/images/all teacher.jpg";

function Guru() {
  const kepalaSekolah = ["Kamsiyah S.Pd,SD, M.Pd"];
  const bendahara = ["Nurlela S.Pd,SD"];

  const guruKelas = [
    "Nurlela S.Pd,SD",
    "Yanah S.Pd,SD",
    "Nur Asiyah S.Pd,SD",
    "Lisnawati",
    "Magda Indri Yani S.Pd",
    "Mugeni",
    "Cicih Rostini S.Pd,SD",
    "Hermawan Sidik Bayu S.Pd",
    "Siti Maryam S.Pd,SD",
    "Fadlie Ibnu Saufiq S.Pd",
    "Ida Zahidah S.Pd,SD",
  ];

  const guruMapel = [
    "Eddy Suryadi S.PdI",
    "Syahbilla Suryaningsih S.Pd",
    "Robbi Hilmanto",
  ];

  const operator = ["Razu Al Ma'mun S.M", "Robbi Hilmanto"];
  const tataUsaha = ["Lisnawati"];

  const renderList = (title, list) => (
    <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 mb-8">
      <h2 className="text-xl font-bold text-black mb-5 border-b border-gray-200 pb-2">
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {list.map((name, index) => (
          <div
            key={index}
            className="bg-birutua text-white py-3 px-4 rounded-lg shadow text-center text-sm md:text-base hover:scale-[1.03] transition-transform duration-200"
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 flex flex-col items-center mt-10">
      {/* Judul */}
      <h1 className="text-center text-[22px] sm:text-[26px] md:text-[30px] font-bold leading-tight">
        Guru & Staf <span className="text-birutua">SD Negeri 05 Citayam</span>
      </h1>
      <p className="text-abu text-[13px] sm:text-[14px] md:text-[15px] text-Poppins text-center max-w-2xl mt-3">
        Daftar tenaga pendidik dan kependidikan di SD Negeri 05 Citayam.
      </p>

      {/* Foto Guru */}
      <div className="p-4 rounded-xl shadow-lg border border-gray-200 mt-8 w-full max-w-5xl bg-white">
        <img
          src={guruAll}
          alt="Semua Guru"
          className="rounded-lg w-full max-w-[800px] mx-auto object-cover"
        />
      </div>

      {/* Daftar Guru & Staf */}
      <div className="mt-10 w-full max-w-6xl space-y-6">
        {renderList("Kepala Sekolah", kepalaSekolah)}
        {renderList("Bendahara", bendahara)}
        {renderList("Guru Kelas", guruKelas)}
        {renderList("Guru Mata Pelajaran", guruMapel)}
        {renderList("Operator", operator)}
        {renderList("Tata Usaha", tataUsaha)}
      </div>
    </div>
  );
}

export default Guru;
