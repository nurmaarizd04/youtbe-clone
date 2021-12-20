import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import FetchAxios from "./FetchAxios";

// API TOUTUBE
// API KEY => AIzaSyCpqioPcKy8faQ9BKAOrgn-mcEBEHSS-68
// API HTTPS => https://www.googleapis.com/youtube/v3/videos?

function Home() {
  const { data, loading, error } = FetchAxios(`http://localhost:8000/youtube`);

  return (
    <div>
      <div className="flex z-10 fixed w-full items-center space-x-2 py-3 px-2 bg-white scroll-smooth overflow-auto md:overflow-hidden cursor-pointer">
        <div className="rounded-full bg-gray-900 text-center md:text-left border border-gray-200 md:px-[10px] px-10 py-[5px]">
          <p className="text-gray-100 text-[14px]">Home</p>
        </div>
        <div className="bg-gray-100  md:px-[10px] px-8 text-center md:text-left py-[5px] rounded-full border border-gray-200">
          <p className=" text-gray-700 text-[14px]">Live</p>
        </div>
        <div className="rounded-full bg-gray-100 border border-gray-200 md:px-[10px] px-10 py-[5px]">
          <p className="text-gray-700 text-[14px]">Video Mix</p>
        </div>
        <div className="bg-gray-100  md:px-[10px] px-8 text-center md:text-left py-[5px] rounded-full border border-gray-200">
          <p className=" text-gray-700 text-[14px]">Acara Memasak</p>
        </div>
        <div className="rounded-full bg-gray-100 border border-gray-200 md:px-[10px] px-10 py-[5px]">
          <p className="text-gray-700 text-[14px]">Musik</p>
        </div>
        <div className="bg-gray-100  md:px-[10px] px-8 text-center md:text-left py-[5px] rounded-full border border-gray-200">
          <p className=" text-gray-700 text-[14px]">Musik Rap</p>
        </div>
        <div className="rounded-full bg-gray-100 border border-gray-200 md:px-[10px] px-10 py-[5px]">
          <p className="text-gray-700 text-[14px]">Game</p>
        </div>
        <div className="bg-gray-100  md:px-[10px] px-8 text-center md:text-left py-[5px] rounded-full border border-gray-200">
          <p className=" text-gray-700 text-[14px]">Sepak Bola</p>
        </div>
        <div className="rounded-full bg-gray-100 border border-gray-200 md:px-[10px] px-10 py-[5px]">
          <p className="text-gray-700 text-[14px]">Kartun</p>
        </div>
        <div className="bg-gray-100  md:px-[10px] px-8 text-center md:text-left py-[5px] rounded-full border border-gray-200">
          <p className=" text-gray-700 text-[14px]">Movie</p>
        </div>
        <div className="rounded-full bg-gray-100 border border-gray-200 md:px-[10px] px-10 py-[5px]">
          <p className="text-gray-700 text-[14px]">Tips Kecantika</p>
        </div>
        <div className="bg-gray-100  md:px-[10px] px-8 text-center md:text-left py-[5px] rounded-full border border-gray-200">
          <p className=" text-gray-700 text-[14px]">Memasak</p>
        </div>
        <div className="bg-gray-100  md:px-[10px] px-8 text-center md:text-left py-[5px] rounded-full border border-gray-200">
          <p className=" text-gray-700 text-[14px]">Films</p>
        </div>
        <div className="bg-gray-100  md:px-[10px] px-8 text-center md:text-left py-[5px] rounded-full border border-gray-200">
          <p className=" text-gray-700 text-[14px]">Berita</p>
        </div>
        <div className="bg-gray-100  md:px-[10px] px-8 text-center md:text-left py-[5px] rounded-full border border-gray-200">
          <p className=" text-gray-700 text-[14px]">Covid 19</p>
        </div>
      </div>

      <div className=" py-20 md:px-6 px-5">
        {loading && (
          <div className="text-center md:mt-5 mt-10 text-red-700">
            Loadin...
          </div>
        )}
        {error}
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {data.map((d) => (
            <Link to={`/Detail/${d.id}`} key={d.id}>
              <div className=" cursor-pointer">
                <img className="w-full h-full bg-cover" src={d.thumbnil} />
                <div className="mt-3 flex items-stretch ">
                  <img
                    className="bg-cover w-[35px] h-[35px] bg-no-repeat rounded-full"
                    src={`http://localhost:3000/${d.avatar}`}
                  />
                  <div className="ml-3">
                    <p className="font-medium text-[14px]">{d.text}</p>
                    <p className="mt-[3px] text-gray-400 text-[11px] font-medium tracking-wide">
                      {d.name}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
