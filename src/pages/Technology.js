import React, { useState, useEffect } from "react";
import technologyData from "./starter-code/data.json";
import { motion } from "framer-motion";
// Import images
import LVL from "./starter-code/assets/technology/image-launch-vehicle-landscape.jpg";
import SPL from "./starter-code/assets/technology/image-spaceport-landscape.jpg";
import SCL from "./starter-code/assets/technology/image-space-capsule-landscape.jpg";

import LVP from "./starter-code/assets/technology/image-launch-vehicle-portrait.jpg";
import SPP from "./starter-code/assets/technology/image-spaceport-portrait.jpg";
import SCP from "./starter-code/assets/technology/image-space-capsule-portrait.jpg";

const landscapeImages = {
  LVL: LVL,
  SPL: SPL,
  SCL: SCL,
};

const portraitImages = {
  LVP: LVP,
  SPP: SPP,
  SCP: SCP,
};

const TechnologyTabs = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1025);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="text-center w-full mb-20 1xl:mb-0">
      <h1 className="sm:mt-16 mt-10 ml-0 md:ml-[5%] 1xl:ml-[10%] mb-20 sm:tracking-[5px] tracking-wider  uppercase text-white sm:text-5 text-4 flex items-center justify-center md:justify-start">
        <span className="font-black opacity-25 tracking-wider mr-4 font-barlow-mid">
          03
        </span>
        <span className="">space launch 101</span>
      </h1>
      

      {/* Display Technology Data */}
      {technologyData.technology.map(
        (tech, index) =>
          selectedTab === index && (
            <div key={index} className="flex 1xl:flex-row-reverse flex-col">
              <motion.div
              className="w-full"
              initial={{x:200}}
              animate={{x:0}}
              transition={{stiffness:200}}
              >
                <img
                  src={
                    isDesktop
                      ? portraitImages[tech.images.portrait]
                      : landscapeImages[tech.images.landscape]
                  }
                  alt={tech.name}
                  className="1xl:w-[100%] h-auto w-full mb:mb-0 1xl:mb-4"
                />
              </motion.div>
              <div className="flex flex-col 1xl:flex-row items-center 1xl:ml-[10%] gap-[10%]">
                {/* Tab Buttons */}
      
                <div className="flex flex-row 1xl:flex-col justify-center mt-10  1xl:mt-0 1xl:mb-0 mb-10 space-x-6 1xl:space-x-0 1xl:space-y-6">
                  {technologyData.technology.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedTab(index)}
                      className={ `text-4 w-16 h-16 font-bellfair-reg rounded-full font-bold text-center ${
                        selectedTab === index
                          ? "bg-white text-black "
                          : "bg-transparent text-white border-[1px]  border-gray-400"
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
                <motion.div className="w-full flex items-center justify-center"
                initial={{x:-200}}
                animate={{x:0}}
                transition={{stiffness:0}}
                >
                  <article className="w-[90%] 1xl:w-auto 1xl:text-left text-center">
                    <p className="uppercase text-color-2 font-barlow-conLight tracking-wide">the terminology..</p>
                    <h4 className="sm:text-[40px] text-[24px]  lg:text-9 font-bellfair-reg uppercase text-white mb-2">{tech.name}</h4>
                    <p className="leading-8 1xl:mx-0 m-auto text-color-2 font-barlow-light text-2 lg:text-3 w-full sm:w-[90%] md:w-[70%] 1xl:w-[75%]">{tech.description}</p>
                  </article>
                </motion.div>
              </div>
            </div>
          )
      )}
    </section>
  );
};

export default TechnologyTabs;

