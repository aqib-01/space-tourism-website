import React from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useEffect } from "react";
const Intro = () => {
  useEffect(() => {
    let homeTl = gsap.timeline();
    
    homeTl
      .from(".want-to-text", {
        y: -200,
        opacity: 0,
        ease: "power",
      }).from('.face-it-text', {
        x: -200,
        opacity: 0,
        ease: "power"
      }, "<")
      .from(".space-text span", {
        stagger: 0.15,
        opacity: 0,
      });
      homeTl.from("#explore-btn", {
        y: -100,
        rotateY: 360,
        opacity: 0
      })
  }, []);
  return (
    <main>
      <div className="wrapper lg:flex lg:items-center lg:justify-between lg:mt-12">
        <div className="md:max-w-md md:mx-auto mt-14 md:mt-20 lg:m-0">
          <h5 className="want-to-text uppercase text-center lg:text-left">
            so, you want to travel to
          </h5>
          <h1 className="space-text uppercase text-center lg:text-left">
            <span>s</span>
            <span>p</span>
            <span>a</span>
            <span>c</span>
            <span>e</span>
          </h1>
          <p className="face-it-text text-center lg:text-left">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <Link to={"/destinations"}>
          <button
            id="explore-btn"
            className="uppercase px-10 py-20 mx-auto block
         text-dark-blue text-32 my-20 transition-shadow 
         bg-white  rounded-full lg:m-0 lg:self-end"
          >
            Explore
          </button>
        </Link>
      </div>
    </main>
  );
};

export default Intro;
