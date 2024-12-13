import React from "react";
import experince_logo from "../assets/Images/experince_logo.jpg";
import { MdOutlineCorporateFare } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";
import { FaMapPin } from "react-icons/fa";
import { motion } from "framer-motion";
import { slideIn } from "./utils/motion";

const Experience = () => {
  return (
    <section
      id="Experience"
      className="w-full sm:h-screen relative max-sm:top-20 max-sm:px-2 "
    >
      <div className="sm:w-2/3  flex flex-col align-middle justify-center sm:justify-center sm:h-full m-auto sm:px-3 ">
        <h1 className="text-4xl font-semibold font-sans">Experience</h1>
        <div className="w-full flex h-5/6 sm:align-bottom max-sm:flex-col">
          <motion.div
            variants={slideIn("left", "tween", 0.2, 2)}
            className=" max-sm:w-full max-sm:px-3  py-3 px-2"
          >
            <h2 className="flex gap-2 align-middleign">
              <MdOutlineCorporateFare className="text-xl" /> Company Name
            </h2>
            <h3 className="flex gap-2">
              <RiComputerLine className="text-xl" /> Designation
            </h3>
            <h4 className="flex gap-2">
              <FaMapPin className="text-xl" /> Duration
            </h4>
            <ul className="list-disc pl-2 pt-2">
              <li>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's.
              </li>
              <li>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </li>
              <li>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </li>
            </ul>
          </motion.div>

          <motion.div
            variants={slideIn("right", "tween", 0.2, 1)}
            className="sm:w-1/2 max-sm:w-3/4 flex flex-col max-sm:m-auto justify-center items-center text-center"
          >
            <img
              className="sm:w-[90%] w-32 max-sm:w-full max-sm:h-72  sm:h-[80%] rounded-lg"
              src={experince_logo}
              alt="experince logo"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
