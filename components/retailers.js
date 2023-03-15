import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Retailers() {
   return (
      <div className="w-full p-4 bg-white border border-gray-200 md:rounded-lg shadow sm:p-8 dark:border-gray-700 dark:bg-slate-200">
         <div className="flow-root">
            <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
               <li className="retailerCard">
                  <div className="flex items-center space-x-4">
                     <div className="flex-shrink-0">
                        <Image className="w-8 h-8 md:w-10 md:h-10" width="100" height="100" src="/img/ledger.svg" alt="Ledger" />
                     </div>
                     <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 dark:text-black">
                           Ledger
                        </p>
                     </div>
                     <div className="hidden md:block flex-1 min-w-0">
                        <p className="text-sm font-medium text-pixlviol-500 truncate dark:text-black">
                           10% back per purchase
                        </p>
                     </div>
                     <a href="https://shop.ledger.com/?r=a1c00b7421f8" target="_blank" className="retailerLink group" rel="noreferrer">
                        <ShoppingCartIcon className="w-5 h-5 mr-2 text-pixlviol-400 group-hover:bg-pixlviol-500 group-hover:text-white" />
                        <span className="hidden md:block group-hover:text-white dark:text-black">Shop</span>
                        <span className="block md:hidden text-red text-sm md:text-base group-hover:text-white">Up to 5% back</span>
                     </a>
                  </div>
               </li>
               <li className="retailerCard">
                  <div className="flex items-center space-x-4">
                     <div className="flex-shrink-0">
                        <Image className="w-8 h-8 md:w-10 md:h-10 rounded-full" width="100" height="100" src="/img/bgn.png" alt="Blockchain Games Network" />
                     </div>
                     <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 dark:text-black">
                           BGN Fiat Vision
                        </p>
                     </div>
                     <div className="hidden md:block flex-1 min-w-0">
                        <p className="text-sm font-medium text-pixlviol-500 truncate dark:text-black">
                           25% back every month!
                        </p>
                     </div>
                     <Link href="https://chrome.google.com/webstore/detail/fiat-vision-by-bgngames/ockghdhcmplglajfcillegnhkhipaokk/related" target="_blank" className="retailerLink group">
                        <ShoppingCartIcon className="w-5 h-5 mr-2 text-pixlviol-400 group-hover:bg-pixlviol-500 group-hover:text-white" />
                        <span className="hidden md:block group-hover:text-white dark:text-black">Shop</span>
                        <span className="block md:hidden text-sm md:text-base group-hover:text-white">Up to 5% back</span>
                     </Link>
                  </div>
               </li>
               
            </ul>
         </div>
      </div>
   )
}
