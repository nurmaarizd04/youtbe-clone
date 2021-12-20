import axios from "axios";
import React, { useState, useEffect } from "react";

function Exporasi() {
  return (
    <div className="md:px-8 mt-3">
      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-2 ml-8">
        <div className="bg-white hover:bg-gray-300 duration-100 cursor-pointer shadow rounded py-5  px-4">
          <div className="py-5">
            <img className="w-[34px] h-[34px]" src="img/1.png" />
          </div>
          <p className="mt-2 font-medium text-lg">Tranding</p>
        </div>
        <div className="bg-white hover:bg-gray-300 duration-100 cursor-pointer shadow rounded py-5  px-4">
          <div className="py-5">
            <img className="w[34px] h-[34px]" src="img/2.png" />
          </div>
          <p className="mt-2 font-medium text-lg">Musik</p>
        </div>
        <div className="bg-white hover:bg-gray-300 duration-100 cursor-pointer shadow rounded py-5  px-4">
          <div className="py-5">
            <img className="w[34px] h-[34px]" src="img/3.png" />
          </div>
          <p className="mt-2 font-medium text-lg">Film</p>
        </div>
        <div className="bg-white hover:bg-gray-300 duration-100 cursor-pointer shadow rounded py-5  px-4">
          <div className="py-5">
            <img className="w[34px] h-[34px]" src="img/4.png" />
          </div>
          <p className="mt-2 font-medium text-lg">Game</p>
        </div>
        <div className="bg-white hover:bg-gray-300 duration-100 cursor-pointer shadow rounded py-5  px-4">
          <div className="py-5">
            <img className="w[34px] h-[34px]" src="img/5.png" />
          </div>
          <p className="mt-2 font-medium text-lg">Berita</p>
        </div>
        <div className="bg-white hover:bg-gray-300 duration-100 cursor-pointer shadow rounded py-5  px-4">
          <div className="py-5">
            <img className="w[34px] h-[34px]" src="img/6.png" />
          </div>
          <p className="mt-2 font-medium text-lg">Olahraga</p>
        </div>
      </div>
    </div>
  );
}

export default Exporasi;
