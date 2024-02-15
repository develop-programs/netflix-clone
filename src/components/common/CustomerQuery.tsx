import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Accordian from "./Accordian";

export default function CustomerQuery() {
  return (
    <div className="grid">
      <div className="text-center">
        <span className="text-[32px] lg:text-5xl font-bold lg:font-black tracking-normal leading-10 ">
          Frequently Asked Question
        </span>
      </div>
      <Accordian />
      <div className="mt-4 lg:mt-10 grid place-content-center gap-4">
        <span className="text-lg lg:text-xl font-normal">
          Ready to watch? Enter your email to create or restart your membership.
        </span>
        <div className="grid md:flex gap-3">
          <Input
            placeholder="Email address"
            className="bg-black bg-opacity-35 text-lg placeholder:text-stone-300 border-stone-300 py-7"
          />
          <Button
            variant="default"
            size="default"
            className="bg-red-700 hover:bg-red-600 text-white text-2xl py-7"
          >
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
          </Button>
        </div>
      </div>
    </div>
  );
}
