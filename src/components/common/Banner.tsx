"use client";
import React from "react";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/services/Redux/store";
import { GetModalData, OpenModal } from "@/services/Redux/Reducers/modal";
import { GetRecommendationData } from "@/services/Redux/Reducers/Suggestion";

export default function Banner(data: any) {
  const dispatch = useDispatch<AppDispatch>();

  function truncate(string: any, number: any) {
    return string?.length > number
      ? string.substr(0, number - 1) + "..."
      : string;
  }

  function FetchData(type: any, id: any) {
    const Data = {
      movieType: type,
      id: id,
    };
    dispatch(OpenModal());
    dispatch(GetModalData(Data));
    dispatch(GetRecommendationData(Data));
  }

  if (data === undefined) {
    return null;
  }

  return (
    <div
      className="w-full h-[80vh]"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original${
          data?.data?.backdrop_path || data?.data?.poster_path
        }")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute w-full h-full bg-black bg-opacity-60"></div>
      <div className="absolute w-full h-3/4 bottom-0 flex">
        <div className="flex-1 flex flex-col gap-6 ms-24 pt-32">
          <span className="text-6xl font-black tracking-wide">
            {data.data.title || data.data.original_name}
          </span>
          <span className="text-lg">{truncate(data.data.overview, 150)}</span>
          <div className="flex gap-6 items-center">
            <Button className="text-2xl py-8 px-8 font-bold flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                />
              </svg>
              Play
            </Button>
            <Button
              className="text-2xl py-8 px-8 font-bold flex items-center gap-2"
              onClick={() => {
                FetchData(data.data.media_type, data.data.id);
              }}
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
                  d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                />
              </svg>
              More info
            </Button>
          </div>
        </div>
        <div className="flex-1 flex justify-end">
          <div className="mt-96 flex">
            <div className="w-2 h-16 bg-white"></div>
            <div className="w-32 h-16 bg-white bg-opacity-40 flex items-center text-black text-xl font-bold ps-6">
              U/A
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
