import { SKILLS_TECH } from "@/constants";
import { skills } from "@/constants/skills";
import React from "react";
import { BiSolidBadgeCheck } from "react-icons/bi";

const Skills = () => {
  return (
    <section className="my-6 mb-40">
      <p className="text-5xl font-extrabold text-center  text-primary">
        Skills
      </p>
      <p className="text-lg font-medium text-center text-gray-700">
        My Technical Knowledge
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-full gap-4 ease-in-out duration-300 my-10">
        {SKILLS_TECH.map((skill) => (
          <div
            key={skill.role}
            className="flex flex-col p-4 border rounded-md shadow-md space-y-4 "
          >
            <h3 className=" h-auto font-semibold text-lg text-gray-900">
              {skill.role}
            </h3>
            <div className="flex flex-wrap gap-y-2 items-center ">
              {skill.techs.map((tech) => (
                <span
                  key={tech}
                  className="basis-1/2 flex items-center justify-center space-x-1"
                >
                  <BiSolidBadgeCheck className="text-primary h-4 w-4" />
                  <p className="text-sm w-full ">{tech}</p>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
