import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import beritaImage from "../assets/images/sdn.jpg";

const BeritaDetail = () => {
  const { id } = useParams();
  const [blogBerita, setBlogBerita] = useState(null);

  useEffect(() => {
    axios.get("/sekolah.json").then((response) => {
      const data = response.data.blogBerita;
      const selected = data.find((item) => String(item.id) === id);
      setBlogBerita(selected);
    });
  }, [id]);

  if (!blogBerita)
    return <div className="text-center mt-10">Berita tidak ditemukan.</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        {blogBerita.title}
      </h1>
      <p className="text-sm text-gray-500 mb-6">{blogBerita.date}</p>
      <img
        src={blogBerita.image ? `/${blogBerita.image}` : beritaImage}
        alt={blogBerita.title}
        className="w-full rounded-lg mb-6 object-cover"
      />
      <p className="text-gray-700 leading-relaxed text-justify">{blogBerita.deskripsiDetail}</p>
    </div>
  );
};

export default BeritaDetail;
