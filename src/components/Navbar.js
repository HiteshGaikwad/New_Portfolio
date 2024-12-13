import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full h-20 bg-black fixed top-0 z-50">
      <div className="sm:w-2/3 flex align-middle sm:justify-center justify-end h-full m-auto sm:px-3">
        <div
          className={`w-full m-auto sm:flex  sm:h-full  sm:align-middle sm:justify-center sm:text-white ${
            !isMenuOpen
              ? "max-sm:hidden"
              : "max-sm:flex max-sm:flex-col max-sm:absolute max-sm:bg-white max-sm:top-20 max-sm:text-black max-sm:w-full max-sm:h-fit "
          }`}
        >
          <ul
            className={`sm:text-white sm:w-full lg:w-3/5 sm:flex sm:justify-between sm:align-middle m-auto  
                ${
                  !isMenuOpen
                    ? " "
                    : "max-sm:flex-col max-sm:gap-14 py-2 sm:flex shadow-xl max-sm:w-full max-sm:text-center max-sm:text-[14px] rounded-sm max-sm:font-semibold"
                }
            `}
          >
            <li>
              <a href="#Experience">Home</a>
            </li>
            <li>
              <a href="#Experience">Experience</a>
            </li>
            <li>
              <a href="#Projects">Projects</a>
            </li>
            <li>
              <a href="#Skills">Skills</a>
            </li>
            <li>
              <a href="#Education">Education</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </div>
        <button
          className="sm:hidden mr-5 text-4xl  text-center h-full"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {!isMenuOpen ? (
            <FiMenu className="text-white" />
          ) : (
            <FiX className="text-white " />
          )}{" "}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
