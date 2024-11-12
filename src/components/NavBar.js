import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);

    // Toggle active state on click
    const handleToggle = () => {
        setIsActive((prevState) => !prevState);
    };

    return (
        <header className="overflow-hidden">
            <nav className="overflow-hidden pt-6 flex justify-between items-center w-full m-auto">
                <p className="xl:ml-10  ml-5" aria-label="logo">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
                        <g fill="none" fillRule="evenodd">
                            <circle cx="24" cy="24" r="24" fill="#FFF" />
                            <path
                                fill="#0B0D17"
                                d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
                            />
                        </g>
                    </svg>
                </p>
                <div className="hidden w-[35%] left-60 1xl:block 2xl:w-[45%] absolute h-0.5 bg-gray-700 2xl:left-40 z-50 "></div>
                <div
                    className={`mr-5 md:hidden ham-menu z-[50] ${isActive ? "active2" : ""}`}
                    onClick={handleToggle}
                    aria-label="Menu button"
                >
                    <button aria-label="Toggle Menu">
                        <span className="span-1 "></span>
                        <span className="span-2"></span>
                        <span className="span-3"></span>
                    </button>
                </div>
                <div className={` nav-list  absolute -right-[100%]  top-0 transition-all duration-500 ease-linear h-full w-[60%]  pt-32 pr-20 pl-10 flex-col  font-barlow-conLight z-0 backdrop-blur-xl bg-navBackground text-white flex md:relative md:pt-0 md:items-center gap-7  md:flex-row md:right-0 md:justify-center md:gap-5 text-3 md:w-auto md:h-24 md:pl-20 md:pr-28 ${isActive ? "active2" : ""}`}>
                    <motion.div
                    initial={{x:100}}
                    animate={{x:0}}
                    >
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `uppercase relative tracking-wide  ${isActive
                                    ? 'after:content-[""] after:right-[-122px]  after:block   after:h-6 after:rounded-l-sm after:w-[4px] after:bg-white after:absolute after:top-0 after-bottom-auto md:after:bottom-[-34px] md:after:w-16 md:after:top-auto md:after:h-[2px] md:after:right-auto'
                                    : ""
                                }`
                            }
                        >
                    
                        <span className="font-semibold mr-2">00</span>Home
                        </NavLink>
                    </motion.div>
                    <NavLink
                        to="/destination"
                        className={({ isActive }) =>
                            `uppercase tracking-wide relative ${isActive
                                ? 'after:content-[""] after:right-[-80px]  after:block   after:h-6 after:w-[4px] after:rounded-l-sm after:bg-white after:absolute after:top-0 after-bottom-auto md:after:bottom-[-34px] md:after:w-28 md:after:top-auto md:after:h-[2px] md:after:right-auto'
                                : ""
                            }`
                        }
                    >
                        <span className="font-semibold mr-2">01</span>Destination
                    </NavLink>
                    <NavLink
                        to="/crew"
                        className={({ isActive }) =>
                            `uppercase relative tracking-wide ${isActive
                                ? 'after:content-[""] after:right-[-80px]  after:block   after:h-6 after:w-[4px] after:rounded-l-sm after:bg-white after:absolute after:top-0 after-bottom-auto md:after:bottom-[-34px] md:after:w-16 md:after:top-auto md:after:h-[2px] md:after:right-auto'
                                : ""
                            }`
                        }
                    >
                        <span className="font-semibold mr-2">02</span>Crew
                    </NavLink>
                    <NavLink
                        to="/technology"
                        className={({ isActive }) =>
                            `uppercase relative tracking-wide ${isActive
                                ? 'after:content-[""] after:right-[-80px]  after:block   after:h-6 after:w-[4px] after:rounded-l-sm after:bg-white after:absolute after:top-0 after-bottom-auto md:after:bottom-[-34px] md:after:w-32 md:after:top-auto md:after:h-[2px] md:after:right-auto'
                                : ""
                            }`
                        }
                    >
                        <span className="font-semibold mr-2">03</span>Technology
                    </NavLink>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;



// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { motion, } from "framer-motion";

// const Navbar = () => {
//     const [isActive, setIsActive] = useState(false);

//     // Toggle active state on click
//     const handleToggle = () => {
//         setIsActive((prevState) => !prevState);
//     };

//     //Define animations for the sidebar and NavLink items
//     // const sidebarVariants = {
//     //     hidden: { x: "100%" },
//     //     visible: { x: 0, transition: { duration: 0.5, ease: "easeInOut" } },
//     //     exit: { x: "100%", transition: { duration: 0.5, ease: "easeInOut" } },
//     // };

//     const linkVariants = {
//         hidden: { opacity: 0, x: -20 },
//         visible: (index) => ({
//             opacity: 1,
//             x: 0,
//             transition: { delay: index * 0.1, duration: 0.3 },
//         }),
//         exit: { opacity: 0, x: 20, transition: { duration: 0.3 } },
//     };

//     return (
//         <header className="overflow-hidden">
//             <nav className="overflow-hidden pt-6 flex justify-between items-center w-full m-auto">
//                 <p className="xl:ml-10 ml-5" aria-label="logo">
//                     <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
//                         <g fill="none" fillRule="evenodd">
//                             <circle cx="24" cy="24" r="24" fill="#FFF" />
//                             <path
//                                 fill="#0B0D17"
//                                 d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
//                             />
//                         </g>
//                     </svg>
//                 </p>

//                 <div
//                     className={`mr-5 md:hidden ham-menu z-[50] ${isActive ? "active2" : ""}`}
//                     onClick={handleToggle}
//                     aria-label="Menu button"
//                 >
//                     <button aria-label="Toggle Menu">
//                         <span className="span-1"></span>
//                         <span className="span-2"></span>
//                         <span className="span-3"></span>
//                     </button>
//                 </div>

//                 {/* Sidebar navigation */}
//                 <motion.div
//                 // initial="hidden"
//                 // animate="visible"
//                 // exit="exit"
//                 // variants={sidebarVariants}
//                     className={` nav-list  absolute right-0  top-0  h-full w-[60%]  pt-32 pr-20 pl-10 flex-col  font-barlow-conLight z-0 backdrop-blur-xl bg-navBackground text-white flex md:relative md:pt-0 md:items-center gap-7  md:flex-row md:right-0 md:justify-center md:gap-5 text-3 md:w-auto md:h-24 md:pl-20 md:pr-28
//                         ${isActive ? "fixed top-0 right-0 h-full w-[60%] pt-32 pr-20 pl-10 backdrop-blur-xl bg-navBackground z-0 text-white flex flex-col gap-7" : "hidden"}
//                     `}
//                 >
//                     {["Home", "Destination", "Crew", "Technology"].map((text, index) => (
//                         <motion.div
//                             key={text}
//                             custom={index}
//                             initial="hidden"
//                             animate="visible"
//                             exit="exit"
//                             variants={linkVariants}
//                         >
//                             <NavLink
//                                 to={`/${text.toLowerCase()}`}
//                                 className={({ isActive }) =>
//                                     `uppercase tracking-wide relative ${
//                                         isActive
//                                             ? 'after:content-[""] after:block after:h-6 after:w-[4px] after:bg-white after:absolute after:top-0 after-bottom-auto md:after:bottom-[-34px] md:after:w-16 md:after:h-[2px]'
//                                             : ""
//                                     }`
//                                 }
//                             >
//                                 <span className="font-semibold mr-2">{`0${index}`}</span>
//                                 {text}
//                             </NavLink>
//                         </motion.div>
//                     ))}
//                 </motion.div>
//             </nav>
//         </header>
//     );
// };

// export default Navbar;




