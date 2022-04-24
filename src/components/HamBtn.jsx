import React from "react";
import gsap from "gsap";
import { useState, useEffect } from "react";
const HamBtn = ({ handleNavToggle, isNavOpen }) => {
  const [hamBtnAnim] = useState(gsap.timeline({ paused: true }));
  useEffect(() => {
    let btn = document.querySelector(".ham-btn");
    let bars = document.querySelectorAll(".bar");
    let barWidth = bars[0].offsetWidth;
    let barHeight = bars[0].offsetHeight;
    let gap = (btn.offsetHeight - barHeight * 3) / 2;
    gsap.defaults({ duration: 0.3 });
    hamBtnAnim
      .to(bars[1], {
        scaleX: 0,
        transformOrigin: "left",
        duration: 0.1,
      })
      .to(bars[0], {
        y: barHeight + gap,
      })
      .to(
        bars[2],
        {
          y: -(barHeight + gap),
        },
        "<"
      )
      .to(btn, {
        rotate: 180,
        duration: 0.2,
      })
      .to(bars[0], {
        rotate: 45,
      })
      .to(
        bars[2],
        {
          rotate: -45,
        },
        "<"
      )
      .reverse();
  }, []);
  const toggleBtn = () => {
    hamBtnAnim.reversed(!hamBtnAnim.reversed());
  };
  useEffect(() => {
    if (!isNavOpen) {
      hamBtnAnim.reversed(true);
    }
  }, [isNavOpen]);
  return (
    <button
      onClick={() => {
        toggleBtn();
        handleNavToggle();
      }}
      tabIndex={0}
      className="ham-btn mr-6 sm:mr-10 relative md:hidden z-50"
    >
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </button>
  );
};

export default HamBtn;
