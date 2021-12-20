import React from "react";
import FetchAxios from "./FetchAxios";
import { Link } from "react-router-dom";
import axios from "axios";

function Suka() {
  const { data, loading, error } = FetchAxios(`http://localhost:8000/sukai`);

  return (
    <div className="px-6 py-5">
      <p></p>
      {loading && (
        <div className="text-center md:mt-5 mt-10 text-red-700">Loadin...</div>
      )}
      {error}
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {data.map((d) => (
          <Link to={`/DetailSukai/${d.id}`} key={d.id}>
            <div className=" cursor-pointer">
              <img className="w-full h-full bg-cover" src={d.thumbnil} />
              <div className="mt-3 flex items-stretch ">
                <img
                  className="bg-cover w-[35px] h-[35px] bg-no-repeat rounded-full"
                  src={d.avatar}
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
  );
}

export default Suka;
