import React from "react";
import { MdKeyboardVoice } from "react-icons/md";
import { BiVideoPlus } from "react-icons/bi";
import { CgMenuGridO } from "react-icons/cg";
import { IoNotificationsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="md:ml-[76px] md:px-0 px-3 w-full fixed bg-white flex items-center justify-between  border-b-2 border-gray-200">
      <Link to="/">
        <img className="w-[100px]" src="img/yt.png" />
      </Link>
      <div>
        <form className="flex items-center">
          <input
            className="bg-gra md:block lg:w-[550px] md:w-[250px] hidden px-4 py-[7px]  border border-gray-400 "
            type="text"
            placeholder="Telurusuri"
          />
          <Link to="/Explorasi">
            <div
              className="bg-gray-100 px-4 py-[9px] border border-gray-200 hover:bg-slate-200 duration-200 cursor-pointer"
              title="telurusuri"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </Link>
          <Link to="/Suka">
            <div
              className="bg-gray-100 cursor-pointer ml-2 text-center rounded-full text-xl py-[10px] px-[10px]"
              title="telurusuri"
            >
              <MdKeyboardVoice />
            </div>
          </Link>
        </form>
      </div>
      {/* menu kanan */}
      <div className="px-4 flex items-center md:space-x-9 space-x-2 cursor-pointer">
        <Link to="/Create">
          <div className="text-2xl text-gray-700">
            <BiVideoPlus />
          </div>
        </Link>
        <div className="text-2xl text-gray-700">
          <CgMenuGridO />
        </div>
        <div className="text-2xl text-gray-700">
          <IoNotificationsOutline />
        </div>
        <Link to="/Suka">
          <div className="text-2xl text-gray-700">
            <div className="bg-gray-400 w-[35px] h-[35px] rounded-full"></div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
