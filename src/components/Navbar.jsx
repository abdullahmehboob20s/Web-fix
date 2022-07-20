import React, { useEffect, useState } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";
import OutsideClickDetector from "../hooks/OutsideClickDetector";
import useMediaQuery from "../hooks/useMediaQuery";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Navbar = () => {
  const isAbove768px = useMediaQuery("(min-width : 48em)");
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const sidebarRef = OutsideClickDetector(() => {
    setNav(false);
  });

  useEffect(() => {
    if (nav === true && isAbove768px === true) {
      setNav(false);
    }
  }, [isAbove768px, nav]);

  return (
    <div className="fixed w-full flex justify-between items-center px-4  bg-teal-dark text-blue-bright">
      <div className={`black-screen ${nav ? "show" : ""}`}></div>
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
        ref={sidebarRef}
        className={`fixed h-full top-0 right-0 w-[18rem] shadow-[0_10px_10px_rgba(0,0,0,0.1)] bg-teal-dark flex md:hidden flex-col justify-center items-center z-[120] transition-all duration-[.4s] ${
          nav ? "translate-x-[0px]" : "translate-x-[18rem]"
        } `}
      >
        <div
          onClick={handleClick}
          className="absolute top-[2rem] right-[2rem] cursor-pointer"
        >
          <FaTimes size={22} />
        </div>
        <Link
          onClick={handleClick}
          className="w-full text-center py-4 block text-2xl cursor-pointer"
          to="home"
          smooth={true}
          duration={500}
        >
          Home
        </Link>{" "}
        <Link
          onClick={handleClick}
          className="w-full text-center py-4 block text-2xl cursor-pointer"
          to="about"
          offset={-200}
          smooth={true}
          duration={500}
        >
          About
        </Link>{" "}
        <Link
          onClick={handleClick}
          className="w-full text-center py-4 block text-2xl cursor-pointer"
          to="work"
          offset={-160}
          smooth={true}
          duration={500}
        >
          Featured Work
        </Link>{" "}
        <Link
          onClick={handleClick}
          className="w-full text-center py-4 block text-2xl cursor-pointer"
          to="contact"
          smooth={true}
          duration={500}
        >
          Contact
        </Link>
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
