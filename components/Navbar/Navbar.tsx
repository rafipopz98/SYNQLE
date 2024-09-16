"use client";

import React from "react";
import logolight from "../../assets/light/logo-light.png";
import logoDark from "../../assets/dark/logo-dark.png";
import InfiniteSlider from "../Infinite-Slider/InfiniteSlider";
import ThemeSwitch from "../ui/ThemeSwitch";
import { useTheme } from "next-themes";
import Link from "next/link";

const Navbar = () => {
  const { theme, systemTheme } = useTheme();
  const isAuthUser: boolean = true;

  let logoSrc;
  if (theme === "system") {
    logoSrc = systemTheme === "dark" ? logolight.src : logoDark.src;
  } else {
    logoSrc = theme === "dark" ? logolight.src : logoDark.src;
  }

  return (
    <>
      <div className="container mx-auto py-3 px-4 sm:px-6">
        <div className="flex items-center justify-between">
          <div className="pl-2 sm:pl-4">
            <Link href="/dashboard">
              <img
                src={logoSrc}
                alt="Logo"
                width={80}
                className="object-cover sm:w-24"
              />
            </Link>
          </div>
          {isAuthUser ? (
            <div className="flex items-center gap-2 sm:gap-4">
              <p className="text-sm sm:text-xl  px-2 transition-all cursor-pointer rounded-lg">
                user name
              </p>
              <img
                src="https://i.pinimg.com/564x/07/66/d1/0766d183119ff92920403eb7ae566a85.jpg"
                alt="profile image"
                width={30}
                height={30}
                className="rounded-full object-cover sm:w-10 sm:h-10"
              />
              <ThemeSwitch />
            </div>
          ) : (
            <div className="flex items-center gap-4 sm:gap-6 pr-2 sm:pr-4">
              <p className="cursor-pointer border rounded-lg p-1 sm:p-2 py-1 custom-shadow">
                Sign up
              </p>
              <p className="cursor-pointer border rounded-lg p-1 sm:p-2 py-1 custom-shadow">
                Login
              </p>
            </div>
          )}
        </div>
      </div>
      <hr className="w-[100vw] h-[2px] custom-shadow" />
      {isAuthUser && <InfiniteSlider />}
    </>
  );
};

export default Navbar;
