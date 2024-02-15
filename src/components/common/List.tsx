"use client";
import { AddToList, RemoveFromList } from "@/services/Redux/Reducers/MyList";
import { AppDispatch } from "@/services/Redux/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/button";

export default function List(data: any) {
  const item = useSelector((state: any) => state.MyList.data);
  const dispatch = useDispatch<AppDispatch>();
  return item.map((item: any, index: any) => {
    console.log(item.id, data.data.id);

    item.id == data.data.id ? (
      <>

      </>
    ) : (
      <>
        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-transparent border border-white rounded-full"
          onClick={() => {
            dispatch(AddToList(data.data));
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
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </Button>
      </>
    );
  });
}
