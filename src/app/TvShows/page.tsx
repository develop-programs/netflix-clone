import { TvSeriesData } from "@/lib/axios/ApiData";
import { axiosInstance } from "@/lib/axios/fetch";
import React from "react";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("@/components/common/Navbar"), {
  ssr: false,
});

const Banner = dynamic(() => import("@/components/common/Banner"), {
  ssr: false,
});

const Card = dynamic(() => import("./(components)/Card"), { ssr: false });

 async function FetchData(params: string) {
  const res = await axiosInstance(params);
  return res.data.results[
    Math.floor(Math.random() * res.data.results.length - 1)
  ];
}

export default async function page() {
  const data = await FetchData(TvSeriesData.trending);
  return (
    <div>
      <div className="relative">
        <Navbar />
        <Banner data={data} />
      </div>
      <Card URl={TvSeriesData.ActionAdventure} title="Action & Adventure" />
      <Card URl={TvSeriesData.Animation} title="Animation" />
      <Card URl={TvSeriesData.Comedy} title="Comedy" />
      <Card URl={TvSeriesData.Family} title="Family" />
      <Card URl={TvSeriesData.SciFi} title="Sci-Fi" />
    </div>
  );
}
