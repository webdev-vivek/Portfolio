import { Briefcase, Code, GraduationCap, Rocket } from "lucide-react";

const experiences = [
  {
    year: "2025",
    title: "Full Stack Web Developer",
    desc: "Developed full-stack web applications using React.js, Tailwind CSS, Flask, and REST APIs. Focused on responsive UI design, backend integration, and database management.",
  },
  {
    year: "2025",
    title: "MERN Stack Development",
    desc: "Built modern web applications using MongoDB, Express.js, React.js, and Node.js. Experienced in frontend development, API creation, authentication, and state management.",
  },
  {
    year: "2025",
    title: "Library Management System",
    desc: "Designed and developed a desktop-based Library Management System using Java Swing and MySQL with user authentication, book management, issue/return operations, and admin dashboard.",
  },
  {
    year: "Present",
    title: "DSA & AI/ML Exploration",
    desc: "Actively learning Data Structures & Algorithms to improve problem-solving and exploring AI/ML technologies through hands-on projects and practical applications.",
  },
];

const Experience = () => {
  return (
    <div
      id="experience"
      className="min-h-screen bg-[#020617] py-20 px-6 md:px-20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2
          style={{ fontSize: "32px" }}
          className=" font-bold text-center text-white mb-4"
        >
          Experience &
          <span style={{color:"#a855f7", borderBottom: "2px solid #a855f7" }}>
            {" "}
            Development Journey
          </span>
        </h2>

        <p className="text-center text-gray-400 mb-16">
          My learning journey and project experience.
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-purple-500 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((item, index) => (
              <div
                key={index}
                className={`flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col`}
              >
                {/* Card */}
                <div className="w-full md:w-5/12">
                  <div className="bg-white/5 backdrop-blur-lg border border-purple-500/30 rounded-2xl p-6 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition duration-300">
                    <div className="text-purple-400 mb-4">{item.icon}</div>

                    <span className="text-purple-400 text-sm">{item.year}</span>

                    <h3 className="text-white text-xl font-semibold mt-2 mb-3">
                      {item.title}
                    </h3>

                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </div>

                {/* Dot */}
                <div className="hidden md:flex w-2/12 justify-center">
                  <div className="w-5 h-5 rounded-full bg-purple-500 shadow-[0_0_20px_#a855f7]"></div>
                </div>

                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
