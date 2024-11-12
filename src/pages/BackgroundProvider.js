// BackgroundContext.js
import React, { createContext, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

// Import background images for different screen sizes
import homeBgMobile from './starter-code/assets/home/background-home-mobile.jpg';
import homeBgTablet from './starter-code/assets/home/background-home-tablet.jpg';
import homeBgDesktop from './starter-code/assets/home/background-home-desktop.jpg';

import destinationBgMobile from './starter-code/assets/destination/background-destination-mobile.jpg';
import destinationBgTablet from './starter-code/assets/destination/background-destination-tablet.jpg';
import destinationBgDesktop from './starter-code/assets/destination/background-destination-desktop.jpg';

import crewBgMobile from './starter-code/assets/crew/background-crew-mobile.jpg';
import crewBgTablet from './starter-code/assets/crew/background-crew-tablet.jpg';
import crewBgDesktop from './starter-code/assets/crew/background-crew-desktop.jpg';

import technologyBgMobile from './starter-code/assets/technology/background-technology-mobile.jpg';
import technologyBgTablet from './starter-code/assets/technology/background-technology-tablet.jpg';
import technologyBgDesktop from './starter-code/assets/technology/background-technology-desktop.jpg';

const BackgroundContext = createContext();

export const useBackground = () => useContext(BackgroundContext);

const BackgroundProvider = ({ children }) => {
  useEffect(()=>{
    document.body.style.overflowX='hidden';
  })

  const location = useLocation();

  // Set background images for different screen sizes based on route
  let backgroundImageMobile = '';
  let backgroundImageTablet = '';
  let backgroundImageDesktop = '';

  if (location.pathname === '/') {
    backgroundImageMobile = homeBgMobile;
    backgroundImageTablet = homeBgTablet;
    backgroundImageDesktop = homeBgDesktop;
  } else if (location.pathname === '/destination') {
    backgroundImageMobile = destinationBgMobile;
    backgroundImageTablet = destinationBgTablet;
    backgroundImageDesktop = destinationBgDesktop;
  } else if (location.pathname === '/crew'){
    backgroundImageMobile = crewBgMobile;
    backgroundImageTablet =crewBgTablet;
    backgroundImageDesktop =crewBgDesktop;
  } else if (location.pathname === '/technology'){
    backgroundImageMobile = technologyBgMobile;
    backgroundImageTablet = technologyBgTablet;
    backgroundImageDesktop = technologyBgDesktop;
  }

  return (
    <BackgroundContext.Provider value={{ backgroundImageMobile, backgroundImageTablet, backgroundImageDesktop }}>
      <div className="min-h-screen">
        {/* Set responsive background images */}
        <div
          className="fixed inset-0 overflow-hidden -z-10 bg-cover bg-center min-h-screen md:hidden xl:hidden"
          style={{
            backgroundImage: `url(${backgroundImageMobile})`,
          }}
        ></div>

        <div
          className="fixed inset-0 -z-10 xl:hidden hidden md:block md:bg-cover md:bg-center md:min-h-screen"
          style={{
            backgroundImage: `url(${backgroundImageTablet})`,
          }}
        ></div>

        <div
          className="fixed inset-0 -z-10 hidden  xl:block xl:bg-cover  xl:bg-center md:h-screen"
          style={{
            backgroundImage: `url(${backgroundImageDesktop})`,
          }}
        ></div>

        {/* Content layer */}
        <body className="relative z-10 min-h-screen overflow-x-hidden">{children}</body>
      </div>
    </BackgroundContext.Provider>
  );
};

export default BackgroundProvider;
