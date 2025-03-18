import React, { useEffect, useState } from "react";
import guruAll from "../assets/images/all teacher.jpg";
import axios from "axios";
function Guru() {
  const [guru, setGuru] = useState([]);

  useEffect(() => {
    axios.get("/sekolah.json").then((response) => {
      setGuru(response.data.guru);
    });
  }, []);

  return (
    <div className="w-full px-12 md:px-20 flex flex-col items-center mt-10 ">
      <h1 className="text-center text-[24px] font-bold md:text-[30px]">
        Guru-Guru Di <span className="text-birutua">SD Negeri</span> 05 Citayam
      </h1>
      <p className="text-abu text-[13px] text-Poppins text-center md:text-[15px] ">
        Guru-guru yang mengajar di SD Negeri 05 Citayam.
      </p>
      <div className="p-4 rounded-md shadow-lg border border-gray-200 mt-10 w-full lg:w-[800px]">
        <img
          src={guruAll}
          alt=""
          className="bg-cover rounded-md w-[350px] md:w-[650px] lg:w-[800px] "
        />
      </div>
      <div className="card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-0 md:gap-4 lg-gap-5">
        {guru.length > 0 ? (
          guru.map((item) => (
            <div
              key={item.id}
              className="max-w-[full] border p-5  rounded-md shadow-md mt-5 bg-birutua text-white text-center "
            >
              <h3 className="text-lg font-semibold">{item.name}</h3>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default Guru;
