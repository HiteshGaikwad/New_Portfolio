import React from "react";
import { skills } from "./utils/constants";
import BallCanvas from "./utils/Ball";
import SectionWrapper from "./hoc/SectionWrapper";
import { styles } from "./style";

const Skills = () => {
  return (
    <section className="w-full max-sm:h-full max-sm:px-2 max-md:pr-0">
      <h2
        className={`${styles.sectionHeadText} md:mx-16  bg-gradient-to-r from-[#7540df] from-30%  to-white bg-clip-text text-transparent`}
      >
        Skills
      </h2>
      <div className="md:w-2/3 flex flex-col align-middle justify-center sm:justify-center sm:h-full m-auto ">
        {/* <h1 className="text-4xl font-semibold font-sans">Skills</h1> */}

        <div className="flex flex-row flex-wrap justify-center mt-7 gap-10">
          {skills?.map((technology) => {
            return (
              <div
                className="sm:w-28 sm:h-28 max-sm:w-20 max-sm:h-20"
                key={technology.name}
                title={technology.name}
              >
                <BallCanvas icon={technology.icon} />
              </div>
            );
          })}
        </div>
      </div>
      <div id="Education"></div>
    </section>
  );
};

export default SectionWrapper(Skills, "");
