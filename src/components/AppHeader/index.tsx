import React from "react";

const AppHeader = () => {
  return (
    <div className="p-6 md:p-26 h-full w-full ease-in-out duration-300">
      <h1 className="text-sm md:text-base text-primary font-medium">
        Hi, my name is
      </h1>
      <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-slate-200">
        John Romie Reyes.
      </h2>
      <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-300">
        I create web-based projects.
      </h3>
      <p className="text-slate-300 text-sm md:text-base text-lg md:w-1/2  mt-4">
        I'm a Software Engineer living in the Philippines. specializing in
        building Web Applications that leads to the success of the overall
        product.
      </p>
    </div>
  );
};

export default AppHeader;
