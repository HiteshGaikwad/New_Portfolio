import React from "react";
import userLogo from "../assets/Images/User_Logo.png";
import { MdLocationOn } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";

const Hero = () => {
  return (
    <section className="w-full sm:h-screen relative top-40 max-sm:top-24 sm:top-20 py-2">
      <div className="sm:w-2/3 flex flex-col align-middle sm:justify-center justify-end sm:h-full m-auto sm:px-3 ">
        <div className="flex justify-center max-sm:flex-col-reverse sm:h-1/2 align-middle w-full">
          {/* top left */}
          <div className=" w-full flex sm:justify-between max-sm:justify-center max-sm:align-middle max-sm:pt-1">
            <div className="flex h-[65%] flex-col pl-2 pt-2 max-sm:hidden">
              <div className="mt-8 w-4 h-4 bg-blue-800 rounded-full"></div>
              <div className="h-[135px] w-[3px] bg-gradient-to-b from-blue-800 m-auto"></div>
            </div>

            <div className=" sm:hidden pt-3 pr-2">
              <MdLocationOn className="color-blue text-4xl font-bold" />
            </div>
            <div className="sm:text-start sm:h-[60%] flex items-end sm:pb-10 sm:w-full  sm:m-auto max-sm:flex max-sm:justify-center max-sm:align-middle max-sm:pt-1 ">
              <div>
                {/* Hitesh Gaikwad */}
                Full Name
                <br />
                Software Developer
                {/* social media */}
                <div className="flex text-xl gap-2 pt-1">
                  <a href="#">
                    <FaGithub />
                  </a>
                  <a href="#" className="text-orange-400">
                    <SiLeetcode />
                  </a>
                  <a href="#" className="text-green-600 text-2xl">
                    <SiGeeksforgeeks />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* top right */}
          <div className="w-full pl-2 sm:py-2 max-sm:pr-2 max-sm:flex max-sm:justify-center max-sm:align-middle">
            <div className="sm:h-full">
              <img
                className="rounded-full sm:h-full max-sm:h-48"
                src={userLogo}
                alt="User"
              />
            </div>
          </div>
        </div>
        <div className=" sm:h-1/2 w-full sm:py-3 sm:px-2">
          <div className="p-5">
            <q className="text-xl font-bold">
              <div className="text-[16px] font-medium inline">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </div>
            </q>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
