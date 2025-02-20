import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full h-20 md:sticky max-sm:fixed md:top-0 backdrop-blur-lg z-50  ">
      {/* bg-gradient-to-r from-[#391e6f] via-[#321a62] from-30% to-80% to-[#321a62] md:to-transparent */}
      <div className="md:w-2/3 max-md:w-[100%] flex align-middle sm:justify-center justify-end h-full m-auto sm:px-3 ">
        <div
          className={`w-full m-auto flex max-sm:flex-col sm:h-full  sm:align-middle sm:justify-center sm:text-white ${
            !isMenuOpen
              ? "max-sm:hidden"
              : "max-sm:flex max-sm:overflow-y-hidden max-sm:absolute max-sm:bg-white max-sm:top-20 max-sm:text-black max-sm:w-full max-sm:h-screen "
          }`}
        >
          {/* <div
            className=" sm:hidden fixed z-50 right-5 top-24"
            title="Download Resume"
          >
            {" "}
            <a
              href="https://drive.google.com/uc?export=download&id=196V8Tc2kxoYidpVsg1ZkgA0yxarr2zgv"
              download="HiteshGaikwad-resume"
              rel="noopener noreferrer"
            >
              <img
                src={download_icon}
                alt="downlaod icon"
                className="w-14 h-14 drop-shadow-[5px_5px_8px_white] animate-bounce"
              />
            </a>
          </div> */}
          <ul
            className={`sm:text-white sm:w-full max-md:w-4/5 lg:w-full sm:flex sm:justify-between sm:align-middle m-auto  
                ${
                  !isMenuOpen
                    ? " "
                    : "max-sm:flex-col py-2 max-sm:flex pt-2  max-sm:gap-5 sm:shadow-xl max-sm:w-full max-sm:text-center max-sm:text-[20px] rounded-sm max-sm:font-extrabold h-full max-sm:mt-28"
                }
            `}
          >
            <li>
              <a
                href="#Home"
                className="hover:no-underline"
                onClick={() => setIsMenuOpen(false)}
              >
                {" "}
                Home
              </a>
            </li>
            <li>
              <a
                className="hover:no-underline"
                href="#Experience"
                onClick={() => setIsMenuOpen(false)}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                className="hover:no-underline"
                href="#Projects"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                className="hover:no-underline"
                href="#Skills"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                className="hover:no-underline"
                href="#Education"
                onClick={() => setIsMenuOpen(false)}
              >
                Education
              </a>
            </li>
            <li>
              <a
                className="hover:no-underline"
                href="#Contact"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </li>
            {/* <ul className="flex w-full justify-center align-middle gap-5 mt-4 sm:hidden">
              <li>
                <img src={instagram} alt="instagram_icon" className="w-7 h-7" />
              </li>
              <li>
                <img src={instagram} alt="instagram_icon" className="w-7 h-7" />
              </li>
              <li>
                <img src={instagram} alt="instagram_icon" className="w-7 h-7" />
              </li>
            </ul> */}
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
