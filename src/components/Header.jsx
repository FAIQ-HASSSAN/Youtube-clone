import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import ytLogo from "../images/yt-logo.png";
import ytLogoMobile from "../images/yt-logo-mobile.png";

import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { CgClose } from "react-icons/cg";

import { Context } from "../context/contextApi";
import Loader from "../shared/loader";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  //  is tarah krne se global variables yaha use kr sake ge
  // means ke agar global variable create krne tu createcontext or jaha inko use krna waha use context
  // ju ju global variable chaiye wu yaha access kr le ga
  const { loading, mobilemenu, setMobileMenu } = useContext(Context);

  const navigate = useNavigate();

  //  jb bhi youtube ki search bar me kuch likhe ge tu ye wala method call hu ga
  const searchQueryHandler = (event) => {
    //  optional channing
    // optional channing app ko crash hone se bachata ha or event? pr jb isko undefined , null data mile ga
    // tu wu  a ge execute nahi kre ga
    // mutlub ke agar value nahi milti tu wu simply undefined kr de ga error throw krne ki bjae
    if (
      (event?.key === "Enter" || event === "searchButton") &&
      searchQuery?.length > 0
    ) {
      navigate(`/searchResult/${searchQuery}`);
    }
  };

  const mobileMenuToggle = () => {
    // ! ke sign se true ha tu false or false ha tu true hu jae ga
    setMobileMenu(!mobilemenu);
  };

  // params

  const { pathname } = useLocation();

  //  pagename mutlub page ko target kr raha ke hum konse page pr ha
  const pageName = pathname?.split("/")?.filter(Boolean)?.[0];

  return (
    <>
      <div className="sticky top-0 z-10 flex flex-row items-center justify-between h-14 px-4 md:px-5 bg-black dark:bg-black">
        {/* jb bhi loading true hu tu Loader wala component show hu jae  */}
        {loading && <Loader />}

        <div className="flex h-5 items-center">
          {/* jb pagename video na hu tu ye kam hu ju html likhi wu*/}
          {pageName !== "video" && (
            //  jb  custom color likhna hu tu square  brackets me llikhe ge  , 0.6 opacity ha
            <div
              className="flex md:hidden md:mr-6 cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]"
              onClick={mobileMenuToggle}
            >
              {/* mobilemenu ka ju bhi answer agar wu true tu first bracket me ae ga nahi tu second bracket me ae ga  */}
              {/* or agar true ha tu ye wala icon show krwa du  */}
              {mobilemenu ? (
                <CgClose className="text-white text-xl" />
              ) : (
                <SlMenu className="text-white text-xl" />
              )}
            </div>
          )}

          <Link to="/" className="flex h-5 items-center">
            <img
              className="h-full hidden dark:md:block"
              src={ytLogo}
              alt="Youtube"
            />

            <img
              className="h-full md-hidden"
              src={ytLogoMobile}
              alt="Youtube"
            />
          </Link>
        </div>

        <div className="group flex items-center">
          <div className="flex h-8 md:h-10 md:ml-10 md:pl-5 border border-[#303030] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0">
            <div className="w-10 items-center justify-center hidden group-focus-within:md:flex">
              <IoIosSearch className="text-white text-xl" />
            </div>

            <input
              type="text"
              className="bg-transparent outline-none text-white pr-5 pl-5 md:pl-0 w-44 md:group-focus-within:pl-0 md:w-64  lg:w-[500px]"
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
              value={searchQuery}
            />
          </div>

          <button className="w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 rounded-r-3xl border-[#303030] bg-white/[0.1]">
            <IoIosSearch className="text-white text-xl" />
          </button>
        </div>

        <div className="flex items-center ">
          <div className="hidden md:flex">
            <div className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
              <RiVideoAddLine className="text-white text-xl cursor-pointer" />
            </div>

            <div className="flex items-center justify-center ml-2 h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
              <FiBell className="text-white text-xl cursor-pointer" />
            </div>

            <div className="flex h-8 w-8 overflow-hidden rounded-full md:ml-4">

              <img src="https://xsgames.co/randomusers/avatar.php?g=male" alt="profile pic"/>


            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
