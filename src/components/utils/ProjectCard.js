import React from "react";
import img from "../../assets/Images/experince_logo.jpg";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "./motion";

const ProjectCard = () => {
  return (
    <Tilt className="shadow-lg rounded-xl w-64 h-[320px] p-2">
      <motion.div variants={fadeIn("right", "spring", 0.5, 0.75)}>
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
        >
          <img src={img} alt="" className="w-72 h-40 rounded-xl" />
          <h2>title</h2>
          <p className="text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's
          </p>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default ProjectCard;
