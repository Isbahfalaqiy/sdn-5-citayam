import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import beritaImage from "../assets/images/sdn.jpg";

const Berita = () => {
  const [blogBerita, setBlogBerita] = useState([]);

  useEffect(() => {
    axios.get("/sekolah.json").then((response) => {
      setBlogBerita(response.data.blogBerita);
    });
  }, []);

  return (
    <section className="py-15 bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-manrope text-4xl font-bold text-center mb-16 text-birutua">
          Berita <span className="text-black">SDN 05 Citayam</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogBerita.map((post, index) => (
            <div
              key={index}
              className="group w-full flex flex-col border border-gray-300 rounded-2xl bg-white"
            >
              <div className="flex items-center">
                <img
                  src={post.image || beritaImage}
                  alt={post.title}
                  className="rounded-t-2xl w-full h-56 object-cover"
                />
              </div>
              <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
                <span className="text-indigo-600 font-medium mb-3 block">
                  {post.date}
                </span>
                <h4 className="text-xl text-gray-900 font-medium leading-8 mb-5">
                  {post.title}
                </h4>
                <p className="text-gray-500 leading-6 mb-10">
                  {post.deskripsi}
                </p>
                <Link
                  to={`/berita/${post.id}`}
                  className="cursor-pointer text-sm text-indigo-600 font-light hover:underline underline-offset-1"
                >
                  Baca Selengkapnya...
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Berita;
