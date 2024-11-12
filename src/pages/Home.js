import { Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
const Home = () => {
  useEffect(()=>{
    document.body.style.overflowX='hidden'
  })
    return ( 
        <section className="1xl:mt-52 sm:mt-32 mt-20 mb-32 1xl:mb-0">
          <div className="text-center 1xl:text-left flex flex-col 1xl:flex-row  gap-32 1xl:gap-0 items-center 1xl:justify-between justify-between w-[80%] m-auto">
            <article className="leading-loose">
              <p className="sm:mb-2 mb-10 leading-[50px] uppercase text-color-2 text-2 sm:text-5 font-barlow-conLight tracking-widest">So, you want to travel to</p>
              <h1 className="leading-10 h-auto text-white font-bellfair-reg uppercase  sm:text-9xl text-[80px] ">Space</h1>
              <p className="1xl:w-[55%] sm:w-[100%] md:w-[70%] m-auto 1xl:mx-0 w-full text-[15px] sm:mt-4 mt-10 sm:text-3 font-barlow-light text-color-2">
                Let’s face it; if you want to go to space, you might as well genuinely go to 
                outer space and not hover kind of on the edge of it. Well sit back, and relax 
                because we’ll give you a truly out of this world experience!
              </p>
            </article>
            <motion.div 
            initial={{
              opacity:0,
              scale:0
            }}
            animate={{
              opacity:1,
              scale:1
            }}
            transition={{
              stiffness:100,
              ease:"circInOut",
              type:"spring",
              delay:0.3
            }}
            ><button aria-label="explore button"><Link to="/destination" className="hover:scale-110 outline outline-[75.59px] outline-transparent outline-offset-0 hover:outline-outline-color hover:outline-offset-4 transition-all ease-in-out duration-500 font-bellfair-reg uppercase tracking-wide text-4 rounded-full w-56 h-56 flex items-center justify-center bg-white">Explore</Link></button></motion.div>
          </div>
        </section>
    );
}

export default Home;