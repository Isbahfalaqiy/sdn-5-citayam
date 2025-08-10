import React from "react";

function Footer() {
  return (
    <footer className="mt-10 bg-[#003366] text-white py-10 px-6 md:px-16 lg:px-24">
      {/* Judul */}
      <div className="text-center mb-8">
        <h1 className="text-[26px] font-bold md:text-[30px] lg:text-[34px]">
          Detail Sekolah Kami
        </h1>
        <p className="text-[14px] md:text-[16px] lg:text-[18px] mt-2">
          Detail Kontak dan Lokasi Sekolah Kami
        </p>
      </div>

      {/* Kontak */}
      <div className="grid gap-6 md:grid-cols-2 md:gap-12 lg:gap-16">
        <div className="space-y-4 text-center md:text-left">
          <p className="text-[12px] md:text-[14px] lg:text-[16px] font-medium">
            <strong>Email:</strong> citayamsdn@gmail.com
          </p>
          <p className="text-[12px] md:text-[14px] lg:text-[16px]">
            <strong>Telepon:</strong> 0899-9480-608
          </p>
          <p className="text-[12px] md:text-[14px] lg:text-[16px] leading-relaxed">
            <strong>Alamat:</strong> Kp Baru, RT 03 / RW 05, Kel. Citayam, Kec.
            Tajurhalang, Kab. Bogor, Prov. Jawa Barat, 16320
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-12 border-t border-white/20 pt-4">
        <p className="text-[10px] md:text-[12px] lg:text-[14px] font-light">
          &copy; {new Date().getFullYear()} SDN CITAYAM 05. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
