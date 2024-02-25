import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background  ">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center font-bold space-x-3 text-xl  ">
            <Image
              src={"/logo.png"}
              width={50}
              height={50}
              alt="site logo"
              className="animate__animated animate__rotateIn animate__slower"
            />
            <div>COvest</div>
          </div>
          <ul className="flex flex-wrap gap-5 items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li className="hover:border-secondary hover:border-b-2 transition-all ease-in-out duration-300">
              <Link href="#about" >
                About
              </Link>
            </li>
            <li className="hover:border-secondary hover:border-b-2 transition-all ease-in-out duration-300">
              <Link href="/privacyPolicy" >
                Privacy Policy
              </Link>
            </li>
            <li className="hover:border-secondary hover:border-b-2 transition-all ease-in-out duration-300">
              <Link href="#contact_us" >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-center bg-primary text-center text-primary ">
        <div className="container pt-9">
          <div className="mb-9 flex justify-center">
            <Link href="#!" className="mr-9 text-background">
              <Facebook />
            </Link>

            <Link href="#!" className="mr-9 text-background">
              <Twitter />
            </Link>
            <Link href="#!" className="mr-9 text-background">
              <Instagram />
            </Link>
          </div>
        </div>

        <div className="w-full bg-primary p-4 text-center text-neutral-700 dark:text-neutral-200">
          © {new Date().getFullYear()} Copyright:
          <Link href="/" className="hover:underline">
            COvest™
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
