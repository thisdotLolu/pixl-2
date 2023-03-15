import { Dialog, Transition } from '@headlessui/react'
import { CheckBadgeIcon, LinkIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment, useState } from 'react'

export default function RewardCard() {
   let [isOpen, setIsOpen] = useState(false)
   function closeModal() {
      setIsOpen(false)
   }
   function openModal() {
      setIsOpen(true)
   }
   return (
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-slate-800/90 dark:border-gray-700">
         <Image width="100" height="100" className="rounded-t-lg w-full" src="/img/nfts/nft004.jpeg" alt="" />
         <div className="p-4 space-y-3">
            <div className="space-y-3">
               <h5 className="text-lg xl:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Rose Mandala</h5>
               <div className="flex items-center justify-between">
                  <div className="flex">
                     <Image width="25" height="25" className="w-6 h-6 rounded-full mr-1" src="/img/nfts/icon-solana.webp" alt="Bio Username" />
                     <p className="font-bold text-indigo-600 dark:text-yellow-500">0.3</p>
                  </div>
                  {/* Dialog */}
                  <Link href="#" type="button" onClick={openModal} className="inline-flex items-center text-base font-semibold text-indigo-500 dark:text-yellow-500"> Redeem
                  </Link>
                  {/* end button */}
                  <Link href="https://solsea.io/n/5MZhjsCyxNoWw8qnKetHSQy7J91ioWyW7y1sNQFm3xGL/" target="_blank" className="inline-flex items-center text-base font-semibold text-indigo-500 dark:text-yellow-500">
                     {/* <LinkIcon className="w-5 h-5 mr-2 text-sm"/>  */}
                     View
                  </Link>
               </div>
            </div>
            <div className="flex items-center space-x-4">
               <div className="flex-shrink-0">
                  <Image width="100" height="100" className="w-10 h-10 rounded-full" src="/img/nfts/bio-brahma.jpeg" alt="Bio Username" />
               </div>
               <Link href="https://solsea.io/a/625872c8886606dbef0ca588" target="_blank" className="flex-1 min-w-0">
                  <p className="flex items-center text-sm font-medium text-gray-900 truncate dark:text-white">Brahma Templeman <CheckBadgeIcon className="ml-1 fill-indigo-600 dark:fill-indigo-500 w-4 h-4"/></p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">Minted on SolSea</p>
               </Link>
            </div>
         </div>
         {/* dialog  */}
         <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
               <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
               >
                  <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" />
               </Transition.Child>

               <div className="fixed inset-0 overflow-y-auto">
                  <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                     as={Fragment}
                     enter="ease-out duration-300"
                     enterFrom="opacity-0 scale-95"
                     enterTo="opacity-100 scale-100"
                     leave="ease-in duration-200"
                     leaveFrom="opacity-100 scale-100"
                     leaveTo="opacity-0 scale-95"
                  >
                     <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                        <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                        >Redemption Confirmation</Dialog.Title>
                        <div className="mt-2">
                        <p className="text-gray-500">
                           Would you like to redeem <span className="text-indigo-600 font-bold">§60.60</span> pixl points and transfer the <span className="font-bold text-black/90">Rose Manadala NFT</span> to your Solana wallet?
                           <span className="block mt-3">You cannot undo NFT redemptions.</span>
                        </p>
                        </div>

                        <div className="flex mt-4 justify-between">
                           <button type="button" className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2" onClick={closeModal} >
                              Yes please!
                           </button>
                           <button type="button" className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2" onClick={closeModal} >
                              No thanks!
                           </button>
                        </div>
                     </Dialog.Panel>
                  </Transition.Child>
                  </div>
               </div>
            </Dialog>
         </Transition>
         {/* End Dialog */}
      </div>
   )
}

