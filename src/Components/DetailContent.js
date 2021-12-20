import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import FetchAxios from "./FetchAxios";

function DetailContent() {
  const { id } = useParams();
  const { data, loading, error } = FetchAxios(
    `http://localhost:8000/youtube/${id}`
  );
  const [count, setCount] = useState(0);

  // suka /like
  const handleSuka = async () => {
    try {
      let response = await axios.post(`http://localhost:8000/sukai`, data);
      console.log(response);
      setCount(count + 1);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      {loading && (
        <div className="text-center md:mt-5 mt-10 text-red-700">Loading...</div>
      )}
      {error}
      {data && (
        <div className="px-4 py-2 flex flex-col" key={data.id}>
          <div className="w-full md:h-[500px] overflow-hidden ">
            <img
              className=" w-full "
              src={`http://localhost:3000/${data.thumbnil}`}
            />
          </div>
          <div className="md:mt-4 ">
            <p className="font-medium text-[19px] tracking-wide text-gray-800">
              {data.text}
            </p>
            <p className="mt-[3px] text-gray-400 text-[11px] font-medium tracking-wide">
              {data.name}
            </p>
          </div>
        </div>
      )}
      <button
        onClick={() => handleSuka()}
        className="px-12 py-3 mx-auto block  bg-blue-600 rounded   mt-2 text-white shadow-lg shadow-black/20"
      >
        Like: {count}
      </button>
    </div>
  );
}

export default DetailContent;
