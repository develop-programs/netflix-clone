"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "../ui/button";
import { AppDispatch } from "@/services/Redux/store";
import { CloseModal } from "@/services/Redux/Reducers/modal";
import Image from "next/image";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import Recommendation from "./Recommendation";

export default function Modal() {
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector((state: any) => state.Modal.data);
  const genre = useSelector((state: any) => state.Modal.genres);

  const Switch = useSelector((state: any) => state.Modal.Toggle);

  if (typeof document !== "undefined") {
    document.body.style.overflowY = Switch ? "hidden" : "auto";
  }
  function truncate(string: any, number: any) {
    return string?.length > number
      ? string.substr(0, number - 1) + "..."
      : string;
  }
  if (data.length === 0) {
    return null;
  }
  return (
    <div
      className={`fixed inset-0 h-full ${
        Switch ? "visible z-[10000000]" : "hidden"
      } bg-black backdrop-blur-md bg-opacity-30 mx-auto overflow-y-auto`}
    >
      <div className="relative container max-w-5xl bg-black h-auto mt-12 rounded-t-2xl p-0 shadow-sm shadow-white">
        <Button
          variant="ghost"
          size="icon"
          className="absolute hover:bg-transparent right-4 top-4 z-30"
          onClick={() => {
            dispatch(CloseModal());
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
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </Button>
        <div className="relative inset-0">
          <div className="absolute w-full h-full bg-black bg-opacity-60 rounded-t-2xl"></div>
          <Image
            src={`https://image.tmdb.org/t/p/original${
              data?.backdrop_path || data.poster_path
            }`}
            alt="not found"
            width={500}
            height={500}
            className="w-full h-1/3 aspect-video object-cover rounded-t-2xl"
          />
          <div className="absolute bottom-0 h-3/4 w-full flex">
            <div className="flex-1 flex flex-col gap-3 ps-4 md:ps-24 md:pt-24">
              <span className="text-2xl md:text-4xl font-bold">
                {data.title || data.name || data.original_name}
              </span>
              <span className="w-full">{truncate(data.overview, 120)}</span>
              <div className="flex gap-4 md:mt-6">
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-transparent border border-white rounded-full flex justify-center items-center p-1"
                >
                  <svg
                    fill="none"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-12 h-12"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                    />
                  </svg>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-transparent border border-white rounded-full flex justify-center items-center p-1"
                >
                  <svg
                    fill="none"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-12 h-12"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </Button>
                <HoverCard>
                  <HoverCardTrigger>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="hover:bg-transparent border border-white rounded-full"
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
                          d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                        />
                      </svg>
                    </Button>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-auto -mt-24 flex gap-4 rounded-full p-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="hover:bg-transparent border border-white rounded-full"
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
                          d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54"
                        />
                      </svg>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="hover:bg-transparent border border-white rounded-full"
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
                          d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                        />
                      </svg>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="hover:bg-transparent border border-white rounded-full"
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
                          d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                        />
                      </svg>
                    </Button>
                  </HoverCardContent>
                </HoverCard>
              </div>
            </div>
            <div className="flex justify-end items-end pb-6 pe-6 xl:p-12">
              <span className="text-xl font-bold">
                {data.original_language}
              </span>
            </div>
          </div>
        </div>
        <div className="px-6 py-2 flex gap-2 items-center">
          <span className="text-lg font-bold">Released At:-</span>
          {data.release_date}
        </div>
        <div className="w-full flex flex-col md:flex-row gap-2 p-6">
          <div className="flex-1 flex flex-col gap-2">
            <span>Overview</span>
            <span>{data.overview}</span>
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <div>
              <span className="text-base font-bold">Genres</span>
              <div>{genre.map((item: any) => item.name).join(", ")}</div>
            </div>
            <div>
              <span className="text-base font-bold">Languages</span>
              <div>
                {data.spoken_languages
                  .map((item: any) =>
                    item.english_name ? item.english_name : item.name
                  )
                  .join(", ")}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full p-6 grid gap-6">
          <span className="text-xl font-bold">Recommendations</span>
          <div>
            <Recommendation />
          </div>
        </div>
      </div>
    </div>
  );
}
