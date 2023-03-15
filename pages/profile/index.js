import Navbar from "../../components/navbar";
import NavbarMobile from "../../components/navbarMobile";
import PopupWidget from "../../components/popupWidget";
import UserNav from "../../components/userNav";
import AuthWrapper from "../../utils/AuthWrapper"

//import dynamic from "next/dynamic";

// const Video = dynamic(() => import("../components/video"));

// const Benefits = dynamic(() => import("../components/benefits"));
// const Footer = dynamic(() => import("../components/footer"));
// const Testimonials = dynamic(() => import("../components/testimonials"));
// const Cta = dynamic(() => import("../components/cta"));
// const Faq = dynamic(() => import("../components/faq"));

// const PopupWidget = dynamic(() => import("../components/popupWidget"));


export default function Profile() {
   return (
      <AuthWrapper>
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
                     <h2 className="w-full font-medium text-3xl text-black/50 dark:text-white">Profile Settings</h2>
                     <div className="flex flex-wrap">
                        {/* column 1 */}
                        <div className="w-full lg:w-1/2 my-5 pr-0 lg:pr-5">
                           <div className="leading-loose">
                              <form className="form">
                                 <div className="formHeading">
                                    Account
                                 </div>
                                 <div className="formSpacing">
                                    <label className="formLabel" for="name">First name</label>
                                    <input className="formInput" id="name" name="name" type="text" required="" placeholder="John" aria-label="Name" />
                                 </div>
                                 <div className="formSpacing">
                                    <label className="formLabel" for="name">Last name</label>
                                    <input className="formInput" id="name" name="name" type="text" required="" placeholder="Doe" aria-label="Name" />
                                 </div>
                                 <div className="formSpacing">
                                    <label className="formLabel" for="email">Email</label>
                                    <input className="formInput" id="email" name="email" type="text" required="" placeholder="Your Email" aria-label="Email" />
                                 </div>
                                 <div className="formSpacing">
                                    <button className="buttonUpdate" type="submit">Update</button>
                                 </div>
                              </form>
                           </div>
                        </div>
                        

                        {/* column security */}
                        <div className="w-full lg:w-1/2 my-5 pr-0 lg:pr-5 space-y-6">
                           <div className="leading-loose">
                              <form className="form">
                                 <div className="formHeading">
                                    pixl.tag
                                 </div>
                                 <div className="formSpacing">
                                    <input className="w-full px-5 py-1 rounded text-pixlviol-100 font-bold border-2 border-dashed border-pixlviol-100 placeholder-pixlviol-100" id="name" name="name" type="text" required="" placeholder="§blanco" disabled aria-label="Name" />
                                 </div>
                              </form>
                           </div>

                           <div className="leading-loose">
                              <form className="form">
                                 <div className="formHeading">
                                    Security
                                 </div>
                                 <div className="formSpacing">
                                    <label className="formLabel" for="name">Password</label>
                                    <input className="formInput" id="name" name="password" type="text" required="" placeholder="********" aria-label="Name" />
                                 </div>
                                 
                                 <div className="formSpacing">
                                    <label className="formLabel" for="email">Phone</label>
                                    <input className="formInput" id="email" name="phone" type="text" required="" placeholder="732-123-9038" aria-label="Phone" />
                                 </div>
                                 <div className="formSpacing">
                                    <button className="buttonUpdate" type="submit">Update</button>
                                 </div>
                              </form>
                           </div>
                        </div>
                     </div>
                  </main>
               </div>
            </div>
            <PopupWidget /> 
         </div>
         <NavbarMobile/>

      </AuthWrapper>
   );
}
