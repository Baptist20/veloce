import { jaroFont, staatlichesFont } from "@/utils/fonts";
import Header from "./_components/Header";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  const productArray = [
    {
      productName: "lavande",
      description:
        "A delicate floral apertif with notes of lavender and chamomile",
      imgeUrl: "/lavande.png",
    },
    {
      productName: "primavera",
      description:
        "A refreshing and vibrant aperitif with bright citrus notes.",
      imgeUrl: "/primavera.png",
    },
    {
      productName: "spezia",
      description:
        "A bold, spiced aperitif featuring cardamom, ginger, and cinnamon.",
      imgeUrl: "/spezia.png",
    },
  ];
  return (
    <div>
      <Header />
      <main className="relative flex flex-col items-start">
        <div className="relative w-full h-135 overflow-hidden">
          <div className="z-20 relative flex flex-col items-start p-7.5 gap-15 w-full md:w-112.5 md:h-73.5 md:max-h-112.5 bg-[#CD9D65] lg:h-135 lg:w-135">
            <p
              className={`${staatlichesFont.className} text-[34px] md:text-[38px] md:leading-10.5 tracking-wide leading-9.5 lg:text-[42px] lg:leading-10.5`}
            >
              The only SPIRIT-FREE aperitif that tastes as good as it makes you
              feel.
            </p>
            <Link
              href={"/about"}
              className={`
                relative flex items-center justify-center isolate
                bg-[#0F0F0F] border-[1.3px] border-[#0F0F0F] rounded-full w-29.75 h-[37.6px] md:w-37.75 md:h-[48.6px] lg:w-39.75 lg:h-[51.6px] ${jaroFont.className}
                text-[#CD9D65] uppercase text-[16px] leading-none md:text-[24px] md:tracking-[-0.01em] lg:text-[26px] transition-transform active:scale-95 hover:brightness-110
                `}
            >
              <span className="z-10 pt-0.5">SHOP NOW</span>
            </Link>
          </div>
          <Image
            className="hidden md:block object-center w-auto h-auto"
            fill
            alt="main background image"
            src={"/main-background-image.png"}
          />
          <Image
            className="z-0 w-full md:hidden object-cover"
            src={"/main-background-image.png"}
            alt="main background image"
            height={200}
            width={200}
          />
        </div>
        <div className="flex flec-col items-center pt-7.5 px-5 pb-25 gap-12.5 w-full">
          <div className="flex flex-col items-start gap-12.5">
            <p
              className={`${staatlichesFont.className} text-[40px] md:text-[50px] lg:text-[60px] leading-12 tracking-wide`}
            >
              Véloce is the ZERO-PROOF aperitif for modern living, crafted with
              super herbs and nutraceuticals to elevate your well-being, without
              compromising the sophisticated ritual of the aperitif.
            </p>
            <Link
              href={"/about"}
              className={`py-[7.8px] px-6.5 isolate rounded-full ${jaroFont.className} text-[16px] leading-5.5  md:tracking-wide md:text-2xl md:leading-8.25 lg:leading-9 border hover:bg-black hover:text-white hover:border-white`}
            >
              ABOUT US
            </Link>
          </div>
        </div>
        {/* FEATURED PRODUCT */}
        <div className="relative flex flex-col items-center py-20 px-11 gap-2 md:py-23.5 lg:py-36.25 h-200 w-full">
          <Image
            className="z-0 object-cover"
            src={"/featured-products.png"}
            alt="featured product banner"
            fill
            quality={90}
          />

          <div className="z-20 flex flex-col justify-between items-center gap-8 md:items-start h-full md:h-auto md:mt-64">
            <span
              className={`${staatlichesFont.className} flex items-center justify-center w-28.75 h-11 border-white border rounded-full text-white lg:text-3xl md:text-2xl`}
            >
              NEW
            </span>

            <div className="flex flex-col justify-center items-center py-8.25 gap-2">
              <p
                className={`${staatlichesFont.className} text-[100px] leading-20 text-center tracking-wide md:text-[130px] md:leading-26 lg:text-[150px] lg:leading-37.5 text-white`}
              >
                PRIMAVERA
              </p>

              <p
                className={`${staatlichesFont.className} text-[22px] md:text-[24px] lg:text-[30px] text-center leading-8 lg:leading-9.75 tracking-wide text-white uppercase`}
              >
                {" "}
                A bold, spiced aperitif featuring cardamom, ginger, and
                cinnamon.
              </p>
            </div>
          </div>
        </div>
        {/* PRODUCT GRID */}
        <div className="grid lg:grid-cols-2 place-items-center w-full p-2.5 gap-25 md:py-7.5">
          {/* CARDS DIV */}

          {productArray.map((product) => (
            <div
              key={product.productName}
              className="flex flex-col items-start pb-12.5 gap-7.5 "
            >
              <div className="relative flex flex-col p-7.5 gap-2 w-full h-88.75 md:h-150">
                <Image
                  src={product.imgeUrl}
                  fill
                  alt={`${product.productName}`}
                  quality={80}
                  className="object-cover z-0"
                />
                <span
                  className={`${staatlichesFont.className} text-[32px] md:text-[38px] lg:text-[42px] leading-9.5 md:leading-10.5 lg:leading-11.5  tracking-wide z-20 text-white`}
                >
                  {product.productName}
                </span>
              </div>
              {/* BOTTOM TEXT */}
              <div className="flex flex-col items-start pr-15 gap-7.5">
                <p
                  className={`${staatlichesFont.className} text-[18px] leading-6.5 tracking-wide md:text-[20px] md:leading-6.75 lg:leading-6.5`}
                >
                  {product.description}
                </p>

                <span
                  className={`${staatlichesFont.className} text-[18px] leading-6.5 tracking-wide md:text-[20px] md:leading-6.75 uppercase lg:leading-6.5`}
                >
                  find near you
                </span>
              </div>
            </div>
          ))}
        </div>
        {/* FLAORS SECTION */}
        <section className="bg-[#CD9D65] flex flex-col justify-center items-start p-7.5 w-full h-screen">
          <p
            className={`${staatlichesFont.className} text-[100px] leading-20 tracking-wide uppercase md:text-[130px] md:leading-26 lg:text-[150px]  text-[#613B0F] w-full  `}
          >
            Lavande
          </p>
          <p
            className={`${staatlichesFont.className} text-[100px] leading-20 tracking-wide uppercase md:text-[130px] md:leading-26 lg:text-[150px] text-[#613B0F] w-full`}
          >
            spezia
          </p>
          <p
            className={`${staatlichesFont.className} text-[100px] leading-20 tracking-wide uppercase md:text-[130px] md:leading-26 lg:text-[150px] text-[#613B0F] w-full`}
          >
            primavera
          </p>
          <Link
            href={"/contact"}
            className={`${staatlichesFont.className} text-[100px] leading-20 tracking-wide uppercase md:text-[130px] md:leading-26 lg:text-[150px] text-black w-full`}
          >
            find us
          </Link>
        </section>
        {/* STOCKLIST SECTION */}
        <section className="flex flex-col w-full h-screen lg:flex-row uppercase">
          {/* RIGHT */}
          <div className="py-5.75 px-2.25 lg:flex-1">
            <p
              className={`${staatlichesFont.className} text-[32px] leading-9.5 tracking-wide md:text-[38px] md:leading-10.5 lg:text-[42px] lg:leading-11.5 uppercase`}
            >
              Experience the refined taste of Véloce. Visit our premium
              stockists for your next alcohol-free aperitif.
            </p>
          </div>
          {/* LEFT */}

          <div className=" relative flex-1 lg:flex-1 overflow-clip">
            <Image
              src={"/stocklist.png"}
              alt="stoclist picture"
              fill
              className="object-cover"
            />
          </div>
        </section>
        {/* FOOTER SECTION*/}
        <footer className="flex flex-col justify-center items-center lg:items-start bg-[#CD9D65] w-full">
          {/* TOP CONTENT */}
          <div className="flex flex-col items-start pt-12.5 px-7.5 pb-25 md:p-7.5 lg:flex-row lg:justify-between lg:pt-7.5 lg:px-7.5 lg:gap-127.5">
            {/* LEFT */}

            <div className="flex flex-col justify-center items-center pb-12.5 gap-[1.75] lg:pb-30 lg:items-start">
              <Link
                href={"/contact"}
                className={`${jaroFont.className} text-[16px] leading-5.5 uppercase md:text-[24px] md:leading-8.25 md:tracking-wide hover:border-b-black hover:border-b lg:text-[26px] lg:leading-9`}
              >
                find stocklist
              </Link>
              <Link
                href={"/contact"}
                className={`${jaroFont.className} text-[16px] leading-5.5 uppercase md:text-[24px] md:leading-8.25 md:tracking-wide hover:border-b-black hover:border-b lg:text-[26px] lg:leading-9`}
              >
                about
              </Link>
            </div>
            {/* RIGHT */}
            <div className="flex flex-col justify-center items-center pb-12.5 gap-[1.75] lg:pb-30 lg:items-start">
              <span
                className={`${jaroFont.className} text-[16px] leading-5.5 uppercase md:text-[24px] md:leading-8.25 md:tracking-wide hover:border-b-black hover:border-b lg:text-[26px] lg:leading-9`}
              >
                your number here
              </span>
              <span
                className={`${jaroFont.className} text-[16px] leading-5.5 uppercase md:text-[24px] md:leading-8.25 md:tracking-wide hover:border-b-black hover:border-b lg:text-[26px] lg:leading-9`}
              >
                baptistikenna@gmail.com
              </span>
            </div>
          </div>
          {/* BOTTOM CONTAINER */}
          <div className="flex flex-col justify-center items-center px-7.5 pb-5 gap-5 lg:flex-start lg:gap-4.25">
            <p
              className={`${jaroFont.className} text-[100px] leading-21 tracking-wide uppercase md:text-[240px] md:leading-50.5`}
            >
              veloce
            </p>

            <p className="font-bold text-[14px] leading-4 tracking-tight">
              company name© 2025 All Rights Reserved
            </p>
          </div>
        </footer>
        <Image
          src={"/decorative-border-lg.png"}
          alt="decoration"
          height={32}
          width={1280}
          className="w-full bg-[#CD9D65]"
        />
      </main>
    </div>
  );
}
