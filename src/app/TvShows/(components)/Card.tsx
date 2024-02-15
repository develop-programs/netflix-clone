import Carousal from "@/components/common/Carousal";
import { axiosInstance } from "@/lib/axios/fetch";
import React from "react";

export async function FetchCardData(data: string) {
  const fetch = await axiosInstance(data);
  return fetch.data;
}

export default async function Card({ URl, title }: any) {
  const data = await FetchCardData(URl);
  return (
    <div className="w-full px-12 py-12">
      <div className="py-4">
        <span className="text-2xl font-bold px-4">{title}</span>
      </div>
      <Carousal data={data.results} />
    </div>
  );
}
