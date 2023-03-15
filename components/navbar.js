import { Menu } from "@headlessui/react";
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid";
import Lottie from 'lottie-react'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import logo from '../public/anim/pixl-logo.json'
import logoWhite from '../public/anim/pixl-logo-white.json'
import ThemeChanger from "./DarkSwitch";

export default function Navbar() {
  const navigation = [
    {label: "Blog", link: '/blog'},
    {label: "Support", link: '/support'}
  ];

  const [navSize, setnavSize] = useState("auto");
  const [logoSize, setlogoSize] = useState("40px");
  const [navColor, setnavColor] = useState("transparent");
  const [logoData, setlogoData] = useState(logo);
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("rgba(140,82,255,0.6)") : setnavColor("transparent");
    window.scrollY > 10 ? setlogoSize("40px") : setlogoSize("80px");
    window.scrollY > 10 ? setnavSize("auto") : setnavSize("auto");
    window.scrollY > 10 ? setlogoData(logoWhite) : setlogoData(logo);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <div className="w-full sticky top-0 z-30 backdrop-blur-[6px] px-5 py-2 md:px-0 md:py-5" style={{backgroundColor: navColor, height: navSize, transition: "all 1s" }}>
      <nav className="container relative flex flex-wrap items-center justify-between mx-auto lg:justify-between" >
        {/* Logo  */}
        <Link legacyBehavior href="/">
          <a className="flex items-center cursor-pointer space-x-2 text-2xl font-medium text-pixlviol-500 dark:text-gray-100 w-[50px] md:w-[80px] h-auto py-3" style={{height: logoSize + ' !important', transition: "all 1s" }}>
            <Lottie animationData={logoData} loop={false}/>
          </a>
        </Link>

        {/* Mobile menu */}
        <div className="block md:hidden">
          <Menu>
            <Menu.Button className="absolute inset-y-0 right-0 z-30">
              <Bars3BottomRightIcon className="w-6 h-6 text-gray-800 cursor-pointer dark:text-gray-200" />
            </Menu.Button>
            <Menu.Items className="p-0 overflow-hidden bg-pixlviol-400 backdrop-blur-[6px] absolute inset-0 min-w-screen min-h-screen m-[-20px] z-10 text-center duration-500 transition-opacity">
              <Menu.Item>
                <ul className="items-center space-y-5 flex-row pt-[120px]">
                  {navigation.map((item, index) => (
                    <Link legacyBehavior key={index} href={item.link} passHref className="">
                        <li className="navLink">{item.label}</li>
                    </Link>
                  ))}
                  <li className="navLink">Privacy Policy</li>
                  <li className="navLink">Terms</li>
                </ul>
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </div>

        {/* desktop menu  */}
        <div className="hidden text-center md:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none md:pt-0 md:flex">
            {navigation.map((item, index) => (
              <Link legacyBehavior key={index} href={item.link} passHref>
                <a className="inline-block px-4 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-pixlviol-500 focus:text-pixlviol-500 focus:bg-pixlviol-100 focus:outline-none dark:focus:bg-gray-800">
                  {item.label}
                </a>
              </Link>
            ))}
          </ul>
        </div>

        {/* main menu cta */}
        <div className="hidden mr-3 space-x-4 md:flex nav__item">
          <Link href="/account/get-started" rel="noopener" className="flex items-center px-6 py-2 text-base font-medium text-center text-black dark:text-yellow-500 dark:border-slate-700 dark:hover:bg-slate-700 border border-pixlviol-600 rounded-md hover:bg-pixlviol-600 hover:text-white">
            <div className="w-6 mr-3">
              <Image src="/img/solana-logo.svg" width="100" height="100" alt="Solana" className="mr-2" /> 
            </div>
            Sign in
          </Link>
          <Link legacyBehavior href="/shop">
            <a className="buttonPrimary py-2">Shop</a>
          </Link>
          <ThemeChanger />
        </div>
      </nav>
    </div>
  );
}
