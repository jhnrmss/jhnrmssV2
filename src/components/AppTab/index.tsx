"use client";
import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

export type TabsType = {
  label: string;
  value: string;
};

interface TabsProps {
  options: TabsType[];
  onChange: (value: string) => void;
}
const Tabs = ({ options, onChange }: TabsProps) => {
  const [selected, setSelected] = useState<string>(options[0].value);

  useEffect(() => {
    onChange && onChange(selected);
  }, [onChange, selected]);

  return (
    <div className="p-6">
      <ul className="list-none flex md:flex-col flex-row">
        {options.map(({ label, value }, index) => (
          <li
            key={label + index}
            onClick={() => setSelected(value)}
            className={twMerge(
              selected === value
                ? " border-primary bg-gray-100 ease-out duration-100"
                : "",
              "px-4 py-2 md:border-b-0 border-l-0 md:border-l-4 border-b-4 max-w-full cursor-pointer"
            )}
          >
            <p
              onClick={() => setSelected(value)}
              className={twMerge(
                selected === value
                  ? " text-primary font-bold "
                  : "text-gray-600 font-medium",
                "text-base "
              )}
            >
              {label}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tabs;
