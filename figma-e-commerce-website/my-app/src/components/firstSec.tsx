import Link from "next/link";
import dropDown from "../assets/DropDown.png";
import Image from "next/image";
import HeroImg from "../assets/heroImg.png";
import AppleIcon from "../assets/icon-apple.png";
import ToRightArr from "../assets/toRightArrow.png";
import HeroDots from "../assets/Hero dots.png";

const FirstSec = () => {
  return (
    <section>
      <div className="pl-[7%] flex flex-row">
        {/* side bar */}
        <div className="flex flex-row">
          <ul className="space-y-4 mt-8 w-[217px]">
            <div className="flex flex-row justify-between">
              <li>
                <Link href="">Woman’s Fashion</Link>
              </li>
              <Image className="cursor-pointer" src={dropDown} alt="dropDown" />
            </div>
            <div className="flex flex-row justify-between">
              <li>
                <Link href="">Men’s Fashion</Link>
              </li>
              <Image className="cursor-pointer" src={dropDown} alt="dropDown" />
            </div>

            <li>
              <Link href="">Electronics</Link>
            </li>
            <li>
              <Link href="">Home & Lifestyle</Link>
            </li>
            <li>
              <Link href="">Medicine</Link>
            </li>
            <li>
              <Link href="">Sports & Outdoor</Link>
            </li>
            <li>
              <Link href="">Baby’s & Toys</Link>
            </li>
            <li>
              <Link href="">Groceries & Pets</Link>
            </li>
            <li>
              <Link href="">Health & Beauty</Link>
            </li>
          </ul>
          {/* seperator */}
          <div className="mx-2 h-[378px] bg-black p-[0.5px] opacity-[15%]" />
        </div>
        {/* hero section */}
        <div className="flex flex-row justify-between w-[892px] h-[342px] bg-black m-[40px] relative">
          {/* text portion */}
          <div className="p-14 text-txtWhite space-y-3">
            <div className="flex flex-row items-center gap-6">
              <Image src={AppleIcon} alt="Apple Icon" />
              <p className="text-[16px]">iPhone 14 Series</p>
            </div>
            <h1 className="text-[48px] font-semibold w-[300px]">
              Up to 10% off Voucher
            </h1>
            <div className="flex flex-row gap-2">
              <Link
                className="underline-offset-[7px] hover:underline decoration-2 decoration-slate-400"
                href=""
              >
                Shop Now
              </Link>
              <Image
                className="w-[24px] h-[24px]"
                src={ToRightArr}
                alt="To Right Arrow"
              />
            </div>
          </div>
          {/* image */}
          <div>
            <Image src={HeroImg} alt="Hero Img" />
          </div>
          {/* dots at the bottom */}
          <div className="flex space-x-2 absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-2">
            <div className="w-[12px] h-[12px] rounded-full bg-white opacity-[50%]" />
            <div className="w-[12px] h-[12px] rounded-full bg-white opacity-[50%]" />
            <div className="w-[14px] h-[14px] rounded-full bg-red-500 border-white border-2 opacity-[100%]" />
            <div className="w-[12px] h-[12px] rounded-full bg-white opacity-[50%]" />
            <div className="w-[12px] h-[12px] rounded-full bg-white opacity-[50%]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstSec;
