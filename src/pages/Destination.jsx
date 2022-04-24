import React from "react";
import { useEffect, useState } from "react";
import gsap from "gsap";
const Destination = () => {
  const [destins, setDestins] = useState([]);
  const [currDestin, setCurrDestin] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const getData = async () => {
    const res = await fetch("data.json");
    const data = await res.json();

    setDestins(data.destinations);
    setCurrDestin(data.destinations[0]);
    setIsLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);

  const handleDestinChange = (i) => {
    setCurrDestin(destins[i]);
  };
  useEffect(() => {
    if (!isLoading) {
      gsap.from(".destin-img", {
        y: -200,
        opacity: 0,
        duration: 0.8,
        ease: "back",
      });
      gsap.from(".destin-detail", {
        y: 200,
        opacity: 0,
        duration: 0.8,
      });
    }
  }, [currDestin]);
  useEffect(() => {
    if (!isLoading) {
      gsap.from(".destin-img", {
        y: -200,
        opacity: 0,
        delay: 0.5,
        duration: 0.8,
        ease: "back",
      });
      gsap.from(".destin-detail", {
        y: 200,
        opacity: 0,
        delay: 1.8,
        duration: 0.8,
      });
      gsap.from('.destin-btn', {
        opacity: 0,
        y: -10,
        delay: 1,
        stagger: .2
      })
      gsap.from(".pick-destin", {
        x: -100,
        opacity: 0
      });
    }
  }, [isLoading]);
  const handleBgChange = () => {
    if (window.innerWidth >= 768 && window.innerWidth < 1024) {
      document.body.style.backgroundImage =
        "url(assets/destination/background-destination-tablet.jpg)";
    } else if (window.innerWidth >= 1024) {
      document.body.style.backgroundImage =
        "url(assets/destination/background-destination-desktop.jpg)";
    } else {
      document.body.style.backgroundImage =
        "url(assets/destination/background-destination-mobile.jpg)";
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
      {isLoading ? (
        <div className="fixed text-5xl inset-0 grid place-items-center text-white">
          Loading...
        </div>
      ) : (
        <main>
          <div className="wrapper">
            <h4 className="pick-destin text-white text-center md:text-left mt-5 md:mt-10 lg:m-0 uppercase font-barlow">
              <span className="font-bold mr-4 opacity-50">01</span>Pick Your
              Destination
            </h4>
            <section
              className="mt-14 md:max-w-xl mx-auto lg:ml-auto 
            lg:max-w-5xl lg:flex lg:items-center
             lg:justify-between lg:gap-48 lg:mb-14"
            >
              <div className="destin-img px-20 sm:px-32 lg:p-0 lg:flex-1 ">
                <img
                  className="mx-auto lg:m-0 lg:w-full lg:h-full"
                  src={currDestin.images.png}
                  alt=""
                />
              </div>
              <div className="mt-7 md:mt-12 lg:m-0 lg:flex-1">
                <div className="flex items-center justify-center">
                  {destins.map((destin, i) => {
                    return (
                      <button
                        onClick={() => handleDestinChange(i)}
                        tabIndex={0}
                        key={i}
                        className={`destin-btn ml-10 first:ml-0 ${
                          currDestin.name === destin.name && "active-destin"
                        }`}
                      >
                        <h5>{destin.name}</h5>
                      </button>
                    );
                  })}
                </div>
                <div className="destin-detail">
                  <div className="text-center mt-7">
                    <h2 className="uppercase">{currDestin.name}</h2>
                    <p>{currDestin.description}</p>
                  </div>
                  <hr className="my-10 opacity-30" />
                  <div className="md:flex items-center justify-around">
                    <div className="text-center">
                      <p className="uppercase text-18">avg. distance</p>
                      <h4 className="uppercase">{currDestin.distance}</h4>
                    </div>
                    <div className="text-center my-6 md:m-0">
                      <p className="uppercase text-18">est. travel time</p>
                      <h4 className="uppercase">{currDestin.travel}</h4>
                    </div>
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

export default Destination;
