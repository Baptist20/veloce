import { jaroFont } from "@/utils/fonts";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center lg:items-start">
      <div className="flex flex-col items-center pt-12.5 px-7.5 pb-25 md:p-7.5  lg:flex-row lg:justify-between lg:items-center lg:pt7.5 lg:px-7.5 lg:pb-0 w-full">
        <div className="flex flex-col justify-center items-center pb-12.5 gap-1.75 lg:pb-30 lg:items-start lg:w-1/2">
          <Link
            href={"/find-us"}
            className={`${jaroFont.className} text-[16px] leading-5.5 uppercase md:text-2xl md:leading-8.25 md:tracking-[-0.01em] lg:text-[26px] lg:leading-9`}
          >
            find stocklists
          </Link>
          <Link
            href={"/about"}
            className={`${jaroFont.className} text-[16px] leading-5.5 uppercase md:text-2xl md:leading-8.25 md:tracking-[-0.01em] lg:text-[26px] lg:leading-9`}
          >
            about
          </Link>
        </div>

        <div className="flex flex-col justify-center items-center pb-12.5 gap-1.75 lg:pb-30 lg:w-1/2 lg:items-start">
          <p
            className={`${jaroFont.className} text-[16px] leading-5.5 uppercase text-2xl md:leading-8.25 md:tracking-[-0.01em] lg:text-[26px] lg:leading-9 `}
          >
            (646) 555-4567
          </p>
          <p
            className={`${jaroFont.className} text-[16px] leading-5.5 uppercase text-2xl md:leading-8.25 md:tracking-[-0.01em] lg:text-[26px] lg:leading-9 `}
          >
            (646) 555-4567
          </p>
        </div>
      </div>

      {/* WORDMARK AND RIGHTS */}
      <div className="flex flex-col justify-center items-center px-7.5 pb-5 gap-5 lg:gap-4.25 lg:items-start">
        <Link
          href={"/"}
          className={`${jaroFont.className} text-[100px] leading-21 tracking-[0.01em] uppercase md:text-[240px] md:leading-50.5`}
        >
          veloce
        </Link>

        <p className="font-bold text-[14px] leading-4 tracking-tighter uppercase ">
          company name© 2025 All Rights Reserved
        </p>
      </div>

      <Image
        src={"/decorative-border-lg.png"}
        width={1440}
        height={32}
        className="w-full h-8"
        alt="decorative border"
      />
    </footer>
  );
}
