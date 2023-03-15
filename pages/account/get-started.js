import { useState, useMemo, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

import AuthOptions from "../../components/authOptions";
import PopupWidget from "../../components/popupWidget";

export default function SignIn() {
   return (
      <section id="register" className="bg-pixlviol-100 dark:bg-neutral-900 dark:bg-gradient-to-r dark:to-rgb(22,23,24) dark:from-slate-900 dark:text-white p-5 py-20 md:p-20 md:pt-[150px] min-h-screen">
         <div className="md:max-w-[400px] m-auto">
         {/* FORM DETAILS */}
         <div className="bg-white rounded-lg p-5">
            {/* Logo + Copy */}
            <div className="flex-col items-center text-center space-y-5">
               {/* <div className="m-auto mb-10">
                  <Link href="/" className="flex items-center m-auto cursor-pointer">
                     <span>
                        <img src="/img/logo.png" alt="pixl" width="100" height="100" className="m-auto w-[100px]"/>
                     </span>
                  </Link>
               </div> */}
               <h2 className="text-2xl font-medium">Get Started</h2>
               {/* <p className="text-lg text-lightWhite">Hey, we’re happy to havy you here! In order to create your accounts fill in fields below.</p> */}
            </div>

            {/* FORM */}
            <form className="flex flex-col mt-7">
               <div className="space-y-5 mb-5">


               <div className="flex">
                  <span className="inline-flex items-center px-4 py-3.5 text-sm text-gray-900 bg-black/5 border-gray-300 rounded-l-md dark:bg-black/100 dark:text-black/80 dark:border-gray-600">§</span>
                  <input className="w-full h-[52px] bg-pixlviol-800/0 border rounded-sm px-5 py-3.5 text-pixlviol-500 placeholder:text-lightWhite focus-visible:outline-0" placeholder="Username" type="text" 
                  // {...register("name", { required: "Name is required" })} 
                  />
               </div>

               <input className="w-full h-[52px] rounded-lg bg-transparent border border-jade-100 px-5 py-3.5 text-pixlviol-500 placeholder:text-lightWhite focus-visible:outline-0" placeholder="Email" type="email" 
               // {...register("email", { required: "Email is required" })} 
               /> 
               {/* {errors.email && ( <p className="text-red-400">{errors.email.message}</p> )} */}

                  <input
                  className="w-full h-[52px] bg-transparent border border-jade-100 rounded-lg px-5 py-3.5 text-pixlviol-500 placeholder:text-lightWhite focus-visible:outline-0"
                  placeholder="Password"
                  type="password"
                  // {...register("password", {
                  //    required: "Password is required",
                  // })}
                  />
               </div>

               {/* BUTTON */}
               <Link type="submit" className="buttonPrimary" href="/shop">
                  Join
               </Link>
               <p className="mt-5 text-center">
                  Alrady have an account?{" "}
                  <Link className="" href="/account/login">
                  <span className="text-pixlviol-100 font-bold cursor-pointer">Sign In.</span>
                  </Link>
               </p>

               
            </form>
         </div>

         {/* OR */}
         <div className="my-10 text-base relative after:content-[''] after:absolute after:w-full after:h-[1px] after:opacity-20 after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:translate-y-1/2">
            <span className="block relative w-25 m-auto mb-5 text-center font-bold text-white">
            or continue with
            </span>

            <AuthOptions/>

         </div>


         <PopupWidget />
         </div>
      </section>
   );
}
