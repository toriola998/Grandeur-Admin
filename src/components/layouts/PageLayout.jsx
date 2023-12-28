import SideNav from "../SideNav";
import { useState } from "react";

export default function PageLayout({ title, children }) {
   const [showNav, setShowNav] = useState(false);

   return (
      <div className="lg:flex justify-between gap-x-10">
         <div
            className={`lg:flex ${
               showNav
                  ? "absolute z-50 top-0 right-0 bottom-0 min-h-screen"
                  : "hidden w-[400px]"
            } 
            `}
         >
            <SideNav />
         </div>

         <div className="w-full lg:pr-10 overflow-hidden mb-20">
            <div className="border-b border-green py-5 flex items-center justify-between lg:justify-end px-5">
               <button
                  onClick={() => {
                     setShowNav(!showNav);
                  }}
                  className="lg:hidden"
               >
                  <span className="material-symbols-outlined">menu</span>
               </button>

               <div className="flex items-center">
                  <p className="initial">A</p>
                  <p className="user-name">Welcome, Ameenah</p>

                  <button className="flex items-center gap-x-1">
                     Log out
                     <span className="material-symbols-outlined text-[#dc2626]">
                        logout
                     </span>
                  </button>
               </div>
            </div>

            <main className="p-5 mt-5">
               <h1 className="font-semibold text-xl lg:text-2xl">{title}</h1>
               {children}
            </main>
         </div>
      </div>
   );
}
