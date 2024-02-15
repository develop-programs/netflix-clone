"use client";
import React from "react";
import data from "@/data/SampleData.json";
import { Button } from "../ui/button";

export default function Accordian() {
  const [show, setShow] = React.useState(-1);

  const toggleShow = (idk: number) => {
    if (show === idk) {
      setShow(-1);
    } else {
      setShow(idk);
    }
  };

  return (
    <div className="w-full mt-12">
      {data.map((item, index) => {
        return (
          <div className="w-full py-1" key={index}>
            <div
              className="flex justify-between items-center w-full cursor-pointer bg-[rgb(45,45,45)] hover:bg-[rgb(82,82,82)] px-4 py-6 duration-500"
              onClick={() => toggleShow(index)}
            >
              <p className="text-lg lg:text-2xl font-medium">{item.title}</p>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => toggleShow(index)}
                className={`${
                  show == index ? "-rotate-45" : "rotate-0"
                } duration-500 ease-linear hover:bg-transparent`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </Button>
            </div>
            <div
              className={`w-full ${
                show === index ? "block" : "hidden"
              } bg-[rgb(45,45,45)] px-4 py-4 mt-1`}
            >
              <span className="text-2xl font-normal">
                {item?.content1}
                <br />
                <br />
                {item?.content2}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
