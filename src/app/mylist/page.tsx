import Navbar from "@/components/common/Navbar";
import React from "react";
import dynamic from "next/dynamic";

const MyList = dynamic(() => import("@/components/common/Mylist"), {
  ssr: false,
});

export default function page() {
  return (
    <div className="relative">
      <Navbar />
      <div className="absolute mt-24 px-12">
        <MyList />
      </div>
    </div>
  );
}
