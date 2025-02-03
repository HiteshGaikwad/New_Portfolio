import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "./style";
import { education } from "./utils/constants";
import SectionWrapper from "./hoc/SectionWrapper";
import { textVariant } from "./utils/motion";

const ExperienceCard = ({ item }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      // date={experience.date}
      // iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full ">
          {/* <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          /> */}
          <div className=" font-bold max-md:text-sm md:text-lg  text-center ">
            {item?.initials}
          </div>
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[20px] font-bold">{item.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {item.college_name}
        </p>
        <div className="text-sm font-semibold mt-2">{item?.percent}</div>
        <div className="text-sm font-semibold mt-2">{item?.date}</div>
      </div>

      {/* <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul> */}
    </VerticalTimelineElement>
  );
};

const Education = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        className=" bg-black md:mt-[-25px] md:px-8 "
      >
        {/* <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p> */}
        <h2 className={`${styles.sectionHeadText}  md:mx-16  `}>
          {" "}
          <span className="bg-gradient-to-r from-[#7540df] from-20% max-sm:pl-2 to-white bg-clip-text text-transparent">
            Education
          </span>
        </h2>
      </motion.div>

      <div className="flex flex-col bg-black  md:pb-16">
        <VerticalTimeline>
          {education.map((item, index) => (
            <ExperienceCard key={`education-${index}`} item={item} />
          ))}
        </VerticalTimeline>
      </div>
      <div id="Contact"></div>
    </>
  );
};

export default SectionWrapper(Education, "work");
