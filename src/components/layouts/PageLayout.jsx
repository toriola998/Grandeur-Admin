import SideNav from "../SideNav";

export default function PageLayout({ title, children }) {
   return (
      <div className="lg:flex gap-x-10">
         <div className="hidden lg:block">
            <SideNav />
         </div>

         <div>
            <div className="border-b border-green py-5 flex items-center justify-end">
               <p
                  className="border-2 border-green rounded-full h-10 w-10
                text-green font-medium text-lg flex items-center justify-center mr-3"
               >
                  A
               </p>
               <p className="font-medium hidden sm:flex border-r border-green pr-5 mr-5">Welcome, Ameenah</p>
               <button className="pr-5 flex items-center gap-x-1">
                  Log out
                  <span className="material-symbols-outlined text-[#dc2626]">logout</span>
               </button>
            </div>

            <main className="p-5 mt-5">
               <h1 className="font-semibold text-xl lg:text-2xl">{title}</h1>
               {children}
            </main>
         </div>
      </div>
   );
}
