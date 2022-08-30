import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

import ButtonComponent from "./ButtonComponent";

const Header = () => {
  const [hamOpen, sethamOpen] = useState(false);

  const OpenHamburger = () => {
    sethamOpen((prev) => !prev);
  };

  const [stiHeader, setstiHeader] = useState(false);

  const stickyHeader = () => {
    window.scrollY >= 5 ? setstiHeader(true) : setstiHeader(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", stickyHeader);
  }, []);

  const navLinks = [
    { label: "Rates & Fees", link: "#comparison-section" },
    { label: "About Us", link: "#about-us" },
    { label: "Contact Us", link: "" },
  ];

  const router = useRouter();

  return (
    <header
      className={`py-2 pl-8 tab:py-6 bg-pri tab:px-12 z-[1] shadow-md ${
        stiHeader
          ? "sticky top-0 bg-white transition-all duration-300"
          : "transition-all duration-300"
      } flex justify-between items-center`}
    >
      <div className="max-w-7xl flex justify-between w-full mx-auto">
        <div className="h-8 w-24 relative">
          <h1
            className={`font-dm_serif font-bold text-3xl ${
              stiHeader ? "text-pri" : "text-white"
            } `}
          >
            Stablepay
          </h1>
        </div>
        <div
          className={`tab:flex tab:justify-center tab:items-center tab:font-semibold tab:gap-8 hidden ${
            stiHeader ? "tab:text-pri" : "tab:text-white"
          }`}
        >
          {navLinks.map((navLink, i) => (
            <a href={navLink.link} key={i}>
              {navLink.label}
            </a>
          ))}
        </div>
      </div>

      <svg
        className={`ham hamRotate ham8 tab:hidden z-50 mr-3 ${
          hamOpen ? "active" : null
        }`}
        onClick={OpenHamburger}
        viewBox="0 0 100 100"
        width="60"
      >
        <path
          className="line top"
          d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
        />
        <path className="line middle" d="m 30,50 h 40" />
        <path
          className="line bottom"
          d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
        />
      </svg>
      <div
        className={`fixed top-0 left-0 h-screen w-screen bg-black opacity-80 transition-all duration-300 tab:hidden ${
          hamOpen ? "block" : "hidden"
        }`}
      ></div>
      <div
        className={`${
          hamOpen ? "translate-x-0" : "translate-x-full"
        } tab:translate-x-full transition-all fixed right-0 top-0 bg-white px-10 h-screen w-64 flex justify-center items-start flex-col gap-4 z-10`}
      >
        {navLinks.map((navLink, i) => (
          <a
            className="hover:text-pri-dark transition-all flex justify-between w-full text-pri-dark"
            key={i}
            onClick={() => {
              router.push(navLink.link);
              sethamOpen(false);
            }}
          >
            {navLink.label}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;
