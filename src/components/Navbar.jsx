import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
// import { HiOutlineMail } from "react-icons/hi";
// import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div
      className="fixed w-full flex justify-between items-center px-4  bg-teal-dark text-blue-bright
    "
    >
      <div>
        <img src={Logo} alt="Logo" style={{ width: "80px" }} />
      </div>

      {/* menu */}

      <ul className="hidden md:flex ">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          {" "}
          <Link to="about" offset={-200} smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          {" "}
          <Link to="work" offset={-160} smooth={true} duration={500}>
            Featured Work
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-[100%] shadow-[0_10px_10px_rgba(0,0,0,0.1)] border-t border-teal-medium border-b left-0 w-full bg-teal-dark flex flex-col justify-center items-center z-20"
        }
      >
        <li className="py-4 sm:py-6 text-2xl sm:text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-4 sm:py-6 text-2xl sm:text-4xl">
          {" "}
          <Link
            onClick={handleClick}
            to="about"
            offset={-200}
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="py-4 sm:py-6 text-2xl sm:text-4xl">
          {" "}
          <Link
            onClick={handleClick}
            to="work"
            offset={-160}
            smooth={true}
            duration={500}
          >
            Featured Work
          </Link>
        </li>
        <li className="py-4 sm:py-6 text-2xl sm:text-4xl">
          {" "}
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social Icons*/}
      <div className="hidden lg:flex fixed flex-col top-1/3 left-0 ">
        <ul>
          <li className="w-40 h-12 flex justify-between items-center -ml-24 hover:-ml-2 duration-300 text-blue-bright ">
            <a
              className="flex justify-between items-center w-full"
              target="-blank"
              href="https://github.com/LeBaobab3"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-40 h-12 flex justify-between items-center -ml-24 hover:-ml-2 duration-300 text-blue-bright ">
            <a
              className="flex justify-between items-center w-full"
              target="-blank"
              href="https://twitter.com/BaobabCoding"
            >
              Twitter <FaTwitter size={30} />
            </a>
          </li>
          <li className="w-40 h-12 flex justify-between items-center -ml-24 hover:-ml-2 duration-300  text-blue-bright  ">
            <a
              className="flex justify-between items-center w-full"
              target="-blank"
              href="https://www.linkedin.com/in/leila-a-dev/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          {/* <li className="w-40 h-12 flex justify-between items-center -ml-24 hover:-ml-2 duration-300 text-blue-bright">
            <a
              className="flex justify-between items-center w-full"
              target="_blank"
              href="mailto: leilacoding@gmail.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
