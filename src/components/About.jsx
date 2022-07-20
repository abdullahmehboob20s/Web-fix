import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full text-gray-light">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-5xl w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-6">
            <p className="text-4xl font-bold inline border-b-4 border-orange">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-5xl w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-3xl font-bold text-blue-muddy">
            <p>Hi. I'm Leila, great to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              I'm a parent, artist and former educator living in the Midwest!
              While I know the value of my diverse skills and ideas, I also
              enjoy pushing myself through continually learning. I'm thrilled to
              connect with more folxs to create innovative projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
