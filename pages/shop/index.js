import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon,ChevronUpDownIcon, MagnifyingGlassCircleIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Head from "next/head";
import { Fragment, useState } from 'react'

import Navbar from "../../components/navbar";
import NavbarMobile from "../../components/navbarMobile";
import PopupWidget from "../../components/popupWidget";
import Retailers from "../../components/retailers";
import UserNav from "../../components/userNav";


const shopCategories = [
   { name: 'Hardware Wallets' },
   { name: 'All Stores' },
   { name: 'Arts & Crafts' },
   { name: 'Automotive' },
   { name: 'Books' },
   { name: 'Clothing' },
   { name: 'Home Improvement & Garden' },
 ]

export default function Shop() {
   const [selected, setSelected] = useState(shopCategories[0])
   return (
      <>
         <div className="block md:hidden">
            <Navbar/>
         </div>
         <div className="Pcontainer">
            <aside className="sidebar">
               <UserNav />
            </aside>

            <div className="relative w-full flex flex-col h-screen overflow-y-hidden">
               <div className="hidden md:flex flex-col-reverse md:flex-row items-center w-full bg-white shadow-xl adminDark">
                  {/* filter */}
                  <div className="md:flex-none px-5 py-3 md:px-7 md:py-7 mt-[-10px] md:mt-0  w-full md:w-72">
                     <Listbox value={selected} onChange={setSelected}>
                     <div className="">
                        <Listbox.Button className="relative w-full cursor-default rounded-lg border-pixlviol-400/20 bg-pixlviol-400/10 py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:border-pixlviol-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 text-gray-700">
                           <span className="block truncate">{selected.name}</span>
                           <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                           <ChevronUpDownIcon
                              className="h-5 w-5 text-gray-400"
                              aria-hidden="true"
                           />
                           </span>
                        </Listbox.Button>
                        <Transition
                           as={Fragment}
                           leave="transition ease-in duration-100"
                           leaveFrom="opacity-100"
                           leaveTo="opacity-0"
                        >
                           <Listbox.Options className="absolute mt-1 max-h-60 w-[90%] md:w-73 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                           {shopCategories.map((person, personIdx) => (
                              <Listbox.Option
                                 key={personIdx}
                                 className={({ active }) =>
                                 `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                    active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                 }`
                                 }
                                 value={person}
                              >
                                 {({ selected }) => (
                                 <>
                                    <span
                                       className={`block truncate ${
                                       selected ? 'font-medium' : 'font-normal'
                                       }`}
                                    >
                                       {person.name}
                                    </span>
                                    {selected ? (
                                       <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                       <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                       </span>
                                    ) : null}
                                 </>
                                 )}
                              </Listbox.Option>
                           ))}
                           </Listbox.Options>
                        </Transition>
                     </div>
                     </Listbox>
                  </div>

                  {/* search form */}
                  <form className="flex w-full md:w-auto md:flex-auto px-5 py-3 md:px-7 md:py-7 md:items-center">   
                     <label for="simple-search" className="sr-only">Search</label>
                     <div className="relative flex-auto w-full">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                           <MagnifyingGlassCircleIcon className="w-7 h-7 text-black/30"/>
                        </div>
                        <input type="text" id="simple-search" className="flex-1 formInput pl-12 py-2 md:py-3 border-pixlviol-400/20 bg-pixlviol-400/10" placeholder="Search" required />
                     </div>
                     <button type="submit" className="flex-none p-2.5 ml-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-pixlviol-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:text-black dark:bg-yellow-500 dark:hover:bg-yellow-600 dark:focus:ring-yellow-800">
                        <MagnifyingGlassIcon className="w-5 h-5"/>
                        <span className="sr-only">Search</span>
                     </button>
                  </form>
               </div>

               {/* Mobile Header & Nav */}
               <div className="w-full h-screen overflow-x-hidden border-t flex flex-col adminDark">
                  <main className="w-full flex-grow px-0 md:p-16">
                     <h2 className="w-full font-medium text-2xl p-5 pb-0 md:p-0 text-black/50 dark:text-white">Online Offers</h2>
                     <p className="px-5 md:p-0">Shop online with our <a href="#">browser extension</a>.</p>
                     <div className="flex flex-wrap mt-5 md:mt-10">
                        {/* column 1 */}
                        <Retailers/>
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
