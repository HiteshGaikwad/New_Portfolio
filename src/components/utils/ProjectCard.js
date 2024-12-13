import React from "react";
import img from "../../assets/Images/experince_logo.jpg";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "./motion";

const ProjectCard = () => {
  return (
    <Tilt className="shadow-lg rounded-xl sm:w-64 max-sm:w-[45%] max-sm:h-[220px] sm:h-[320px] p-2">
      <motion.div variants={fadeIn("right", "spring", 0.5, 0.75)}>
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
        >
          <img
            src={img}
            alt=""
            className="sm:w-72 max-sm:w-full max-sm:h-24 sm:h-40 rounded-xl"
          />
          <h2>title</h2>
          <p className="sm:text-sm max-sm:text-xs">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's
          </p>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default ProjectCard;
