import { MoviesData } from "@/lib/axios/ApiData";
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

export async function FetchData(params: string) {
  const res = await axiosInstance(params);
  return res.data.results[
    Math.floor(Math.random() * res.data.results.length - 1)
  ];
}

export default async function page() {
  const data = await FetchData(MoviesData.trending);
  return (
    <div>
      <div className="relative">
        <Navbar />
        <Banner data={data} />
      </div>
      <Card URl={MoviesData.Action} title="Action" />
      <Card URl={MoviesData.Family} title="Family" />
      <Card URl={MoviesData.Comedy} title="Comedy" />
      <Card URl={MoviesData.SciFi} title="Sci-Fi" />
      <Card URl={MoviesData.Fantasy} title="Fantasy" />
      <Card URl={MoviesData.Thriller} title="Thriller" />
    </div>
  );
}
