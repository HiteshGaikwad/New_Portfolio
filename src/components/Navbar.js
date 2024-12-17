import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import download_icon from "../assets/Images/download.png";
import instagram from "../assets/Images/instagram.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full h-20 bg-black fixed top-0 z-50">
      <div className="sm:w-2/3 flex align-middle sm:justify-center justify-end h-full m-auto sm:px-3">
        <div
          className={`w-full m-auto flex max-sm:flex-col sm:h-full  sm:align-middle sm:justify-center sm:text-white ${
            !isMenuOpen
              ? "max-sm:hidden"
              : "max-sm:flex max-sm:absolute max-sm:bg-white max-sm:top-20 max-sm:text-black max-sm:w-full max-sm:h-screen "
          }`}
        >
          <div
            className=" sm:hidden fixed z-50 right-5 top-24"
            title="Download Resume"
          >
            {" "}
            {/* Download Resume */}
            <a
              href="https://drive.google.com/uc?export=download&id=196V8Tc2kxoYidpVsg1ZkgA0yxarr2zgv"
              download="HiteshGaikwad-resume"
              rel="noopener noreferrer"
            >
              <img
                src={download_icon}
                alt="downlaod icon"
                className="w-14 h-14 drop-shadow-[5px_5px_8px_red] animate-bounce	"
              />
            </a>
          </div>
          <ul
            className={`sm:text-white sm:w-full mt-28 lg:w-3/5 sm:flex sm:justify-between sm:align-middle m-auto  
                ${
                  !isMenuOpen
                    ? " "
                    : "max-sm:flex-col py-2 max-sm:flex pt-2  max-sm:gap-5 sm:shadow-xl max-sm:w-full max-sm:text-center max-sm:text-[20px] rounded-sm max-sm:font-extrabold h-full "
                }
            `}
          >
            <li>
              <a href="#Home" onClick={() => setIsMenuOpen(false)}>
                {" "}
                Home
              </a>
            </li>
            <li>
              <a href="#Experience" onClick={() => setIsMenuOpen(false)}>
                Experience
              </a>
            </li>
            <li>
              <a href="#Projects" onClick={() => setIsMenuOpen(false)}>
                Projects
              </a>
            </li>
            <li>
              <a href="#Skills" onClick={() => setIsMenuOpen(false)}>
                Skills
              </a>
            </li>
            <li>
              <a href="#Education" onClick={() => setIsMenuOpen(false)}>
                Education
              </a>
            </li>
            <li>
              <a href="#Contact" onClick={() => setIsMenuOpen(false)}>
                Contact
              </a>
            </li>
            <ul className="flex w-full justify-center align-middle gap-5 mt-4 sm:hidden">
              <li>
                <img src={instagram} alt="instagram_icon" className="w-7 h-7" />
              </li>
              <li>
                <img src={instagram} alt="instagram_icon" className="w-7 h-7" />
              </li>
              <li>
                <img src={instagram} alt="instagram_icon" className="w-7 h-7" />
              </li>
            </ul>
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
