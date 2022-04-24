import React, { useState } from "react";
import { useEffect } from "react";
import gsap from "gsap";
const Crew = () => {
  const [crew, setCrew] = useState([]);
  const [currCrew, setCurrCrew] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const getData = async () => {
    const res = await fetch("data.json");
    const data = await res.json();

    setCrew(data.crew);
    setCurrCrew(data.crew[0]);
    setIsLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);

  const handleBgChange = () => {
    if (window.innerWidth >= 768 && window.innerWidth < 1024) {
      document.body.style.backgroundImage =
        "url(assets/crew/background-crew-tablet.jpg)";
    } else if (window.innerWidth >= 1024) {
      document.body.style.backgroundImage =
        "url(assets/crew/background-crew-desktop.jpg)";
    } else {
      document.body.style.backgroundImage =
        "url(assets/crew/background-crew-mobile.jpg)";
    }
  };
  useEffect(() => {
    handleBgChange();
    window.addEventListener("resize", handleBgChange);
    return () => {
      window.removeEventListener("resize", handleBgChange);
    };
  }, []);

  const handleCrewChange = (i) => {
    setCurrCrew(crew[i]);
  };
  useEffect(() => {
    if (!isLoading) {
      if (window.innerWidth >= 768) {
        gsap.from(".crew-img", {
          y: 200,
          opacity: 0,
          duration: 0.8,
          ease: "power.out",
        });
        gsap.from(".crew-detail", {
          y: -200,
          opacity: 0,
          duration: 0.8,
        });
      } else {
        gsap.from(".crew-img", {
          y: -200,
          opacity: 0,
          duration: 0.8,
          ease: "power.out",
        });
        gsap.from(".crew-detail", {
          y: 200,
          opacity: 0,
          duration: 0.8,
        });
      }
    }
  }, [currCrew]);
  useEffect(() => {
    if (!isLoading) {
      if (window.innerWidth >= 1024) {
        gsap.from(".crew-img", {
          opacity: 0,
          y: 200,
          delay: 1,
          duration: 0.8,
        });
        gsap.from(".crew-detail", {
          x: -200,
          opacity: 0,

          duration: 0.8,
        });
        gsap.from(".crew-pag-btn", {
          opacity: 0,

          delay: 1,
          stagger: 0.2,
        });
        gsap.from(".meet-crew", {
          x: -100,
          opacity: 0,
        });
      } else if (window.innerWidth >= 768) {
        gsap.from(".crew-img", {
          opacity: 0,
          delay: 1.8,
          duration: 0.8,
        });
        gsap.from(".crew-detail", {
          y: -200,
          opacity: 0,

          duration: 0.8,
        });
        gsap.from(".crew-pag-btn", {
          opacity: 0,

          delay: 1,
          stagger: 0.2,
        });
        gsap.from(".meet-crew", {
          x: -100,
          opacity: 0,
        });
      } else {
        gsap.from(".crew-img", {
          y: -200,
          opacity: 0,
          delay: .5,
          duration: 0.8,
          ease: "back",
        });
        gsap.from(".crew-detail", {
          y: 200,
          opacity: 0,
          delay: 2,
          duration: 0.8,
        });
        gsap.from(".crew-pag-btn", {
          opacity: 0,

          delay: 1.3,
          stagger: 0.2,
        });
        gsap.from(".meet-crew", {
          x: -100,
          opacity: 0,
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
            <h4 className="meet-crew text-white text-center md:text-left mt-5 md:mt-10 lg:m-0 uppercase font-barlow">
              <span className="font-bold mr-4 opacity-50">02</span>Meet Your
              Crew
            </h4>
            <section
              className="mt-14 md:my-0 md:max-w-lg mx-auto lg:ml-auto 
            lg:max-w-5xl md:flex md:flex-col lg:flex lg:flex-row
             lg:justify-between lg:gap-10 lg:my-0 lg:items-center"
            >
              <div className="crew-img px-20 md:mt-14 md:px-20 sm:px-32 lg:m-0 lg:p-0 lg:flex-1 md:order-2">
                <img
                  className="mx-auto lg:m-0 lg:w-full lg:h-full"
                  src={currCrew.images.png}
                  alt=""
                />
              </div>
              <hr className="my-0 opacity-30 md:hidden" />
              <div
                className="mt-10 md:m-0  lg:flex-1
               md:flex md:flex-col md:order-1
              "
              >
                <div
                  className="flex items-center justify-center  
                lg:justify-start md:order-2 lg:my-10"
                >
                  {crew.map((person, i) => {
                    return (
                      <button
                        key={i}
                        onClick={() => handleCrewChange(i)}
                        className={`crew-pag-btn ml-5 first:ml-0 ${
                          currCrew.name === person.name &&
                          " active-crew-pag-btn"
                        }`}
                      ></button>
                    );
                  })}
                </div>
                <div className="crew-detail my-8 md:order-1">
                  <div className="text-center mt-7 lg:text-left">
                    <h5 className="font-bellefair text-white opacity-30 uppercase">
                      {currCrew.role}
                    </h5>
                    <h4 className="uppercase lg:text-56">{currCrew.name}</h4>
                    <p className="mt-2 lg:pr-32 lg:text-lg">{currCrew.bio}</p>
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

export default Crew;
