"use client";

import { staatlichesFont } from "@/utils/fonts";
import Navbar from "../_components/Navbar";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Footer from "../_components/Footer";

export default function About() {
  const pathname = usePathname();

  return (
    <div>
      <Navbar />
      {/* HERO */}
      <div className={`w-full pt-12.5 px-7.5 pb-25  bg-black`}>
        <div className="flex flex-col items-center gap-10.25">
          <span className="font-bold text-[13px] leading-3.5 tracking-tighter uppercase md:text-[14px] md:leading-[3.75] lg:leading-4.25 text-white">
            {pathname}
          </span>

          <p
            className={`${staatlichesFont.className} text-[40px] leading-11 tracking-[-0.005em] text-center text-white md:text-[50px] md:leading-13.75 md:tracking-[-0.01em] lg:text-[60px]`}
          >
            veloce represents a new era of the aperitif, where flavor and
            functionality converge in a beautifully crafted, alcohol-free
            beverage.
          </p>
        </div>
      </div>
      {/* MAIN */}

      <main className="w-full ">
        {/* FOUNDATION SECTION */}

        <div className="flex flex-col-reverse lg:flex-row w-full ">
          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-between py-10 px-7.5 bg-[#CD9D65] w-full lg:w-1/2">
            <p className="font-bold text-[13px] leading-3.5 tracking-tighter uppercase md:text-[14px] md:leading-3.75 lg:leading-4.25">
              Recognition
            </p>

            <ul className="flex flex-col items-start md:justify-center lg:items-start ">
              <li className="flex flex-col justify-between pt-5 pb-2.5 w-full border-b border-black md:flex-row md:items-center md:pt-4 md:pb-2.5">
                <span className="font-bold text-[13px] leading-3.5 tracking-tighter uppercase md:leading-3.75 lg:text-[15px] lg:leading-4.25">
                  2025
                </span>

                <p
                  className={`${staatlichesFont.className} text-2xl leading-8 uppercase`}
                >
                  Best Botanical Blend
                </p>
              </li>
              <li className="flex flex-col justify-between pt-5 pb-2.5 w-full border-b border-black md:flex-row md:items-center md:pt-4 md:pb-2.5">
                <span className="font-bold text-[13px] leading-3.5 tracking-tighter uppercase md:leading-3.75 lg:text-[15px] lg:leading-4.25">
                  2025
                </span>

                <p
                  className={`${staatlichesFont.className} text-2xl leading-8 uppercase`}
                >
                  gold medal - bittersweet category
                </p>
              </li>
              <li className="flex flex-col justify-between pt-5 pb-2.5 w-full border-b border-black md:flex-row md:items-center md:pt-4 md:pb-2.5">
                <span className="font-bold text-[13px] leading-3.5 tracking-tighter uppercase md:leading-3.75 lg:text-[15px] lg:leading-4.25">
                  2024
                </span>

                <p
                  className={`${staatlichesFont.className} text-2xl leading-8 uppercase`}
                >
                  Best sustainable package
                </p>
              </li>
              <li className="flex flex-col justify-between pt-5 pb-2.5 w-full border-b border-black md:flex-row md:items-center md:pt-4 md:pb-2.5">
                <span className="font-bold text-[13px] leading-3.5 tracking-tighter uppercase md:leading-3.75 lg:text-[15px] lg:leading-4.25">
                  2024
                </span>

                <p
                  className={`${staatlichesFont.className} text-2xl leading-8 uppercase`}
                >
                  eco-friendly brand of the year
                </p>
              </li>
              <li className="flex flex-col justify-between pt-5 pb-2.5 w-full border-b border-black md:flex-row md:items-center md:pt-4 md:pb-2.5">
                <span className="font-bold text-[13px] leading-3.5 tracking-tighter uppercase md:leading-3.75 lg:text-[15px] lg:leading-4.25">
                  2023
                </span>

                <p
                  className={`${staatlichesFont.className} text-2xl leading-8 uppercase`}
                >
                  editor's choice - best apertif
                </p>
              </li>
              <li className="flex flex-col justify-between pt-5 pb-2.5 w-full border-b border-black md:flex-row md:items-center md:pt-4 md:pb-2.5">
                <span className="font-bold text-[13px] leading-3.5 tracking-tighter uppercase md:leading-3.75 lg:text-[15px] lg:leading-4.25">
                  2023
                </span>

                <p
                  className={`${staatlichesFont.className} text-2xl leading-8 uppercase`}
                >
                  most elegant bottle design
                </p>
              </li>
              <li className="flex flex-col justify-between pt-5 pb-2.5 w-full border-b border-black md:flex-row md:items-center md:pt-4 md:pb-2.5">
                <span className="font-bold text-[13px] leading-3.5 tracking-tighter uppercase md:leading-3.75 lg:text-[15px] lg:leading-4.25">
                  2022
                </span>

                <p
                  className={`${staatlichesFont.className} text-2xl leading-8 uppercase`}
                >
                  Best low & no alcohol bevearge
                </p>
              </li>
            </ul>
          </div>
          {/* RIGHT CONTENT */}

          <div className="relative w-full flex flex-col p-4 h-screen justify-end lg:w-1/2">
            {/* BACKGROUND IMAGE */}
            <Image
              src={"/man-mixing-drinks.png"}
              fill
              alt="man mixing drinks"
              className="object-cover z-0"
            />

            <div className="flex flex-col items-center p-4 gap-2 bg-black/40 rounded-2xl lg:items-start overflow-hidden z-10 text-white">
              <button className="py-1.75 px-6.75 text-center isolate rounded-2xl border-white border">
                FOUNDER
              </button>

              <span
                className={`${staatlichesFont.className} text-[100px] leading-20 text-center tracking-[0.01em] md:text-[130px] md:leading-26 lg:text-[150px] lg:leading-30 uppercase`}
              >
                Mike vera
              </span>
              <Image
                src={"/decorative-border-lg.png"}
                alt="decorative border"
                height={32}
                width={576}
                className="w-full bg-white"
              />
            </div>
          </div>
        </div>
        {/* CONTACT INFO */}

        <div className="flex flex-col items-center lg:flex-row w-full h-screen">
          {/* BACKGROUND IMAGE */}

          <div className="relative w-full h-full lg:w-1/2">
            <Image
              src={"/image-2.png"}
              alt="facility picture"
              fill
              className="md:hidden"
            />
            <Image
              src={"/image-1.png"}
              alt="facility picture"
              fill
              className="lg:hidden"
            />
            <Image
              src={"/image.png"}
              alt="facility picture"
              fill
              className="hidden lg:block"
            />
          </div>

          {/* TEXT BLOCK */}

          <div className="flex flex-col p-7.5 bg-black text-white justify-between w-full lg:w-1/2 h-full">
            {/* TOP BLOCK */}
            <div className="flex flex-col gap-6 items-start">
              <span className="font-bold text-[13px] leading-3.5 tracking-tighter uppercase text-white md:text-[14px] md:leading-3.75 lg:text-[15px] lg:leading-4.25">
                contact
              </span>
              <>
                <li className="flex justify-between items-center w-full">
                  <span
                    className={`${staatlichesFont.className} text-[22px] leading-8 tracking-[0.01em] text-white uppercase md:text-2xl lg:text-[30px] lg:leading-9.75`}
                  >
                    phone
                  </span>
                  <span
                    className={`${staatlichesFont.className} text-[22px] leading-8 tracking-[0.01em] text-white uppercase md:text-2xl lg:text-[30px] lg:leading-9.75`}
                  >
                    your number
                  </span>
                </li>
                <li className="flex justify-between items-center w-full">
                  <span
                    className={`${staatlichesFont.className} text-[22px] leading-8 tracking-[0.01em] text-white uppercase md:text-2xl lg:text-[30px] lg:leading-9.75`}
                  >
                    email
                  </span>
                  <span
                    className={`${staatlichesFont.className} text-[22px] leading-8 tracking-[0.01em] text-white uppercase md:text-2xl lg:text-[30px] lg:leading-9.75`}
                  >
                    your email
                  </span>
                </li>
                <li className="flex justify-between items-center w-full">
                  <span
                    className={`${staatlichesFont.className} text-[22px] leading-8 tracking-[0.01em] text-white uppercase md:text-2xl lg:text-[30px] lg:leading-9.75`}
                  >
                    social
                  </span>
                  <span
                    className={`${staatlichesFont.className} text-[22px] leading-8 tracking-[0.01em] text-white uppercase md:text-2xl lg:text-[30px] lg:leading-9.75`}
                  >
                    your handle
                  </span>
                </li>
              </>
            </div>
            {/* BOTTOM BLOCK */}
            <div className="text-center py-7.5 border-t border-white">
              <p
                className={`${staatlichesFont.className} text-[100px] leading-20 tracking-[0.01em] text-white uppercase md:text-[130px] md:leading-26 lg:text-[150px] lg:leading-30 `}
              >
                Est.2005
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
