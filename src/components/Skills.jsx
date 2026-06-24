import React from "react";

const skillsData = {
  frontend: [
    { name: "React JS", value: 80 },
    { name: "Tailwind CSS", value: 65 },
    { name: "Bootstrap", value: 60 },
    { name: "JavaScript (ES6+)", value: 85 },
    { name: "HTML5/CSS3", value: 90 },
  ],
  backend: [
    { name: "Node.js", value: 70 },
    { name: "Express.js", value: 65 },
    { name: "MongoDB", value: 75 },
  ],
  tools: [
    { name: "Git / GitHub", value: 85 },
    { name: "XAMPP", value: 70 },
    { name: "Postman", value: 80 },
    { name: "Vercel", value: 75 },
  ],
};

const SkillBar = ({ name, value }) => (
  <div style={{ marginBottom: "15px" }}>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        color: "#e2e8f0",
        fontSize: "14px",
      }}
    >
      <span>{name}</span>
      <span>{value}%</span>
    </div>

    <div
      style={{
        height: "8px",
        backgroundColor: "#334155",
        borderRadius: "10px",
        marginTop: "5px",
      }}
    >
      <div
        style={{
          width: `${value}%`,
          height: "100%",
          borderRadius: "10px",
          background: "linear-gradient(90deg, #6366f1, #a855f7)",
        }}
      ></div>
    </div>
  </div>
);

const Card = ({ title, data }) => (
  <div
    style={{
      background: "#1e293b",
      borderRadius: "12px",
      padding: "20px",
      boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
      height: "100%",
    }}
  >
    <h5 style={{ color: "#fff", marginBottom: "15px" }}>{title}</h5>
    {data.map((skill, index) => (
      <SkillBar key={index} {...skill} />
    ))}
  </div>
);

const Skills = () => {
  return (
    <div
      style={{
        background: "#0f172a",
        minHeight: "100vh",
        padding: "60px 20px",
      }}
    >
      <div className="container mt-5">
        <h2 style={{fontSize:"32px",color:"white"}} className=" text-center mb-5 md:text-5xl font-bold">
          My{" "}
          <span
            style={{
              color: "#a855f7",
              borderBottom: "2px solid #a855f7",
            }}
          >
            Skills
          </span>
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#94a3b8",
            marginBottom: "40px",
          }}
        >
          Technologies, frameworks, and tools I use to bring ideas to life.
        </p>

        <div className="row">
          <div className="col-md-4 mb-4">
            <Card title="Frontend" data={skillsData.frontend} />
          </div>

          <div className="col-md-4 mb-4">
            <Card title="Backend & DB" data={skillsData.backend} />
          </div>

          <div className="col-md-4 mb-4">
            <Card title="Tools & Others" data={skillsData.tools} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;