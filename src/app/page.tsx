import Banner1 from "@/components/banners/Banner1";
import Banner2 from "@/components/banners/Banner2";
import Banner3 from "@/components/banners/Banner3";
import Banner4 from "@/components/banners/Banner4";
import CustomerQuery from "@/components/common/CustomerQuery";
import Footer from "@/components/common/Footer";
import WelcomeNav from "@/components/common/WelcomeNav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div
        className="relative w-full h-[75vh]"
        style={{
          boxShadow: "0px 0px 150px 50px rgba(0,0,0,0.75) inset",
        }}
      >
        <WelcomeNav />
        <Image
          src="/bg.webp"
          alt="banner"
          width={2000}
          height={1000}
          className="w-full h-full object-cover aspect-video"
        />
        <div className="absolute inset-0 w-full h-full bg-black/50 grid place-content-center">
          <div className="grid text-center px-6 z-30">
            <span className="text-[32px] lg:text-5xl font-bold lg:font-black tracking-normal leading-10 ">
              The biggest Indian hits. Ready to watch here from ₹149.
            </span>
            <span className="text-lg lg:text-2xl font-normal mt-4">
              Join today. Cancel anytime.
            </span>
            <div className="mt-4 lg:mt-6 grid place-content-center gap-4">
              <span className="text-lg lg:text-xl font-normal">
                Ready to watch? Enter your email to create or restart your
                membership.
              </span>
              <div className="grid md:flex gap-3">
                <Input
                  placeholder="Email address"
                  className="bg-black bg-opacity-35 text-lg placeholder:text-stone-300 border-stone-300 py-7"
                />
                <Button
                  variant="default"
                  size="default"
                  className="bg-[rgb(255,0,0)] hover:bg-[rgba(255,0,0,0.9)] text-white text-2xl py-7"
                  asChild
                >
                  <Link href="/Home">
                    Get Started
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-auto border-b-8 border-stone-800 px-4 md:px-6 lg:px-4 xl:px-52 py-24">
        <Banner1 />
      </div>
      <div className="h-auto border-b-8 border-stone-800 px-4 md:px-6 lg:px-4 xl:px-52 py-24">
        <Banner2 />
      </div>
      <div className="h-auto border-b-8 border-stone-800 px-4 md:px-6 lg:px-4 xl:px-52 py-24">
        <Banner3 />
      </div>
      <div className="h-auto border-b-8 border-stone-800 px-4 md:px-14 lg:px-4 xl:px-52 py-24">
        <Banner4 />
      </div>
      <div className="h-auto border-b-8 border-stone-800 px-4 md:px-14 lg:px-4 xl:px-52 py-24">
        <CustomerQuery />
      </div>
      <Footer />
    </main>
  );
}
