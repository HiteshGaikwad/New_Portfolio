import React from "react";
import ProjectCard from "./utils/ProjectCard";

const Projects = () => {
  return (
    <section
      id="project"
      className="w-full sm:h-screen max-sm:h-full relative max-sm:top-20 max-sm:px-2 max-sm:mt-20"
    >
      <div className="sm:w-2/3  flex flex-col align-middle justify-center sm:justify-center sm:h-full m-auto sm:px-3 ">
        <h1 className="text-4xl font-semibold font-sans">Projects</h1>
        <div className="w-full h-full  mt-4 p-auto flex flex-1 gap-5 flex-wrap justify-evenly">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </section>
  );
};

export default Projects;