import React from "react";
import experince_logo from "../assets/Images/experince_logo.jpg";
import { MdOutlineCorporateFare } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";
import { FaMapPin } from "react-icons/fa";
import { motion } from "framer-motion";
import { slideIn } from "./utils/motion";
import { styles } from "./style";
import we3_logo from "../assets/Images/we3_icon.png";
import we3_icon from "../assets/Images/we3_logo.png";
import { Canvas, useLoader } from "@react-three/fiber";
import { TextureLoader, LinearFilter, LinearMipMapLinearFilter } from "three";
import { OrbitControls } from "@react-three/drei";
import SectionWrapper from "./hoc/SectionWrapper";

function Image3D() {
  const texture = useLoader(TextureLoader, experince_logo); // Adjust path

  texture.minFilter = LinearMipMapLinearFilter;
  texture.magFilter = LinearFilter;
  texture.anisotropy = 16;

  return (
    <mesh rotation={[0.2, 0.4, 0]} position={[0, 0, 0]}>
      <boxGeometry args={[5, 5, 5]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

const Experience = () => {
  return (
    <section
      // id="Experience"
      className=" sm:h-screen max-sm:top-20 max-sm:px-2 sm:px-8 max-sm:mt-20"
    >
      <div className=" flex flex-col align-middle justify-center sm:justify-center sm:h-full m-auto sm:px-3 ">
        {/* <h1 className="text-4xl font-semibold font-sans">Experience</h1> */}
        <h2 className={`${styles.sectionHeadText} text-center`}>Experience</h2>
        <div className="w-full flex h-5/6 sm:align-bottom sm:mt-5 max-sm:mt-5 max-sm:flex-col gap-5">
          <motion.div
            variants={slideIn("left", "tween", 0.2, 1)}
            className="sm:w-1/2 max-sm:w-full max-sm:px-3  py-3 px-2"
          >
            <h2 className="flex text-center gap-2 font-semibold text-xl ">
              {/* <MdOutlineCorporateFare className="text-xl " />  */}
              <img
                src={we3_logo}
                alt="We3 tech logo"
                className="sm:w-10 w-8 h-8 sm:h-10 rounded-full shadow-lg p-1"
              />
              <span className="h-full mt-auto">We3 Tech Works</span>
            </h2>
            <h3 className="flex gap-2 mt-2">
              <RiComputerLine className="text-2xl mx-2" />{" "}
              <span className="font-semibold">Software Developer </span>
            </h3>
            <h4 className="flex gap-2 mt-2">
              <FaMapPin className="text-2xl mx-2" /> March 2024 - Present
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
            className="sm:w-[40%] max-sm:w-full max-sm:px-3  py-3 px-2"
          >
            <img
              className="sm:w-full w-32 max-sm:w-full max-sm:h-72  sm:h-[70%] rounded-lg"
              src={experince_logo}
              alt="experince logo"
            />
          </motion.div>
        </div>
      </div>
      <div id="Projects"></div>
    </section>
  );
};

export default SectionWrapper(Experience, "experience");
