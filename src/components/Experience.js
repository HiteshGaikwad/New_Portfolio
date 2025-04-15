import React from "react";
import experince_logo from "../assets/Images/experince_logo.jpg";
import { MdOutlineCorporateFare } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";
import { FaMapPin } from "react-icons/fa";
import { motion } from "framer-motion";
import { slideIn } from "./utils/motion";
import { styles } from "./style";
import we3_logo from "../assets/Images/we3_icon.png";
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
      className=" md:h-screen max-sm:top-20 max-sm:px-2 md:px-16 max-sm:mt-20  text-white bg-black mb-2"
      // style={{
      //   background: "radial-gradient(circle, #341b65 0%, black 90%) ",
      // }}
    >
      <div className=" flex flex-col align-middle justify-center sm:justify-center sm:h-full m-auto md:px-3 ">
        {/* <h1 className="text-4xl font-semibold font-sans">Experience</h1> */}
        <h2 className={`${styles.sectionHeadText}  font-bold md:pb-5`}>
          <span className="bg-gradient-to-r from-[#7540df] from-20%  to-white bg-clip-text text-transparent  ">
            Experience
          </span>
        </h2>
        <div className=" animated-element w-full flex h-5/6 sm:align-bottom  max-sm:mt-5 max-sm:flex-col md:gap-5 max-md:gap-2 max-sm:gap-16 ml-10  ">
          <motion.div
            variants={slideIn("left", "tween", 0.2, 1)}
            className="sm:w-1/2 max-sm:w-[90%] max-sm:px-3 py-3 px-2 relative perspective-distant"
          >
            {/* Background Element */}
            <div className="border border-[#7540df] bg-gradient-to-r from-[#7540df] to-[#d14aec] rounded-[100px]  absolute xl:min-w-[560px] sm:min-w-[450px] max-sm:w-full max-sm:px-3 py-3 px-2 sm:h-[430px] max-sm:min-h-[540px] xl:h-[450px] ml-[-25px] shadow-[0px_4px_20px_rgba(0,0,0,0.4)] scale-105 z-10"></div>

            {/* Foreground Content */}
            <h2 className="flex text-center gap-2 font-semibold md:text-xl z-50 relative">
              <img
                src={we3_logo}
                alt="We3 tech logo"
                className="md:w-10 w-7 h-7 md:h-10 rounded-full shadow-[0px_4px_10px_rgba(0,0,0,0.3)] p-1 z-50"
              />
              <span className="h-full mt-auto max-md:text-[18px] text-white z-50">
                We3 Tech Works
              </span>
            </h2>
            <h3 className="flex gap-2 mt-2 max-md:ml-1 text-white z-50 relative">
              <RiComputerLine className="md:text-2xl max-md:text-xl md:mx-2 z-50" />
              <span className="font-semibold max-md:text-[15px] z-50">
                Software Developer{" "}
              </span>
            </h3>
            <h4 className="flex gap-2 mt-2 max-md:mx-1 text-white z-50 relative">
              <FaMapPin className="md:text-2xl max-md:text-xl md:mx-2 z-50" />
              <span className="max-md:text-[14px] z-50">
                January 2023 - Present{" "}
              </span>
            </h4>
            <ul className="list-disc pl-2 pt-5 max-md:text-[13px] text-[15px] text-white relative z-50">
              <li>
                Developed and maintained 2 web applications, utilizing React.js,
                JavaScript, HTML, CSS, Redux, Tailwind, Bootstrap, contributing
                to full development life cycle, from requirements gathering to
                deployment.
              </li>
              <li>
                Implemented dynamic UI components and interactive elements to
                enhance user engagement and accessibility.
              </li>
              <li>
                Improved page load times by 30% by optimizing assets, lazy
                loading components, and minimizing unnecessary re-renders.
              </li>
              <li>
                Integrated RESTful APIs and third-party services to fetch and
                display real-time data efficiently.
              </li>
              <li>
                Implemented security best practices, including input validation,
                authentication, and secure API communication.
              </li>
            </ul>
          </motion.div>

          <motion.div
            variants={slideIn("right", "tween", 0.2, 1)}
            className="md:w-[40%] max-md:w-1/2 max-sm:w-[90%] max-sm:px-1 max-md:pt-10 max-sm:pt-1  md:py-3 px-2  "
          >
            <img
              className="sm:w-full w-32 max-sm:w-full max-sm:h-72  sm:h-[80%] rounded-[80px] filter grayscale hover:filter-none hover:scale-105 transition-all ease-linear "
              src={experince_logo}
              alt="experince logo"
              // style={{
              //   filter: "grayscale(100%)",
              // }}
            />
          </motion.div>
        </div>
      </div>
      <div id="Projects"></div>
    </section>
  );
};

export default SectionWrapper(Experience, "experience");
