import { BookOpenIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function BlogCard() {
   return (
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
         <Link href="#">
            <Image width="100" height="100" className="rounded-t-lg" src="/img/image-1.jpeg" alt="" />
         </Link>
         <div className="p-5">
            <Link href="#">
               <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
               <small className="block italic text-indigo-600 mb-5">Published Feb 24th, 2023</small>
            </Link>
            <p className="mb-5 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            <div className="flex items-center space-x-4">
               <div className="flex-shrink-0">
                  <Image width="100" height="100" className="w-10 h-10 rounded-full" src="/img/user3.jpg" alt="Neil image" />
               </div>
               <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                     Blaco B.
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                     Title, email or something
                  </p>
               </div>
               <Link href="" className="inline-flex items-center text-base font-semibold text-indigo-500 dark:text-white">
                  <BookOpenIcon className="w-5 h-5 mr-2"/> Read
               </Link>
            </div>
         </div>
      </div>
   )
}

