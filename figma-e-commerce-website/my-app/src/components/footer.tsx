import React from "react";
import logo from "../assets/white logo.png";
import Image from "next/image";
import Link from "next/link";
import send from "../assets/icon-send.png";
import download from "../assets/QR code download.png";
import facebook from "../assets/Icon-Facebook.png";
import twitter from "../assets/Icon-Twitter.png";
import insta from "../assets/icon-instagram.png";
import linkedIn from "../assets/Icon-Linkedin.png";
import copyright from "../assets/icon-copyright.png";

const Footer = () => {
  return (
    <footer className="text-txtWhite bg-black body-font h-fit">
      <div className="pt-10 mx-auto px-[7%]">
        <div className="flex flex-wrap gap-10 md:flex-row items-start justify-between md:text-left text-center order-first text-nowrap text-txtWhite">
          {/* subscribe */}
          <div className="w-full sm:w-[45%] lg:w-auto">
            <Image src={logo} alt="logo" className="mb-7 mx-auto md:mx-0" />
            <ul className="list-none mb-5">
              <li className="my-5">
                <Link href="/" className="text-[20px]">
                  Subscribe
                </Link>
              </li>
              <li className="text-[14px] my-5">Get 10% off your first order</li>
              <div className="flex flex-row items-center w-[200px] group rounded-sm border border-white mx-auto md:mx-0">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="bg-transparent outline-none px-3 py-2 w-[160px]"
                />
                <Image
                  src={send}
                  alt="send mail icon"
                  className="w-[24px] h-[24px] cursor-pointer"
                />
              </div>
            </ul>
          </div>

          {/* support */}
          <div className="w-full sm:w-[45%] lg:w-auto">
            <h2 className="title-font font-medium text-white text-[20px] mb-7 shadow tracking-normal">
              Support
            </h2>
            <nav className="list-none mb-5 space-y-4 text-[16px]">
              <li className="text-wrap w-[180px] mx-auto md:mx-0">
                111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
              </li>
              <li>exclusive@gmail.com</li>
              <li>+88015-88888-9999</li>
            </nav>
          </div>

          {/* Account */}
          <div className="w-full sm:w-[45%] lg:w-auto">
            <h2 className="title-font font-medium text-white text-[20px] mb-7 shadow tracking-normal">
              Account
            </h2>
            <nav className="list-none mb-5 space-y-4 text-[16px]">
              <li>
                <Link href="/">My Account</Link>
              </li>
              <li>
                <Link href="/">Login / Register</Link>
              </li>
              <li>
                <Link href="/">Cart</Link>
              </li>
              <li>
                <Link href="/">Wishlist</Link>
              </li>
              <li>
                <Link href="/">Shop</Link>
              </li>
            </nav>
          </div>

          {/* Quick Link */}
          <div className="w-full sm:w-[45%] lg:w-auto">
            <h2 className="title-font font-medium text-white text-[20px] mb-7 shadow tracking-normal">
              Quick Link
            </h2>
            <nav className="list-none mb-5 space-y-4 text-[16px]">
              <li>
                <Link href="/">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/">Terms Of Use</Link>
              </li>
              <li>
                <Link href="/">FAQ</Link>
              </li>
              <li>
                <Link href="/">Contact</Link>
              </li>
            </nav>
          </div>

          {/* Download App*/}
          <div className="w-full sm:w-[45%] lg:w-auto">
            <h2 className="title-font font-medium text-white text-[20px] mb-7 shadow tracking-normal">
              Download App
            </h2>
            <div className="flex justify-center md:justify-start">
              <Image src={download} alt="QR code download" />
            </div>
            <div className="flex flex-row my-5 gap-[23px] justify-center md:justify-start">
              <Image src={facebook} alt="fb-icon" className="cursor-pointer" />
              <Image src={twitter} alt="x-icon" className="cursor-pointer" />
              <Image src={insta} alt="insta-icon" className="cursor-pointer" />
              <Image src={linkedIn} alt="Ln-icon" className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
      <hr className="opacity-[15%] shadow mt-5" />
      <div className="flex flex-row justify-center text-copyRight py-5">
        <Image
          src={copyright}
          alt="copy right"
          className="w-[20px] h-[20px] mx-1 opacity-[25%]"
        />
        <p>Copyright Rimel 2022. All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
