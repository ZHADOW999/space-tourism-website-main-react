import React, { useState } from "react";
import destinationData from "./starter-code/data.json";
import { useEffect } from "react";
import { motion } from "framer-motion";

// Import images
import moonImg from "./starter-code/assets/destination/image-moon.png";
import marsImg from "./starter-code/assets/destination/image-mars.png";
import europaImg from "./starter-code/assets/destination/image-europa.png";
import titanImg from "./starter-code/assets/destination/image-titan.png";

const destinationImages = {
  Moon: moonImg,
  Mars: marsImg,
  Europa: europaImg,
  Titan: titanImg,
};

const DestinationTabs = () => {
  useEffect(()=>{
    document.body.style.overflowX='hidden'
  })
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <section className=" w-full mb-20">
      <h1 className="sm:mt-16 mt-10 ml-0 md:ml-[5%] 1xl:ml-[10%] mb-20 sm:tracking-[5px] tracking-wider  uppercase text-white sm:text-5 text-4 flex items-center justify-center md:justify-start">
        <span className="font-black opacity-25 tracking-wider mr-4 font-barlow-mid ">
          01
        </span>
        <span className="font-barlow-conLight">pick your destination</span>
      </h1>
      

      {/* Display Destination Data */}
      {destinationData.destinations.map(
        (destination, index) =>
          selectedTab === index && (
            <div key={index} className="1xl:gap-32 sm:gap-20 gap-5 flex 1xl:flex-row flex-col mx-auto w-[90%] md:w-[80%] items-center">
              <motion.div
              initial={{scale:0}}
              animate={{scale:1}}
              transition={{
                stiffness:100,
                type:"spring"
              }}
              className="1xl:w-[40%] w-[70%] -z-50">
                <img
                  src={destinationImages[destination.name]}
                  alt={destination.name}
                  className="w-[100%] h-auto rounded-lg mb-4 animate-spin2 "
                />
              </motion.div >
              <div className="1xl:w-[40%] w-full ">
                {/* Planet Name Tab Buttons */}
                <div className=" font-barlow-conLight tracking-wider uppercase flex 1xl:justify-start justify-center  mb-6 space-x-10 sm:space-x-14 md:space-x-6">
                  {destinationData.destinations.map((destination, index) => (
                    
                    <button
                      key={index}
                      onClick={() => setSelectedTab(index)}
                      className={`uppercase text-2 px-0 py-2  text-center ${
                        selectedTab === index
                          ? "text-white mb-2 border-b-2 border-gray-400"
                          : "text-color-2"
                      }`}
                    >
                      {destination.name}
                    </button>
                  ))}
                </div >
                <motion.div 
                className=""
                  initial={{opacity:0}}
                  animate={{opacity:2}}
                  transition={{duration:1.5,
                    delay:0.3
                  }}
                >
                  <article className="1xl:text-left text-center">
                    <h4 className="1xl:text-[100px] sm:text-[80px] text-9 text-white font-bellfair-reg  uppercase mb-2">{destination.name}</h4>
                    <p className="md:text-3 text-2 sm:[80%] md:w-[90%] md:m-auto 1xl:mx-0 w-full 1xl:w-full text-color-2 font-barlow-light leading-8">{destination.description}</p>
                    <div className="w-full h-[1px] mt-10 bg-gray-500 opacity-25"></div>
                    <div className="flex sm:gap-16 gap-5 flex-col sm:flex-row mt-7 sm:mt-4 justify-center 1xl:justify-start">
                      <p className=" space-y-2  flex flex-col">
                        <span className="uppercase font-barlow-conLight tracking-wider text-color-2 text-1.5">avg. Distance</span> <span className="text-white uppercase text-5  font-bellfair-reg">{destination.distance}</span>
                      </p>
                      <p className="space-y-2  flex flex-col">
                        <span className="uppercase font-barlow-conLight tracking-wider text-color-2 text-1.5">est. Travel Time</span> <span className="text-white uppercase text-5  font-bellfair-reg">{destination.travel}</span>
                      </p>
                    </div>
                  </article>
                </motion.div>
              </div>
            </div>
          )
      )}
    </section>
  );
};

export default DestinationTabs;

