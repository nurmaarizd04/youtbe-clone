import React from "react";
import { AiOutlineCompass, AiFillHome } from "react-icons/ai";
import { BsCollectionPlay } from "react-icons/bs";
import { MdOutlineCollectionsBookmark } from "react-icons/md";
import { Link, Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Axios from "./FetchAxios";
import Exporasi from "./Exporasi";
import Home from "./Home";
import Navbar from "./Navbar";
import NotFound from "./NotFound";
import DetailContent from "./DetailContent";
import Suka from "./Suka";
import DetailSukai from "./DetailSukai";
import Create from "./Create";

function Dashboard() {
  return (
    <div className="flex">
      <div className="md:block hidden z-10 fixed bg-white min-h-screen">
        {/* Menu Humberger */}
        <div className="flex flex-col items-center px-2 py-5 cursor-pointer">
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
        </div>
        {/* Menu Home */}
        <Link to="/">
          <div className="flex flex-col items-center px-2 py-5 hover:bg-gray-100 duration-200 ease-in-out cursor-pointer ">
            <div className="text-[22px]">
              <AiFillHome />
            </div>
            <p className="text-[11px]  mt-2 text-gray-700">Beranda</p>
          </div>
        </Link>
        {/* Menu Compas */}
        <Link to="/Explorasi">
          <div className="flex flex-col items-center px-2 py-5 hover:bg-gray-100 duration-200 ease-in-out cursor-pointer ">
            <div className="text-[22px]">
              <AiOutlineCompass />
            </div>
            <p className="text-[11px]  mt-2 text-gray-600">Explorasi</p>
          </div>
        </Link>
        {/* Menu Subription */}
        <div className="flex flex-col items-center px-2 py-5 hover:bg-gray-100 duration-200 ease-in-out cursor-pointer ">
          <div className="text-[22px]">
            <BsCollectionPlay />
          </div>
          <p className="text-[11px]  mt-2 text-gray-600">Subscription</p>
        </div>
        {/* Menu Koleksi */}
        <div className="flex flex-col items-center px-2 py-5 hover:bg-gray-100 duration-200 ease-in-out cursor-pointer ">
          <div className="text-[22px]">
            <MdOutlineCollectionsBookmark />
          </div>
          <p className="text-[11px]  mt-2 text-gray-600">Koleksi</p>
        </div>
      </div>
      <Navbar />

      {/* content menu */}
      <div className="mt-[60px] md:ml-[76px] w-full ">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Explorasi" component={Exporasi} />
          <Route path="/Detail/:id" component={DetailContent} />
          <Route path="/Suka" component={Suka} />
          <Route path="/DetailSukai/:id" component={DetailSukai} />
          <Route path="/Create" component={Create} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </div>
  );
}

export default Dashboard;
