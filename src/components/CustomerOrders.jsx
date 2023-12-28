import { Link } from "react-router-dom";
export default function CustomerOrders() {
   return (
      <>
         <div className="flex justify-end mb-5">
            <button className="green btn px-2 md:w-[170px]">
               <span className="material-symbols-outlined">add</span>Add
               <span className="hidden sm:flex pl-1">New Order</span>
            </button>
         </div>
         <div className="table-container">
            <table className="w-[900px] lg:w-[1100px] customer-table">
               <thead>
                  <tr>
                     <th className="pr-10 pl-4">ID</th>
                     <th>Entry Date</th>
                     <th>Collection Date</th>
                     <th className="w-[130px]">Style</th>
                     <th className="w-[130px]">Label</th>
                     <th>Status</th>
                     <th></th>
                  </tr>
               </thead>
               <tbody className="w-full">
                  <tr className="h-14 border-[#fff] border-b-[15px] text">
                     <td className="pl-4">CUS/001</td>
                     <td>21st Nov 2023</td>
                     <td>3rd Nov 2025</td>
                     <td>Kaftan</td>
                     <td>Wedding</td>
                     <td className="bg-[#ebfaf1] w-[140px] text-[#248f4f] pl-5 pr-5 ml-28">
                        <span className="flex items-center">
                           <span className="bg-[#248f4f] h-2 w-2 rounded-full flex mr-2" />
                           Completed
                        </span>
                     </td>
                     <td className="pl-10">
                        <Link to="/">
                           <span className="material-symbols-outlined">
                              more_vert
                           </span>
                        </Link>
                     </td>
                  </tr>
                  <tr className="h-12 border-[#fff] border-b-[15px]">
                     <td className="pl-4">CUS/001</td>
                     <td>21st Nov 2023</td>
                     <td>3rd Nov 2025</td>
                     <td className="mr-4">Kaftan</td>
                     <td>Wedding</td>
                     <td className="bg-[#e6ecff] text-[#002db3] w-[140px] pl-5 pr-5 ml-28">
                        <span className="flex items-center">
                           <span className="bg-[#002db3] h-2 w-2 rounded-full flex mr-2" />
                           In progress
                        </span>
                     </td>
                     <td className="pl-10">
                        <Link to="/">
                           <span className="material-symbols-outlined">
                              more_vert
                           </span>
                        </Link>
                     </td>
                  </tr>
                  <tr className="h-12 border-[#fff] border-b-[15px]">
                     <td className="pl-4">CUS/001</td>
                     <td>21st Nov 2023</td>
                     <td>3rd Nov 2025</td>
                     <td className="mr-4">Kaftan</td>
                     <td>Wedding</td>
                     <td className="bg-[#ffe6e6] text-[#DB353A] w-[140px] pl-5 pr-5 ml-28">
                        <span className="flex items-center">
                           <span className="bg-[#DB353A] h-2 w-2 rounded-full flex mr-2" />
                           Pending
                        </span>
                     </td>
                     <td className="pl-10">
                        <Link to="/">
                           <span className="material-symbols-outlined">
                              more_vert
                           </span>
                        </Link>
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
      </>
   );
}