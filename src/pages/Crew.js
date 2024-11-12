import React, { useEffect, useState } from "react";
import crewData from "./starter-code/data.json";
import { motion } from "framer-motion";

// Import images
import douglasImg from "./starter-code/assets/crew/image-douglas-hurley.png";
import markImg from "./starter-code/assets/crew/image-mark-shuttleworth.png";
import victorImg from "./starter-code/assets/crew/image-victor-glover.png";
import anoushehImg from "./starter-code/assets/crew/image-anousheh-ansari.png";

const crewImages = {
  "Douglas Hurley": douglasImg,
  "Mark Shuttleworth": markImg,
  "Victor Glover": victorImg,
  "Anousheh Ansari": anoushehImg,
};

const CrewTabs = () => {
  useEffect(()=>{
    document.body.style.overflowX='hidden';
  })
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <section className="">
      <h1 className="sm:mt-16 mt-10 ml-0 md:ml-[5%] 1xl:ml-[10%] mb-20 sm:tracking-[5px] tracking-wider  uppercase text-white sm:text-5 text-4 flex items-center justify-center md:justify-start">
        <span className="font-black font-barlow-mid opacity-25  tracking-wider mr-4 ">
          02
        </span>
        <span className="font-barlow-conLight">meet your crew</span>
      </h1>

      {/* Display Crew Data */}
      {crewData.crew.map(
        (crew, index) =>
          selectedTab === index && (
            <div key={index} className="
            w-[90%] 
            m-auto
            flex
            justify-center 
            items-center
            flex-col 
            sm:justify-end
            sm:flex-col-reverse
            1xl:justify-between
            1xl:items-end
            1xl:w-[80%]
            1xl:flex-row-reverse ">
              
                <img
                  src={crewImages[crew.name]}
                  alt={crew.name}
                  className="lg:h-[55vh] 1xl:h-[auto] 1xl:w-[45%] sm:w-[60%] md:w-[70%] h-[400px] sm:h-auto"
                />
                <div className=" mb-10 w-full sm:hidden h-[2px] bg-gray-500 opacity-25"></div>
              
              <div className="flex flex-col-reverse sm:flex-col 1xl:mb-14 sm:mb-1 text-center 1xl:text-left"> 
                
                <motion.div 
                initial={{x:-100}}
                animate={{x:0}}
                transition={{
                  stiffness:100,
                  type:"spring",
                }}
                >
                  <article className="">
                    <h4 className="text-2 -z-0 sm:text-[24px] lg:text-[32px]  font-bellfair-reg uppercase text-color-3  mb-2">{crew.role}</h4>
                    <h5 className="text-[24px] font-bellfair-reg uppercase lg:text-9 sm:text-[40px] text-white mb-2">{crew.name}</h5>
                    <p className="mb-16 sm:w-[80%] w-full 1xl:mx-0 m-auto leading-8 text-color-2 lg:text-3  text-2">{crew.bio}</p>
                  </article>
                </motion.div>

                {/* Small Circle Tab Buttons */}
                <div className="flex 1xl:justify-start justify-center mb-6 space-x-4">
                  {crewData.crew.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedTab(index)}
                      className={`1xl:w-4 1xl:h-4 w-5 h-5 rounded-full ${
                        selectedTab === index
                          ? "bg-white border-2 "
                          : "bg-outline-color border-2 border-transparent"
                      }`}
                    ></button>
                  ))}
                </div>
              </div>
            </div>
          )
      )}
    </section>
  );
};

export default CrewTabs;

