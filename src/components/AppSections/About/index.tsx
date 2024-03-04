import { ABOUT_MORE } from "@/constants";
import React from "react";

const About = () => {
  return (
    <section id="about" className="my-6 mb-40">
      <p className="text-5xl font-extrabold text-center  text-primary">
        Get to know me!
      </p>
      <p className="text-lg font-medium text-center text-gray-700">
        My Technical Knowledge
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 h-full gap-8 ease-in-out duration-300 my-10">
        <div className="flex justify-center items-center mt-6 lg:mt-0">
          <div className="relative w-[310px] h-[310px]">
            <div className="absolute top-3 -right-1 w-[300px] h-[300px] border-4 border-primary rounded-md z-0" />
            <div className="bg-primary absolute top-1 left-1 hover:top-0 hover:left-0 w-[300px] h-[300px] rounded-md z-40 ease-in duration-100">
              <img
                src="/static/me.jpg"
                alt="Programming"
                className="rounded-md opacity-50 hover:opacity-100 ease-out duration-300"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-4 ">
          <div className="grid grid-cols-3 gap-2">
            {ABOUT_MORE.map((about) => (
              <div className="flex flex-col items-center gap-2 border shadow-sm px-3 py-3 rounded-md ">
                <about.Icon className="h-6 w-6" />
                <p className="text-sm">{about.Title}</p>
                <p className="text-xs">{about.Description}</p>
              </div>
            ))}
          </div>
          <p className="text-base ">
            I&apos;m a passionate software engineer with expertise in both
            frontend and backend development. I specialize in React.js, crafting
            engaging user interfaces and seamless user experiences and I thrive
            on turning ideas into elegant code. I love architecting robust APIs,
            optimizing performance, and ensuring data integrity using Golang.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
