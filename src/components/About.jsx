import React from "react";

const About = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-[#071129] to-[#0b1330] text-white py-24 px-6">
      
      {/* Heading */}
      <div className="text-center mb-20">
        <h2 style={{fontSize:"32px"}} className="md:text-5xl font-bold">
          About{" "}
          <span className="text-purple-500 border-b-2 border-purple-500 ">
            Me
          </span>
        </h2>

        <p className="text-gray-400 text-lg mt-4 max-w-3xl mx-auto">
          Passionate Full Stack Developer dedicated to creating modern,
          responsive, and interactive web applications.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Card */}
        <div className="bg-[#1b2740] rounded-3xl p-10 border border-purple-500/20 shadow-lg">
          
          <h3 className="text-2xl font-semibold mb-6">
            Who am I?
          </h3>

          <p className="text-gray-400 text-lg leading-9 mb-8">
            I’m Vivek Kumar, a Full Stack Developer passionate about building
            modern web applications using React, Tailwind CSS, Node.js, Flask,
            and MongoDB.
          </p>

          <p className="text-gray-400 text-lg leading-9">
            I love designing sleek interfaces, solving real-world problems,
            and continuously learning new technologies to improve my skills.
          </p>
        </div>

        {/* Right Stats */}
        <div className="grid grid-cols-2 gap-8">
          
          
          <div className="bg-[#1b2740] rounded-3xl p-8 border border-purple-500/20 hover:translate-y-[-5px] transition duration-300">
            <h4 className="text-4xl font-bold text-purple-400 mb-3">
              10+
            </h4>

            <p className="text-gray-400 text-lg">
              Projects Completed
            </p>
          </div>

          <div className="bg-[#1b2740] rounded-3xl p-8 border border-pink-500/20 hover:translate-y-[-5px] transition duration-300">
            <h4 className="text-4xl font-bold text-pink-400 mb-3">
              Full
            </h4>

            <p className="text-gray-400 text-lg">
              Stack Developer
            </p>
          </div>

          <div className="bg-[#1b2740] rounded-3xl p-8 border border-indigo-500/20 hover:translate-y-[-5px] transition duration-300">
            <h4 className="text-4xl font-bold text-indigo-400 mb-3">
              2+
            </h4>

            <p className="text-gray-400 text-lg">
              Years Learning
            </p>
          </div>

          <div className="bg-[#1b2740] rounded-3xl p-8 border border-purple-500/20 hover:translate-y-[-5px] transition duration-300">
            <h4 className="text-4xl font-bold text-purple-400 mb-3">
              100%
            </h4>

            <p className="text-gray-400 text-lg">
              Responsive Design
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;