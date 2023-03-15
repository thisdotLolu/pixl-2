import { ArrowRightOnRectangleIcon, ShoppingBagIcon, TrophyIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import { getAuth } from 'firebase/auth';
import Lottie from 'lottie-react'
import Link from 'next/link';
import React from 'react'

import cryptocoins from '../public/anim/crypto-coins.json'
import logow from '../public/anim/pixl-logo-white.json'
import ThemeChanger from './DarkSwitch';

export default function UserNav() {
   const auth = getAuth();
   return (
      <>
         <div className="flex justify-between items-center">
            <div className="mb-[20px] w-[77px] h-[77px]">
               <Link legacyBehavior href="/" className="flex items-center">
                  <Lottie className="cursor-pointer" animationData={logow} />
               </Link>
            </div>
            <div>
               <ThemeChanger />
            </div>
         </div>

         <div className="w-full flex justify-between items-center text-lg font-bold text-white px-1 mb-[40px] ">
            <div className="flex flex-col text-base space-y-1">
               <span className="font-normal">§blanco</span>
               <span className="text-lg font-bold">✨149.00</span>
               <span className="text-sm font-normal">$14.90</span>
            </div>
            {/* <div className="realtive ml-3 z-10 w-[60px] h-[60px] rounded-full overflow-hidden border-2 border-white hover:border-white focus:border-white focus:outline-none">
               <img src="/img/user3.jpg" />
            </div> */}
         </div>

         <nav className="text-white text-base font-semibold pt-3 divide-y-[1px] divide-white/50">
            <Link legacyBehavior href="/shop">
               <span className="sidebarLink"><ShoppingBagIcon className="w-7 h-7 mr-2" /> Shop</span>
            </Link>
            <Link legacyBehavior href="/rewards">
               <span className="sidebarLink"><TrophyIcon className="w-7 h-7 mr-2" /> Rewards</span>
            </Link>
            <Link legacyBehavior href="/profile">
               <span className="sidebarLink"><UserCircleIcon className="w-7 h-7 mr-2" /> Profile</span>
            </Link>
            <button onClick={() => auth.signOut()} className="block w-full">
               <span className="sidebarLink"><ArrowRightOnRectangleIcon className="w-7 h-7 mr-2" /> Sign Out</span>
            </button>
         </nav>
         <Link href="/" className="flex primaryButton rounded-lg bg-white/100 hover:bg-white/90 font-bold active-nav-link text-pixlviol-800 items-center justify-center p-4 mt-[40px]">
            Earn ✨50 Points
            <div className="w-[100px]">
               <Lottie animationData={cryptocoins} />
            </div>
         </Link>
      </>
   )
}