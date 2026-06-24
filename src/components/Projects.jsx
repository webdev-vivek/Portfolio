import React from "react";
import AI from "../assets/AI2.png";
import lib from "../assets/lib.png";

const projectsData = [
  {
    title: "AI-Based Smart Project Task Distribution System",
    desc: "AI-Based Smart Project Task Distribution System is a web application that intelligently distributes tasks among team members to improve productivity and project management.",
    image: AI,
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript", "Python Flask", "MongoDB"],
  },
  {
    title: "Library Management System",
    desc: "A desktop-based Library Management System developed using Java Swing and MySQL. The system provides user authentication, book management, book issuing and borrowing functionalities, with separate dashboards for admin and users.",
    image: lib,
    tech: ["Java", "Java Swing", "MySQL", "JDBC", "Eclipse IDE"],
  },
  // {
  //   title: "Color Palette Generator",
  //   desc: "A MERN stack application that generates color palettes with real-time previews and responsive UI design.",
  //   image: "https://images.unsplash.com/photo-1557683316-973673baf926",
  //   tech: ["MongoDB", "Express", "React", "Node.js"],
  // },
];

const ProjectCard = ({ project }) => (
  <div className="col-md-4 mb-4">
    <div
      style={{
        background: "#1e293b",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
        height: "100%",
        transition: "0.3s",
      }}
    >
      <img
        src={project.image}
        alt="project"
        style={{
          width: "100%",
          height: "180px",
          objectFit: "cover",
        }}
      />

      <div style={{ padding: "15px" }}>
        <h6 style={{ color: "#fff", marginBottom: "10px" }}>{project.title}</h6>

        <p style={{ color: "#94a3b8", fontSize: "14px" }}>{project.desc}</p>

        <div style={{ marginTop: "10px" }}>
          {project.tech.map((t, i) => (
            <span
              key={i}
              style={{
                display: "inline-block",
                background: "#0f172a",
                color: "#a855f7",
                padding: "4px 8px",
                borderRadius: "6px",
                fontSize: "12px",
                marginRight: "6px",
                marginBottom: "6px",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Projects = () => {
  return (
    <div
      style={{
        background: "#0f172a",
        minHeight: "100vh",
        padding: "60px 20px",
      }}
    >
      <div className="container mt-5">
        {/* Title */}
        <h2
          style={{ fontSize: "32px", color: "white" }}
          className=" text-center mb-5 md:text-5xl font-bold"
        >
          Featured{" "}
          <span
            style={{
              color: "#a855f7",
              borderBottom: "2px solid #a855f7",
            }}
          >
            Projects
          </span>
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#94a3b8",
            marginBottom: "40px",
          }}
        >
          Some of the recent projects I've worked on. Hover over the cards to
          see the links.
        </p>

        {/* Cards */}
        <div className="row">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
