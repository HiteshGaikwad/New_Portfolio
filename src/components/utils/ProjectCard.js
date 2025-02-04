import React from "react";
import img from "../../assets/Images/experince_logo.jpg";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "./motion";

const ProjectCard = ({ project }) => {
  const handleClick = (linkURL) => {
    if (linkURL) {
      const link = document.createElement("a");

      link.href = linkURL;
      link.target = "_blank";

      link.setAttribute("download", "");

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };
  return (
    <Tilt className="grayscale hover:grayscale-0 shadow-md shadow-[#a882f4] rounded-xl bg-gradient-to-b from-[#6135ba] from-10% md:w-72 max-md:w-[47%] max-sm:h-[280px] max-md:h-[280px] sm:h-[320px] px-2 pb-2 pt-1">
      <motion.div variants={fadeIn("right", "spring", 0.2, 0.75)}>
        {/* <a
          href={project?.LiveLink}
          target="_blank"
          className={`hover:no-underline hover:text-white `}
          rel="noreferrer"
        > */}
        <div
          title={
            project?.LiveLink === ""
              ? "Cannot view the live project"
              : "Click to view the live project"
          }
          onClick={() => handleClick(project?.LiveLink)}
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
        >
          <img
            src={project?.img}
            alt=""
            className="sm:w-72 max-sm:w-full max-sm:h-24 sm:h-40 rounded-xl "
          />
          <div className="flex gap-2 items-center">
            <img
              src={project?.logo}
              alt={project?.title + "logo"}
              className="w-8 h-8 rounded-full"
            />
            <h2 className="my-2 px-1 lg:text-[21px] font-semibold bg-gradient-to-b from-[#7540df] from-20% max-sm:pl-1  to-white bg-clip-text text-transparent">
              {project?.title}
            </h2>
          </div>
          <p className="sm:text-sm text-sm max-sm:text-xs ">
            {project?.description}
          </p>
          <p className="text-[10px] mt-2">{project?.techStack?.join(", ")}</p>
        </div>
        {/* </a> */}
      </motion.div>
    </Tilt>
  );
};

export default ProjectCard;
