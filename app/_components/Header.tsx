import Image from "next/image";
import Link from "next/link";
import { jaroFont, staatlichesFont } from "@/utils/fonts";

const navLinks = [
  { name: "ABOUT", href: "/about" },
  { name: "FIND US", href: "/find-us" },
  { name: "CONTACT", href: "https://wa.me/2347067562814" },
];
const navLinksMd = [
  { name: "ABOUT", href: "/about" },
  { name: "FIND STOCKLISTS", href: "/find-us" },
  { name: "CONTACT", href: "https://wa.me/2347067562814" },
];

export default function Header() {
  return (
    <header className="relative flex flex-col items-start gap-3 w-full h-auto">
      {/* MOBILE NAVIGATION */}
      <nav className="relative flex justify-between items-start px-8 py-8 gap-40 w-full md:hidden">
        <div className="relative w-27 h-9">
          <Image
            className="absolute !top-[-6.77px]"
            src={"/Wordmark.png"}
            fill
            alt="veloce lego"
            priority
          />
        </div>
        <div className="flex flex-col justify-center items-end gap-5 h-22">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`${jaroFont.className} h-6 leading-10`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
      {/* TABLET NAVIGATION */}
      <div className="hidden md:flex xl:hidden flex-col items-start p-8 gap-18 w-full h-115">
        <div className="flex flex-col items-center gap-13 w-full h-33">
          <p className={`${staatlichesFont.className} text-3xl leading-8 `}>
            The ZERO-PROOF aperitif for modern living.
          </p>

          <nav className="box-border flex justify-between items-center px-2 gap-8 w-full h-12 border-t-black border-t">
            {navLinksMd.map((link) => (
              <Link
                className={`${jaroFont.className} h-8 text-2xl leading-8 tracking-wide`}
                key={link.name}
                href={link.href}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className=" flex justify-center items-end gap-2 w-185  h-[199.11px] px-5">
            <Image
              src={"/Veloce-md.png"}
              className="w-185  h-62"
              height={740}
              width={248}
              alt="veloce logo"
            />
          </div>
        </div>
      </div>

      {/* DESTOP NAVIGATION */}

      <div className="hidden xl:flex items-start w-full pt-15 px-8 pb-8 gap-18 h-61 ">
        {/* LOGO */}
        <div className="relative flex justify-center items-center gap-2 w-xl h-39 grow">
          <Image
            width={740}
            height={248}
            className="flex w-full h-full"
            alt="Veloce logo"
            src={"/Veloce-md.png"}
          />
        </div>

        <div className="flex flex-col justify-between items-start pr-8 gap-15 h-39">
          <p
            className={`${staatlichesFont.className} w-full h-10 text-3xl leading-10 `}
          >
            The ZERO-PROOF aperitif for modern living.
          </p>

          <nav className="flex justify-between items-start py-2 gap-8 w-136 h-13 border-t">
            {navLinksMd.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`${jaroFont.className} text-2xl leading-10 tracking-wide`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <>
        <Image
          src={"/decorative-border.png"}
          width={500}
          height={30}
          alt="decorative hero"
          className="w-full h-5 md:hidden"
        />
        <Image
          src={"/decorative-border-md.png"}
          width={500}
          height={30}
          alt="decorative hero"
          className="w-full h-5 hidden xl:hidden md:flex"
        />
        <Image
          src={"/decorative-border-lg.png"}
          width={500}
          height={30}
          alt="decorative hero"
          className="w-full h-8 hidden md:hidden xl:flex"
        />
      </>
    </header>
  );
}
