import React from "react";
import insta from "../assets/Images/instagram.png";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaGithub } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";

const Hero1 = () => {
  return (
    <>
      <div
        id="Home"
        className=" md:h-screen sm:bg-gradient-to-bl bg-gradient-to-b sm:pt-[5%] from-[#391e6f] from-10% to-50% to-black flex max-sm:flex-col sm:gap-2 md:gap-3 relative max-sm:top-20 max-sm:px-3 md:pl-20 md:pr-12 "
      >
        {/* left */}
        <div className=" sm:w-[55%] sm:h-[80%] md:h-[95%] md:gap-5 flex flex-col md:mt-20 mt-5">
          <div className="md:text-4xl text-2xl font-bold text-white">
            I am Hitesh
          </div>
          <div className="md:text-6xl text-4xl font-bold tracking-tight bg-gradient-to-r from-[#7540df] from-30%  to-white bg-clip-text text-transparent">
            Software Developer
          </div>

          <div className="sm:hidden mx-auto">
            <img
              src="https://gerold.themejunction.net/wp-content/uploads/2024/05/hero_img.jpg"
              alt="profile-photo"
              className="md:w-[438px] w-[250px] my-8 rounded-3xl border border-[#3e1c81] sm:translate-x-5 rotate-[4deg] hover:rotate-0 duration-500 ease-in-out hover:border-[#723cde] hover:border-2"
            />
          </div>

          <div className="text-white text-lg max-sm:text-sm w-full max-sm:mb-5 lg:w-[550px] md:font-extralight">
            I break down complex user experience problems to create integrity
            focussed solutions that connect billions of people
          </div>
          <div className="flex max-sm:flex-col md:gap-4 gap-4 sm:items-center md:mt-8">
            <button className="border border-[#8750f7] rounded-full py-3 px-7 max-sm:w-52 md:py-4 md:px-9 text-[#8750f7] hover:bg-[#8750f7] hover:text-white transition-colors duration- ease-in-out">
              Download CV
            </button>

            <div className="flex md:gap-4">
              <ul className="flex gap-4">
                <li>
                  <a
                    href="#"
                    className="group relative inline-block"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="absolute inset-0 bg-[#8750f7] rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-in-out"></span>

                    <TiSocialLinkedin className="relative text-4xl text-[#8750f7] border border-[#8750f7] p-[5px] rounded-full group-hover:text-white transition-colors duration-500 ease-in-out" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/HiteshGaikwad"
                    className="group relative inline-block"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="absolute inset-0 bg-[#8750f7] rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-in-out"></span>
                    <FaGithub className="relative text-4xl text-[#8750f7] border border-[#8750f7] p-[5px] rounded-full group-hover:text-white transition-colors duration-500 ease-in-out" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://leetcode.com/u/Hitesh_gaikwad03/"
                    className="group relative inline-block"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="absolute inset-0 bg-[#8750f7] rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-in-out"></span>
                    <SiLeetcode className="relative text-4xl text-[#8750f7] border border-[#8750f7] p-[5px] rounded-full group-hover:text-white transition-colors duration-500 ease-in-out" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.geeksforgeeks.org/user/gaikwadhitesh03/"
                    className="group relative inline-block"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="absolute inset-0 bg-[#8750f7] rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-in-out"></span>
                    <SiGeeksforgeeks className="relative text-4xl text-[#8750f7] border border-[#8750f7] p-[5px] rounded-full group-hover:text-white transition-colors duration-500 ease-in-out" />
                  </a>
                </li>
              </ul>
              {/* <img
              className="w-8 h-8 p-[6px] border  border-[#8750f7] rounded-full"
              src={insta}
              alt="instagram-ligo"
            /> */}
            </div>
          </div>
        </div>
        {/* right */}
        <div className=" w-[45%] h-full max-sm:hidden">
          <div>
            <img
              src="https://gerold.themejunction.net/wp-content/uploads/2024/05/hero_img.jpg"
              alt="profile-photo"
              className="md:w-[438px] rounded-3xl border border-[#3e1c81] translate-x-5 rotate-[4deg] hover:rotate-0 duration-500 ease-in-out hover:border-[#723cde] hover:border-2"
            />
          </div>
        </div>
      </div>
      {/* <div id="Experience"></div> */}
    </>
  );
};

export default Hero1;
