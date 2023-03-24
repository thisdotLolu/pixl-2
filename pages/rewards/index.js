import { Tab } from '@headlessui/react'
import Head from "next/head";
import { useState } from 'react'

import HeaderNav from "../../components/headerNav";
import Navbar from "../../components/navbar";
import NavbarMobile from "../../components/navbarMobile";
import PopupWidget from "../../components/popupWidget";
import RewardCard from '../../components/rewardCard';
import UserNav from "../../components/userNav";

import Rtransactions from "./transactions";

function classNames(...classes) {
   return classes.filter(Boolean).join(' ')
}

export default function Rewards() {

   return (
         <>
         <div className="block md:hidden">
            <Navbar/>
         </div>
         <div className="Pcontainer">
            <aside className="sidebar">
               <UserNav />
            </aside>

            <div className="relative w-full flex flex-col h-screen overflow-y-hidden adminDark">
               {/* Mobile Header & Nav */}
               <div className="w-full h-screen overflow-x-hidden border-t flex flex-col">
                  <main className="w-full flex-grow p-5 md:p-16">
                     <h2 className="w-full font-medium text-3xl text-black/50 dark:text-white">Rewards</h2>
                     <div className="w-full py-5">
                        <Tab.Group>
                           <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                              <Tab className={({ selected }) => classNames( 'w-full rounded-lg py-2.5 text-base font-medium leading-5 text-indigo-700 dark:text-yellow-500', 'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2', selected ? 'bg-white dark:bg-slate-600 shadow' : 'text-black hover:bg-white/[0.12] hover:text-black' ) }>NFTS</Tab>
                              <Tab className={({ selected }) => classNames( 'w-full rounded-lg py-2.5 text-base font-medium leading-5 text-blue-700 dark:text-yellow-500', 'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2', selected ? 'bg-white dark:bg-slate-600 shadow' : 'text-black hover:bg-white/[0.12] hover:text-black' ) }>Transaction History</Tab>
                           </Tab.List>
                           <Tab.Panels>
                              <Tab.Panel className={classNames( 'rounded-xl bg-white p-3 dark:backdrop-blue-sm dark:bg-slate-800/90', 'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2' )}>
                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
                                 <RewardCard/>
                                 <RewardCard/>
                                 <RewardCard/>
                                 <RewardCard/>
                                 <RewardCard/>
                                 <RewardCard/>
                                 <RewardCard/>
                                 <RewardCard/>
                                 <RewardCard/>
                                 <RewardCard/>
                              </div>
                              </Tab.Panel>
                              <Tab.Panel className={classNames( 'rounded-xl bg-white p-3 dark:backdrop-blue-sm dark:bg-slate-800/90', 'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2' )}>
                                 <Rtransactions/>
                              </Tab.Panel>
                           </Tab.Panels>
                        </Tab.Group>
                     </div>
                  </main>
               </div>
            </div>
            <PopupWidget /> 
         </div>
         <NavbarMobile/>
         </>
   );
}
