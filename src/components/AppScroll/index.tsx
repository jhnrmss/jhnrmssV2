import React from "react";
import { FaArrowDown } from "react-icons/fa";

const Scroll = () => {
  return (
    <div className="absolute bottom-20 left-0 right-0 w-full hidden md:block">
      <a
        href="#about"
        className="flex justify-center items-center gap-2 text-gray-900"
      >
        <svg
          width="32px"
          height="32px"
          className="home__scroll-mouse"
          viewBox="0 0 247 390"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          style={{
            fillRule: "evenodd",
            clipRule: "evenodd",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: "1.5",
          }}
        >
          <path
            className="wheel animate-bounce"
            d="M123.359,159.775l0,72.843"
            style={{
              fill: "none",
              stroke: "#000",
              strokeWidth: "20px",
            }}
          ></path>
          <path
            id="mouse"
            d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
            style={{
              fill: "none",
              stroke: "#000",
              strokeWidth: "20px",
            }}
          ></path>
        </svg>
        <p className="font-bold text-base ">Scroll Down</p>
        <FaArrowDown className="pt-1 animate-bounce" />
      </a>
    </div>
  );
};

export default Scroll;
