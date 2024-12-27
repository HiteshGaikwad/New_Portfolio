import React from "react";
import ProjectCard from "./utils/ProjectCard";
import { styles } from "./style";
import SectionWrapper from "./hoc/SectionWrapper";

const Projects = () => {
  return (
    <section className="max-sm:mt-1 max-md:mx-2 md:px-8 md:mx-2">
      <div
        className={`sm:${styles.paddingX} max-sm:px-0 flex flex-col align-middle justify-center sm:justify-center sm:h-full m-auto `}
      >
        {/* <h1 className="text-4xl font-semibold font-sans">Projects</h1> */}
        <h2
          className={`${styles.sectionHeadText}  bg-gradient-to-r from-[#7540df] from-30%  to-white bg-clip-text text-transparent sm:px-5`}
        >
          Projects
        </h2>
        <div className="w-full h-full mt-5  flex flex-1 gap-5 flex-wrap justify-evenly sm:px-5">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
      <div id="Skills"></div>
    </section>
  );
};

export default SectionWrapper(Projects, "projects");
