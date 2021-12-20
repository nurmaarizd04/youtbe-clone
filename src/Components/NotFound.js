import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="text-center mt-32 ">
      <p className="font-medium text-5xl mb-5  px-6 animate-pulse duration-200 text-indigo-800">
        Halaman Tidak ada
      </p>
      <Link to="/">
        <p className="text-red-500 select-all underline decoration-black italic first:text-xl">
          Back to home...
        </p>
      </Link>
    </div>
  );
}

export default NotFound;
