import Link from "next/link";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function WelcomeNav() {
  return (
    <div className="absolute top-0 left-0 w-full flex justify-between z-50 items-center px-2 md:px-4 xl:px-[14rem] pt-6">
      <div>
        <svg
          width="2500"
          height="678"
          viewBox="0 0 2500 678"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-24 h-12 md:w-32 md:h-[2.5rem]  xl:w-[9.25rem] xl:h-[2.5rem]"
        >
          <path
            d="M2133.79 634.889C2168.6 638.263 2203.38 641.887 2238.09 645.636L2314.71 456.432L2387.55 663.088C2424.92 667.77 2462.27 672.685 2499.51 677.817L2371.82 315.429L2499.55 2.83263e-05H2391.37L2390.25 1.54951L2321.24 171.951L2260.66 0.02502H2153.85L2264.12 312.963L2133.8 634.889H2133.79ZM2053.01 627.475V2.83263e-05H1946.24V618.67C1981.85 621.419 2017.48 624.376 2053.01 627.475ZM1250.94 592.387C1279.77 592.387 1308.56 592.603 1337.3 592.837V362.313H1465.56V264.146H1337.3V98.2841H1485.03V2.83263e-05H1230.12V592.47C1237.04 592.47 1243.99 592.362 1250.94 592.387ZM919.435 598.385C955.006 597.119 990.611 596.052 1026.27 595.186V98.3007H1126.07V0.02502H819.635V98.3007H919.451V598.385H919.435ZM102.839 664.546V290.712L229.264 649.451C268.143 645.086 307.08 640.979 346.125 637.097V0.0083589H243.676V387.238L107.254 0.0083589H0.414795V677.983H1.05625C34.9033 673.302 68.8671 668.853 102.839 664.546ZM716.677 98.2757V0.0083589H461.737V626.475C546.558 619.153 631.477 613.013 716.469 608.057V509.697C667.185 512.563 618.001 515.862 568.934 519.536V362.355H697.2V264.129H568.934V98.2757H716.677ZM1696.64 504.999V-0.0249634H1589.4V598.743C1674.7 601.875 1759.67 606.24 1844.36 611.739V513.321C1795.21 510.147 1745.98 507.398 1696.64 504.999Z"
            fill="#FF0000"
          />
        </svg>
      </div>
      <div className="flex items-center gap-4">
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
        <Link href="/SignIn">
          <Button
            variant="destructive"
            size="default"
            className="px-5 font-semibold bg-[rgba(255,0,0,0.68)] hover:bg-[rgba(255,0,0,0.5)]/90"
          >
            Sign In
          </Button>
        </Link>
      </div>
    </div>
  );
}
