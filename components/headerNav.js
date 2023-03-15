import { Popover } from "@headlessui/react";
import Lottie from 'lottie-react'
import Image from "next/image";
import Link from "next/link";
import React from 'react'

import cryptocoins from '../public/anim/crypto-coins.json'

export default function HeaderNav() {
  return (
      <header className="w-full items-center bg-white py-2 px-6 hidden sm:flex">
         <div className="w-1/2">
         </div>
         <div className="w-1/2 flex justify-end items-center text-lg font-bold text-pixlviol">
            $blanco 
            <Popover className="relative">
               <Popover.Button className="realtive ml-3 z-10 w-[70px] h-[70px] rounded-full overflow-hidden border-4 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none">
                  <Image src="/img/user3.jpg" width="100" height="100" alt="bio" />
               </Popover.Button>

               <Popover.Panel className="absolute right-0 w-[222px] z-20 p-3 bg-white rounded-lg shadow-lg">
                  <div className="flex flex-col">
                     <a href="#" className="block px-4 py-2">Profile Settings</a>
                     <a href="#" className="block px-4 py-2">Support</a>
                     <a href="#" className="block px-4 py-2">Sign Out</a>
                  </div>

               <Image src="/solutions.jpg" alt="" width="100" height="100" />
               </Popover.Panel>
            </Popover>
         </div>
      </header>
   )
}
