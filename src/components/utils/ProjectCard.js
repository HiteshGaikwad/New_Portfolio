import React from "react";
import img from "../../assets/Images/experince_logo.jpg";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "./motion";

const ProjectCard = ({ project }) => {
  return (
    <Tilt className="shadow-md shadow-gray-200 rounded-xl md:w-72 max-md:w-[45%] max-sm:h-[250px] max-md:h-[280px] sm:h-[320px] p-2">
      <motion.div variants={fadeIn("right", "spring", 0.5, 0.75)}>
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
        >
          <img
            src={project?.img}
            alt=""
            className="sm:w-72 max-sm:w-full max-sm:h-24 sm:h-40 rounded-xl"
          />
          <h2 className="my-2 px-1">{project?.title}</h2>
          <p className="sm:text-sm max-sm:text-xs">{project?.description}</p>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default ProjectCard;
