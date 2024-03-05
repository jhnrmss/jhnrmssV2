import { WORK_EXPERIENCE } from "@/constants";
import React from "react";
import { IoMdArrowDropright } from "react-icons/io";

const JobInfo = ({ value }: { value: string }) => {
  return (
    <div className="hover:border hover:shadow-md rounded-md p-6 ease-in duration-300">
      {WORK_EXPERIENCE.data
        .filter((val) => val.company === value)
        .map((val) => (
          <div
            key={val.company + "-" + val.title}
            className="flex flex-col gap-y-4"
          >
            <p className="text-base font-semibold ">
              {val.title}
              <a
                href="https://hoolisoftware.com/"
                className="text-primary hover:font-extrabold"
              >{` @${val.company}`}</a>
            </p>
            <p className="text-base  ">{val.started + " - " + val.ended}</p>
            <ul className="list-disc mx-6 marker:text-primary">
              {val.description.map((desc, index) => (
                <li key={val.company + `-${val.title}-desc-${index}`}>
                  <p className="text-base ">{desc}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
};

export default JobInfo;
