import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsTwitter, BsYoutube, BsLinkedin } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <>
      <nav className={`sticky top-0 left-0 h-auto bg-black z-[999] p-4 w-full text-white ${nav ? "nav-open" : ""}`}>
        <div className="flex justify-between w-full items-center pb-4">
          <span
            className="text-white font-light cursor-pointer flex-1"
            onClick={() => setNav(!nav)}
          >
            <AiOutlineMenu size={25} />
          </span>
          <h1 className="text-center text-[#fc444a] font-light sm:text-[23px] text-[19px] xxl:text-[40px] flex-1">
            <span className="text-white">Portal</span> Berita
          </h1>
          <div className="text-white sm:text-md text-sm flex-1 text-end">
            <span className="border border-white cursor-pointer p-1 text-sm">
              Berlangganan
            </span>
          </div>
        </div>
        <hr className="w-[100%] mx-auto" />
        <div className="w-full pt-5 font-thin px-8 flex justify-center gap-7 sm:text-[20px] sm:gap-9 text-sm items-center">
          <Link to="/">
            <p>Beranda</p>
          </Link>
          <Link to="/">
            <p>Teknologi</p>
          </Link>
          <Link to="/">
            <p>Bisnis</p>
          </Link>
          <Link to="/">
            <p>Olahraga</p>
          </Link>
          <Link to="/">
            <p>Politik</p>
          </Link>
          <Link to="/">
            <p>Tentang</p>
          </Link>
          <Link to="/login">
            <p>Login</p>
          </Link>
        </div>
      </nav>
      <div
        className={`fixed sm:w-[30%] w-[60%] h-full bg-white z-[1000] flex flex-col items-center justify-start px-3 py-8 transition-transform duration-300 overflow-y-auto ${
          nav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <p
          className="absolute right-5 top-5 cursor-pointer"
          onClick={() => setNav(!nav)}
        >
          <AiOutlineClose size={30} />
        </p>
        <ul className="flex flex-col gap-5 relative">
          <Link to="/">
            <p className="uppercase sm:text-[35px] text-[28px] font-light cursor-pointer hover:text-[#fc444a] hover:tracking-[0.2em]">
              Beranda
            </p>
          </Link>
          <Link to="/">
            <p className="uppercase sm:text-[35px] text-[28px] font-light cursor-pointer hover:text-[#fc444a] hover:tracking-[0.2em]">
              Teknologi
            </p>
          </Link>
          <Link to="/">
            <p className="uppercase sm:text-[35px] text-[28px] font-light cursor-pointer hover:text-[#fc444a] hover:tracking-[0.2em]">
              Bisnis
            </p>
          </Link>
          <Link to="/">
            <p className="uppercase sm:text-[35px] text-[28px] font-light cursor-pointer hover:text-[#fc444a] hover:tracking-[0.2em]">
              Olahraga
            </p>
          </Link>
          <Link to="/">
            <p className="uppercase sm:text-[35px] text-[28px] font-light cursor-pointer hover:text-[#fc444a] hover:tracking-[0.2em]">
              Politik
            </p>
          </Link>
          <Link to="/">
            <p className="uppercase sm:text-[35px] text-[28px] font-light cursor-pointer hover:text-[#fc444a] hover:tracking-[0.2em]">
              Tentang
            </p>
          </Link>
          <Link to="/login">
            <p className="uppercase sm:text-[35px] text-[28px] font-light cursor-pointer hover:text-[#fc444a] hover:tracking-[0.2em]">
              Login
            </p>
          </Link>
        </ul>
        {/* Dummy content to make scrolling visible */}
        <div className="h-[200vh]"></div>
        <div className="absolute bottom-8 left-5 flex gap-7 justify-center items-center">
          <BsTwitter className="cursor-pointer hover:text-[#fc444a] text-[20px] sm:text-[30px] hover:scale-[120%]" />
          <a
            href="https://web.facebook.com/profile.php?id=100076590711900"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="cursor-pointer hover:text-[#fc444a] text-[20px] sm:text-[30px] hover:scale-[120%]" />
          </a>
          <a
            href="https://www.youtube.com/channel/UC1xVmo3OO2tSocKYhqxHibg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsYoutube className="cursor-pointer hover:text-[#fc444a] text-[20px] sm:text-[30px] hover:scale-[120%]" />
          </a>

          <a
            href="https://www.linkedin.com/in/mahmud-fadlan-6491192b4/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin className="cursor-pointer hover:text-[#fc444a] text-[20px] sm:text-[30px] hover:scale-[120%]" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
