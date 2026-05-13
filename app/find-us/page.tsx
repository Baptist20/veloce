import Image from "next/image";
import React from "react";
import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";

export default function page() {
  return (
    <>
      <Navbar />

      <div className="flex flex-col items-center py-30 px-5 gap-2 md:px-10 md:flex-row md:justify-cente lg:justify-center relative h-screen w-full">
        <Image
          src={"/find-us-background-image.webp"}
          className="z-0 object-cover"
          fill
          alt="find us background image"
        />

        <div className="relative flex flex-col items-center pt-8 px-6 gap-12.5 bg-white z-20">
          <p className="font-bold text-[13px] leading-3.5 text-center w-full tracking-tighter uppercase md:text-[14px] md:leading-3.75 lg:text-[15px] lg:tracking-4.25">
            Our Stock lists
          </p>

          <div className="flex flex-col items-start md:px-16 w-full">
            <div className="flex items-start pt-5 pb-10 justify-between w-full border-t border-black ">
              <p className="font-bold text-[13px] leading-3.5 tracking-tighter uppercase md:text-[14px] md:leading-3.75 lg:text-[15px] lg:leading-4.25 w-1/2">
                usa
              </p>

              <p className="font-bold text-[13px] leading-3.5 tracking-tighter uppercase md:text-[14px] md:leading-3.75 lg:text-[15px] lg:leading-4.25 w-1/2">
                The Artisanal Grocer Hello@figma.com 415-123-4567
              </p>
            </div>
            <div className="flex items-start pt-5 pb-10 justify-between w-full border-t border-black ">
              <p className="font-bold text-[13px] leading-3.5 tracking-tighter uppercase md:text-[14px] md:leading-3.75 lg:text-[15px] lg:leading-4.25 w-1/2">
                europe
              </p>

              <p className="font-bold text-[13px] leading-3.5 tracking-tighter uppercase md:text-[14px] md:leading-3.75 lg:text-[15px] lg:leading-4.25 w-1/2">
                le marche bio yourgmail@gmail.com
              </p>
            </div>
            <div className="flex items-start pt-5 pb-10 justify-between w-full border-t border-black ">
              <p className="font-bold text-[13px] leading-3.5 tracking-tighter uppercase md:text-[14px] md:leading-3.75 lg:text-[15px] lg:leading-4.25 w-1/2">
                asia
              </p>

              <p className="font-bold text-[13px] leading-3.5 tracking-tighter uppercase md:text-[14px] md:leading-3.75 lg:text-[15px] lg:leading-4.25 w-1/2">
                kurashi & co. yourgmail@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
