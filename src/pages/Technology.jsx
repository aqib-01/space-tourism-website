import React, { useState } from "react";
import { useEffect } from "react";
import gsap from "gsap";
const Technology = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tech, setTech] = useState([]);
  const [currTech, setCurrTech] = useState({});
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const getData = async () => {
    const res = await fetch("data.json");
    const data = await res.json();

    setTech(data.technology);
    setCurrTech(data.technology[0]);
    setIsLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);
  const handleBgChange = () => {
    setWindowWidth(window.innerWidth);
    if (window.innerWidth >= 768 && window.innerWidth < 1024) {
      document.body.style.backgroundImage =
        "url(assets/technology/background-technology-tablet.jpg)";
    } else if (window.innerWidth >= 1024) {
      document.body.style.backgroundImage =
        "url(assets/technology/background-technology-desktop.jpg)";
    } else {
      document.body.style.backgroundImage =
        "url(assets/technology/background-technology-mobile.jpg)";
    }
  };
  useEffect(() => {
    handleBgChange();
    window.addEventListener("resize", handleBgChange);
    return () => {
      window.removeEventListener("resize", handleBgChange);
    };
  }, []);
  const handleTechChange = (i) => {
    setCurrTech(tech[i]);
  };
  useEffect(() => {
    if (!isLoading) {
      if (window.innerWidth >= 768) {
        gsap.from(".tech-img", {
          y: 200,
          opacity: 0,
          duration: 0.8,
          ease: "power.out",
        });
        gsap.from(".tech-detail", {
          y: -200,
          opacity: 0,
          duration: 0.8,
        });
      } else {
        gsap.from(".tech-img", {
          rotateY: 180,
          opacity: 0,
          duration: 0.8,
          ease: "power.out",
        });
        gsap.from(".tech-detail", {
          y: 200,
          opacity: 0,
          duration: 0.8,
        });
      }
    }
  }, [currTech]);
  useEffect(() => {
    if (!isLoading) {
      if (window.innerWidth >= 1024) {
        gsap.from(".tech-img", {
          y: 200,
          opacity: 0,
          duration: 0.8,
          ease: "power.out",
          delay: 1,
        });
        gsap.from(".tech-detail", {
          y: -200,
          opacity: 0,
          duration: 0.8,
          delay: 1,
        });
        gsap.from(".launch-text", {
          x: -100,
          opacity: 0,
        });
        gsap.from(".tech-btn", {
          opacity: 0,
          stagger: 0.2,
          delay: .5,
          x: -40,
        });
      } else {
        gsap.from(".launch-text", {
          x: -100,
          opacity: 0,
        });
        gsap.from(".tech-btn", {
          opacity: 0,
          stagger: 0.2,
          delay: 1,
        });
        gsap.from(".tech-img", {
          rotateY: 180,
          opacity: 0,
          duration: 0.8,
          delay: .5,
          ease: "power.out",
        });
        gsap.from(".tech-detail", {
          y: 200,
          opacity: 0,
          duration: 0.8,
          delay: 1.6
        });
      }
    }
  }, [isLoading]);
  return (
    <>
      {isLoading ? (
        <div className="fixed text-5xl inset-0 grid place-items-center text-white">
          Loading...
        </div>
      ) : (
        <main>
          <div className="wrapper">
            <h4 className="launch-text text-white text-center md:text-left mt-5 md:mt-10 lg:m-0 uppercase font-barlow">
              <span className="font-bold mr-4 opacity-50">03</span>Space Launch
              101
            </h4>
            <section
              className="mt-14 md:max-w-lg mx-auto lg:ml-auto 
            lg:max-w-5xl md:flex md:flex-col lg:flex lg:flex-row
             lg:justify-between lg:gap-10 lg:my-10 lg:items-center"
            >
              <div className="tech-img lg:order-2">
                <picture>
                  <source
                    media="(min-width: 1024px)"
                    srcset={currTech.images.portrait}
                  />
                  <img
                    className="w-full"
                    src={currTech.images.landscape}
                    alt={"image of " + currTech.name}
                  />
                </picture>
              </div>

              <div
                className="mt-10  lg:flex-1
                lg:flex lg:mr-10
              "
              >
                <div
                  className="flex items-center justify-center lg:my-10
                   lg:m-0 lg:flex-col lg:mr-10
                  "
                >
                  {tech.map((tech, i) => {
                    return (
                      <button
                        key={i}
                        onClick={() => handleTechChange(i)}
                        className={`tech-btn border-2 p-3.5 
                        rounded-full border-white border-opacity-25
                         ml-5  first:ml-0 lg:m-0 font-semibold lg:mt-5 lg:first:mt-0 ${
                           currTech.name === tech.name && " active-tech-btn"
                         }`}
                      >
                        <span className="block w-5 h-5">{i + 1}</span>
                      </button>
                    );
                  })}
                </div>
                <div className="tech-detail my-8 ">
                  <div className="text-center lg:text-left">
                    <p className="text-light-gray uppercase text-18">
                      The Terminology...
                    </p>
                    <h4 className="uppercase mt-2 lg:pr-8 lg:text-56">
                      {currTech.name}
                    </h4>
                    <p className="mt-2 lg:pr-32 lg:text-lg">
                      {currTech.description}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      )}
    </>
  );
};

export default Technology;
