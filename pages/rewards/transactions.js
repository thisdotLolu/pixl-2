import React from 'react'

export default function Rtransactions() {
   return (
      <div className="relative overflow-x-auto">
         <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-base text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-white">
                  <tr>
                     <th scope="col" className="px-6 py-3 rounded-l-lg">
                        Date
                     </th>
                     <th scope="col" className="px-6 py-3">
                        
                     </th>
                     <th scope="col" className="px-6 py-3 text-right">
                        USD Value
                     </th>
                     <th scope="col" className="px-6 py-3 rounded-r-lg text-right">
                        pixl Value
                     </th>
                  </tr>
            </thead>
            <tbody>
               <tr className="bg-white dark:bg-gray-800 dark:text-white">
                     <td className="px-6 py-4">
                        03/11/2023
                     </td>
                     <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        SolSea.io <span className="text-indigo-600 dark:text-yellow-500">(Redemption)</span>
                     </th>
                     <td className="px-6 py-4 text-right">
                        <span className="text-emerald-600">$6.06</span>
                     </td>
                     <td className="px-6 py-4 text-right">
                        <span className="text-orange-600">✨60.60</span>
                     </td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800 dark:text-white">
                     <td className="px-6 py-4">
                        03/11/2023
                     </td>
                     <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Ledger.com Purchase <span className="text-indigo-600 dark:text-yellow-500">(10% back)</span>
                     </th>
                     <td className="px-6 py-4 text-right">
                        <span className="text-emerald-600">$149.00</span>
                     </td>
                     <td className="px-6 py-4 text-right">
                        <span className="text-indigo-600 dark:text-yellow-500">✨149</span>
                     </td>
                  </tr>
            </tbody>
         </table>
      </div>
   )
}
