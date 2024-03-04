import { AppScroll } from "@/components";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="flex h-screen mt-8 md:mt-0 w-full justify-center items-center md:transform md:-translate-y-[100px]">
      <div className="grid grid-cols-1 md:grid-cols-2 h-full ease-in-out duration-300 ">
        <div className=" flex flex-col justify-center items-center h-full w-full">
          <div className="space-y-4">
            <p className="text-lg font-medium">Hi, my name is</p>
            <p className="text-5xl font-extrabold text-primary">
              John Romie Reyes.
            </p>
            <p className="relative flex items-center px-0 w-full text-lg whitespace-nowrap before:block before:relative before:top-[3px] before:w-[140px] before:h-[1px] before:mr-5 before:bg-primary before:lg:w-[120px] before:md:w-[100px] before:sm:mr-2.5">
              Software Engineer
            </p>
            <p className="text-base">
              I create web-based projects that leads to the success of the
              overall product.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center mt-6 lg:mt-0">
          <img
            src="/static/background.png"
            alt="Programming"
            className="w-auto h-auto"
          />
        </div>
        <AppScroll />
      </div>
    </section>
  );
};

export default Hero;
