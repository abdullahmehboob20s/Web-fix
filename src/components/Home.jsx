import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <div name="home" className="w-5/6 ml-10 h-screen">
      {/* Container */}
      <div className="max-w-5xl mx-auto px-8 flex flex-col justify-center h-full">
        <p className=" text-gray-light">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-orange">
          Leila Agger
        </h1>
        <h2 className="text-4xl sm:text-6xl font-bold  text-gray-light">
          I'm a Full Stack Developer.
        </h2>
        <p className=" text-gray-light py-4 max-w-2xl">
          I love using my creativity to bring front and back-end elements
          together to build websites and applications that work seamlessly.
        </p>

        <div>
          <ul className="visible lg:invisible flex">
            <li className="mr-4">
              <a
                className="text-blue-bright  hover:text-orange"
                target="-blank"
                href="https://github.com/LeBaobab3"
              >
                <FaGithub size={30} />
              </a>
            </li>

            <li className="mr-4">
              <a
                className="text-blue-bright hover:text-orange"
                target="-blank"
                href="https://twitter.com/BaobabCoding"
              >
                <FaTwitter size={30} />
              </a>
            </li>

            <li className="mr-4">
              <a
                className="text-blue-bright  hover:text-orange"
                target="-blank"
                href="https://www.linkedin.com/in/leila-a-dev/"
              >
                <FaLinkedin size={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
