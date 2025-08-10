import React from "react";
import sdncitayam from "../assets/images/sd.jpg";

function About() {
  return (
    <div className="w-full px-6 md:px-20 flex flex-col items-center mt-10 md:mt-20">
      {/* Judul */}
      <h1 className="text-center text-[24px] font-bold text-birutua md:text-[30px]">
        Tentang <span className="text-black">Kami</span>
      </h1>
      <p className="text-abu text-[13px] text-Poppins text-center md:text-[15px]">
        Peranan Sekolah di SD Negeri 05 Citayam.
      </p>

      {/* Konten Gambar & Teks */}
      <div className="flex flex-col md:flex-row items-start mt-10 w-full gap-6">
        {/* Gambar */}
        <div className="w-full md:w-1/2 flex justify-center p-4 rounded-md shadow-lg border border-gray-200">
          <img
            src={sdncitayam}
            alt="sdn5citayam"
            className="w-[350px] h-[200px] md:w-full md:h-[310px] lg:h-[350px] object-cover rounded-[5px]"
          />
        </div>

        {/* Teks */}
        <div className="w-full md:w-1/2 px-5 flex flex-col">
          <h2 className="text-[20px] font-semibold mb-1 text-birutua text-center md:text-left lg:text-[25px]">
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

      {/* Visi & Misi */}
      <div className="mt-10 w-full max-w-5xl">
        {/* Visi */}
        <h2 className="text-[20px] font-semibold text-birutua text-center md:text-left lg:text-[25px]">
          Visi <span className="text-black">Sekolah</span>
        </h2>
        <p className="mt-2 text-justify text-[13px] md:text-[14px] lg:text-[19px]">
          SD N Citayam mewujudkan peserta didik yang cerdas, terampil, berakhlak
          mulia, dan menciptakan lingkungan sekolah yang sehat melalui
          pembiasaan hidup bersih dan sehat serta menumbuhkembangkan potensi
          sumber daya manusia (SDM) berdasarkan moralitas dan keimanan.
        </p>

        {/* Misi */}
        <h2 className="mt-6 text-[20px] font-semibold text-birutua text-center md:text-left lg:text-[25px]">
          Misi <span className="text-black">Sekolah</span>
        </h2>
        <ol className="list-decimal list-inside mt-2 space-y-2 text-[13px] md:text-[14px] lg:text-[19px] text-justify">
          <li>
            Melaksanakan pembelajaran dan bimbingan secara efektif sehingga
            setiap peserta didik berkembang secara optimal, sesuai dengan
            potensi yang dimiliki.
          </li>
          <li>
            Mendorong dan membantu setiap peserta didik untuk mengenali potensi
            dirinya sehingga dapat dikembangkan secara optimal dengan bimbingan
            guru.
          </li>
          <li>
            Menumbuhkan penghayatan terhadap ajaran agama yang dianut dan budaya
            bangsa sehingga menjadi sumber kearifan dalam bertindak.
          </li>
          <li>
            Menumbuhkan pembiasaan pola hidup sehat dan bersih pada warga
            sekolah.
          </li>
          <li>
            Melaksanakan pembelajaran ekstrakurikuler secara efektif sesuai
            dengan bakat dan minat sehingga setiap peserta didik memiliki
            keunggulan dalam belajar mandiri dan berbagai lomba akademik/non
            akademik.
          </li>
          <li>
            Melaksanakan kegiatan pengembangan kompetensi guru secara
            berkesinambungan.
          </li>
        </ol>
      </div>

      {/* Identitas Sekolah */}
      <div className="mt-10 w-full max-w-5xl">
        <h2 className="text-[20px] font-semibold text-birutua text-center md:text-left lg:text-[25px]">
          Identitas <span className="text-black">Sekolah</span>
        </h2>
        <div className="overflow-x-auto mt-3">
          <table className="min-w-full border border-gray-300 text-[13px] md:text-[14px] lg:text-[18px]">
            <tbody>
              <tr className="border-b">
                <td className="p-2 font-semibold w-1/3">NPSN</td>
                <td className="p-2">20201885</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-semibold w-1/3">EMAIL</td>
                <td className="p-2">citayamsdn@gmail.com</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-semibold">Status</td>
                <td className="p-2">Negeri</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-semibold">Bentuk Pendidikan</td>
                <td className="p-2">SD</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-semibold">Status Kepemilikan</td>
                <td className="p-2">Pemerintah Daerah</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-semibold">Akreditasi</td>
                <td className="p-2 flex items-center gap-2">
                  Baik (B)
                  <a
                    href="https://ban-pdm.id/satuanpendidikan/20201885"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Lihat Detail
                  </a>
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-semibold">SK Pendirian Sekolah</td>
                <td className="p-2">421/190-Pemb SD</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-semibold">Tanggal SK Pendirian</td>
                <td className="p-2">2021-12-27</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-semibold">SK Izin Operasional</td>
                <td className="p-2">421/190-Pemb SD</td>
              </tr>
              <tr>
                <td className="p-2 font-semibold">
                  Tanggal SK Izin Operasional
                </td>
                <td className="p-2">2021-12-27</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default About;
