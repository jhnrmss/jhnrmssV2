"use client";
import Tabs from "@/components/AppTab";
import React, { useState } from "react";
import JobInfo from "./JobInfo/index ";
import { WORK_EXPERIENCE } from "@/constants";

const Jobs = () => {
  const [value, setValue] = useState<string>(WORK_EXPERIENCE.data[0].company);

  const options = WORK_EXPERIENCE.data.map((val) => {
    return { label: val.company, value: val.company };
  });

  const handleChange = (value: string) => {
    setValue(value);
  };

  return (
    <section id="jobs" className="flow-root my-6 mb-40">
      <p className="text-5xl font-extrabold text-center  text-primary">
        Experience
      </p>
      <p className="text-lg font-medium text-center text-gray-700">
        My Job Experience
      </p>
      <div className="container flex justify-center items-center mx-auto my-10 px-10 md:px-16 lg:px-28">
        <div className="grid grid-cols-3 md:grid-cols-6">
          <div className="col-span-2">
            <Tabs options={options} onChange={handleChange} />
          </div>

          <div className="col-span-4">
            <JobInfo value={value} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jobs;
