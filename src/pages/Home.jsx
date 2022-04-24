import React from 'react'
import Intro from '../components/Intro'
import { useEffect } from 'react';
const Home = () => {

  const handleBgChange = () => {
    if (window.innerWidth >= 768 && window.innerWidth < 1024) {
      document.body.style.backgroundImage =
        "url(assets/home/background-home-tablet.jpg)";
    } else if (window.innerWidth >= 1024) {
      document.body.style.backgroundImage =
        "url(assets/home/background-home-desktop.jpg)";
    } else {
      document.body.style.backgroundImage =
        "url(assets/home/background-home-mobile.jpg)";
    }
  };
  useEffect(() => {
    handleBgChange();
    window.addEventListener("resize", handleBgChange);
    return () => {
      window.removeEventListener("resize", handleBgChange);
    };
  }, []);
  return (
    <>
    <Intro />
    </>
  )
}

export default Home