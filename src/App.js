import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import Loader from "./components/Loader";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import BackgroundProvider from "./pages/BackgroundProvider";

function App() {
  const location = useLocation();

  return (
    <>
      <BackgroundProvider>
        <NavBar />
        <AnimatePresence >
          <Routes location={location} key={location.pathname}>
            <Route
              index
              
              element={
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  //exit={{ opacity: 0, x: 50 }}
                  transition={{ stiffness:200,
                    damping:10,
                    type:"spring"
                  }}
                >
                  <Home />
                </motion.div>
              }
            />
            <Route
              path="destination"
              element={
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  //exit={{ opacity: 0, x: 50 }}
                  transition={{ stiffness:100,
                    damping:10,
                    type:"spring"
                   }}
                >
                  <Destination />
                </motion.div>
              }
            />
            <Route
              path="crew"
              element={
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  //exit={{ opacity: 0, x: 50 }}
                  transition={{ stiffness:100,
                    damping:10,
                    type:"spring"
                  }}
                >
                  <Crew />
                </motion.div>
              }
            />
            <Route
              path="technology"
              element={
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  //exit={{ opacity: 0, x: 50 }}
                  transition={{ stiffness:100,
                    damping:10,
                    type:"spring"
                  }}
                >
                  <Technology />
                </motion.div>
              }
            />
            <Route
              path="*"
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  //exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Loader />
                </motion.div>
              }
            />
          </Routes>
        </AnimatePresence>
      </BackgroundProvider>
    </>
  );
}

export default App;

// import NavBar from "./components/NavBar";
// import Home from "./pages/Home";
// import Destination from "./pages/Destination";
// import Crew from "./pages/Crew";
// import Technology from "./pages/Technology";
// //import Layout from "./layout";
// import { Route, Routes } from "react-router-dom";
// import BackgroundProvider from "./pages/BackgroundProvider";
// import Loader from "./components/Loader";
// function App() {
  
//   return (
//     <>
    
//       <BackgroundProvider>
//       <NavBar />
//         <Routes>

//         <Route index element={<Home />} /> 
//             <Route path="destination" element={<Destination />} />
//             <Route path="crew" element={<Crew />} />
//             <Route path="technology" element={<Technology />} />
//             <Route path="*" element={<Loader/>}/>
//         </Routes>
        
//       </BackgroundProvider>
//     </>
//   );
// }

// export default App;
