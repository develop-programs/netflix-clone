import { TrendingData } from "@/lib/axios/ApiData";
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

export async function BannerData(props: string) {
  const result = await axiosInstance(props);
  return result.data.results[
    Math.floor(Math.random() * result.data.results.length - 1)
  ];
}

export default async function page() {
  const data = await BannerData(TrendingData.trending);
  return (
    <div>
      <div className="relative">
        <Navbar />
        <Banner data={data} />
      </div>
      <Card URl={TrendingData.Action} title="Action" />
      <Card URl={TrendingData.Advanture} title="Advanture" />
      <Card URl={TrendingData.Comedy} title="Comedy" />
      <Card URl={TrendingData.Sifi} title="Sifi" />
      <Card URl={TrendingData.Drama} title="Drama" />
      <Card URl={TrendingData.Thriller} title="Thriller" />
    </div>
  );
}
