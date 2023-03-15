import { HomeIcon, MagnifyingGlassIcon, ShoppingBagIcon, TrophyIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";

export default function NavbarMobile() {
   return (
      <>
         <div className="bg-pixlviol-500 fixed bottom-0 right-0 left-0 md:hidden">
            <div className="w-full h-[88px] bg-fbblack-100">
               <ul className="flex items-center justify-between h-full px-5">
                  <li className="content-center">
                     <Link legacyBehavior className="" href="/">
                        <MagnifyingGlassIcon className="NavIcon" />
                     </Link>
                  </li>

                  <li className="text-center">
                     <Link legacyBehavior href="/shop">
                        <ShoppingBagIcon className="NavIcon" />
                     </Link>
                  </li>

                  <li className="content-center">
                     <Link legacyBehavior className="" href="/">
                        <HomeIcon className="NavIcon" />
                     </Link>
                  </li>

                  <li className="text-center">
                     <Link legacyBehavior href="/rewards">
                        <TrophyIcon className="NavIcon" />
                     </Link>
                  </li>

                  <li className="text-center">
                     <Link legacyBehavior href="/profile">
                        <UserCircleIcon className="NavIcon" />
                     </Link>
                  </li>
               </ul>
            </div>
        </div>
      </>
   );
}
