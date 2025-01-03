import React from "react";
import ProjectCard from "./utils/ProjectCard";
import { styles } from "./style";
import SectionWrapper from "./hoc/SectionWrapper";
import { projectDetails } from "./utils/constants";

const Projects = React.memo(() => {
  return (
    <section
      className="max-sm:mt-1 max-md:mx-2 max-sm:px-2 md:px-16 md:pb-20  md:mt-[-25px] text-white bg-black"
      // style={{
      //   background: "radial-gradient(circle, #341b65 0%, black 90%) ",
      // }}
    >
      <div
        className={`sm:${styles.paddingX} max-sm:px-0 flex flex-col align-middle justify-center sm:justify-center sm:h-full m-auto `}
      >
        {/* <h1 className="text-4xl font-semibold font-sans">Projects</h1> */}
        <h2 className={`${styles.sectionHeadText}   sm:px-5 md:pb-10`}>
          {" "}
          <span className="bg-gradient-to-r from-[#7540df] from-20% max-sm:pl-1  to-white bg-clip-text text-transparent">
            Projects{" "}
          </span>
        </h2>
        <div className="w-full h-full mt-5  flex flex-1 gap-5 md:gap-8 flex-wrap justify-evenly sm:px-5 ">
          {projectDetails.map((project) => {
            return <ProjectCard key={project?.title} project={project} />;
          })}

          {/* <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard /> */}
        </div>
      </div>
      <div id="Skills"></div>
    </section>
  );
});

export default SectionWrapper(Projects, "projects");
