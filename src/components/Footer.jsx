import React from "react";

function Footer() {
  return (
    <footer className="mt-10 bg-[#003366] text-white py-10 px-6 md:px-16 lg:px-24">
      <div className="text-center mb-8">
        <h1 className="text-[26px] font-bold md:text-[30px] lg:text-[34px]">
          Detail <span className="text-white">Sekolah Kami</span>
        </h1>
        <p className="text-[14px] md:text-[16px] lg:text-[18px]">
          Detail Kontak dan Lokasi Sekolah Kami
        </p>
      </div>

      <div className="flex flex-col md:flex-row md:items-start md:gap-12 lg:gap-16">
        <div className="md:w-1/2 text-center md:text-left space-y-4">
          <p className="text-[12px] md:text-[14px] lg:text-[16px] font-medium">
            <strong>NPSN:</strong> 20201885
          </p>
          <p className="text-[12px] md:text-[14px] lg:text-[16px]">
            <strong>Alamat:</strong> Kp Baru, Rt 03 / Rw05, Kel. Citayam, Kec.
            Tajurhalang, Kab. Bogor, Prov. Jawa Barat, 16320
          </p>
          <p className="text-[12px] md:text-[14px] lg:text-[16px]">
            <strong>Telepon:</strong> (0899-9480-608)
          </p>
        </div>

        <div className="md:w-1/2 flex justify-center md:justify-end mt-5 md:mt-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.585553391917!2d106.76134647380525!3d-6.4472224935441265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e83689583a13%3A0x2893ed7a2261aa8b!2sSDN%20Citayam%2005!5e0!3m2!1sen!2sid!4v1748972787101!5m2!1sen!2sid"
            width="600"
            height="450"
            style={{ border: 0 }} // ✅ perbaikan disini
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="text-center mt-12">
        <p className="text-[10px] md:text-[12px] lg:text-[14px] font-light">
          &copy; 2025 SDN CITAYAM 05.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
