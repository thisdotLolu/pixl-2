import Link from "next/link";

import AuthOptions from "../../components/authOptions";
import PopupWidget from "../../components/popupWidget";


export default function Register() {
  return (
   <section id="register" className="bg-pixlviol-100 p-5 py-20 md:p-20 md:pt-[150px] min-h-screen">
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
            <h2 className="text-2xl font-medium">Sign In</h2>
            {/* <p className="text-lg text-lightWhite">Hey, we’re happy to havy you here! In order to create your accounts fill in fields below.</p> */}
         </div>

         {/* FORM */}
         <form className="flex flex-col mt-7">
            <div className="space-y-5 mb-5">
            <input className="w-full h-[52px] bg-transparent border border-jade-100 rounded-lg px-5 py-3.5 text-pixlviol-500 placeholder:text-lightWhite focus-visible:outline-0" placeholder="Email" type="email" 
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
               Sign In
            </Link>
            <p className="mt-5 text-center">
               Don&rsquo;t have an account?{" "}
               <Link className="" href="/account/get-started">
                  <span className="text-pixlviol-100 font-bold cursor-pointer">Get started.</span>
               </Link>
            </p>

            
         </form>
      </div>

      {/* OR */}
      <div className="my-10 text-base relative ">
         <span className="block relative w-25 m-auto mb-5 text-center font-bold text-white">
         or continue with
         </span>


      </div>
         
      <AuthOptions />

      <PopupWidget />
      </div>
   </section>
  );
}
