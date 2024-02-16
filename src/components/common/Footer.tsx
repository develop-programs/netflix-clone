import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="w-full mx-auto pt-6">
      <div className="container max-w-7xl space-y-4">
        <div className="w-full flex gap-1 text-xs md:text-base items-center">
          Questions? Call
          <Button variant="link" size="sm">
            <Link href="#">000-800-919-1694</Link>
          </Button>
        </div>
        <div className="w-full grid grid-flow-row grid-cols-2 md:grid-cols-4 gap-4 md:gap-12">
          <div className="flex flex-col items-start">
            <Button
              variant="link"
              size="default"
              asChild
              className="text-xs font-normal"
            >
              <Link href="#">FAQ</Link>
            </Button>
            <Button
              variant="link"
              size="default"
              asChild
              className="text-xs font-normal"
            >
              <Link href="#">Investor Relations</Link>
            </Button>
            <Button
              variant="link"
              size="default"
              asChild
              className="text-xs font-normal"
            >
              <Link href="#">Privacy</Link>
            </Button>
            <Button
              variant="link"
              size="default"
              asChild
              className="text-xs font-normal"
            >
              <Link href="#">Speed Test</Link>
            </Button>
          </div>
          <div className="flex flex-col items-start text-xs">
            <Button
              variant="link"
              size="default"
              asChild
              className="text-xs font-normal"
            >
              <Link href="#">Help Center</Link>
            </Button>
            <Button
              variant="link"
              size="default"
              asChild
              className="text-xs font-normal"
            >
              <Link href="#">Jobs</Link>
            </Button>
            <Button
              variant="link"
              size="default"
              asChild
              className="text-xs font-normal"
            >
              <Link href="#">Cookies Preferences</Link>
            </Button>
            <Button
              variant="link"
              size="default"
              asChild
              className="text-xs font-normal"
            >
              <Link href="#">Legal Notices</Link>
            </Button>
          </div>
          <div className="flex flex-col items-start text-xs">
            <Button
              variant="link"
              size="default"
              asChild
              className="text-xs font-normal"
            >
              <Link href="#">Account</Link>
            </Button>
            <Button
              variant="link"
              size="default"
              asChild
              className="text-xs font-normal"
            >
              <Link href="#">Ways to Watch</Link>
            </Button>
            <Button
              variant="link"
              size="default"
              asChild
              className="text-xs font-normal"
            >
              <Link href="#">Corporate Information</Link>
            </Button>
            <Button
              variant="link"
              size="default"
              asChild
              className="text-xs font-normal"
            >
              <Link href="#">Only on Netflix</Link>
            </Button>
          </div>
          <div className="flex flex-col items-start text-xs">
            <Button
              variant="link"
              size="default"
              asChild
              className="text-xs font-normal"
            >
              <Link href="#">Media Centre</Link>
            </Button>
            <Button
              variant="link"
              size="default"
              asChild
              className="text-xs font-normal"
            >
              <Link href="#">Terms of Use</Link>
            </Button>
            <Button
              variant="link"
              size="default"
              asChild
              className="text-xs font-normal"
            >
              <Link href="#">Contact Us</Link>
            </Button>
          </div>
        </div>
        <div>
          <Select>
            <SelectTrigger
              className="w-[130px] bg-black hidden md:flex"
              aria-label="Select Language"
            >
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-languages"
                >
                  <path d="m5 8 6 6" />
                  <path d="m4 14 6-6 2-3" />
                  <path d="M2 5h12" />
                  <path d="M7 2h1" />
                  <path d="m22 22-5-10-5 10" />
                  <path d="M14 18h6" />
                </svg>
                <SelectValue placeholder="English" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="English">English</SelectItem>
              <SelectItem value="Hindi">Hindi</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="text-xs md:text-sm">Netflix Clone</div>
        <div className="w-full text-center text-base text-muted-foreground">
          © 2024 Shreyansh Awadhiya Netflix Clone. All rights reserved.
        </div>
      </div>
    </div>
  );
}
