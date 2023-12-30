import { Link } from "react-router-dom";
import OptionsDropdown from "./OptionsDropdown";
import CustomerOrderDetails from "./modals/CustomerOrderDetails";
import { useState } from "react";
import ConfirmatoryModal from "./modals/ConfirmatoryModal";

export default function CustomerOrders() {
   const [showOptions, setShowOption] = useState(false);
   const [showDetails, setShowDetails] = useState(false);
   const [showDelete, setShowDelete] = useState(false);

   return (
      <>
         <div className="flex justify-end mb-5">
            <button className="green btn px-2 md:w-[170px]">
               <span className="material-symbols-outlined">add</span>Add
               <span className="hidden sm:flex pl-1">New Order</span>
            </button>
         </div>
         <div className="table-container pb-20">
            <table className="customer-table w-[1100px]">
               <thead>
                  <tr>
                     <th className="pr-10 pl-4">ID</th>
                     <th>Entry Date</th>
                     <th>Collection Date</th>
                     <th className="pr-10">Style</th>
                     <th className="pr-10">Label</th>
                     <th className="pr-10">Type</th>
                     <th className="pr-6">Color</th>
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
                     <td>Lace</td>
                     <td>Red</td>
                     <td className="bg-[#ebfaf1] w-[140px] text-[#248f4f] pl-5 pr-5 ml-28">
                        <span className="flex items-center">
                           <span className="bg-[#248f4f] h-2 w-2 rounded-full flex mr-2" />
                           Completed
                        </span>
                     </td>
                     <td className="pl-10 relative">
                        <button
                           onClick={() => {
                              setShowOption(!showOptions);
                           }}
                        >
                           <span className="material-symbols-outlined">
                              more_vert
                           </span>
                        </button>

                        {showOptions && (
                           <OptionsDropdown
                              view={() => {
                                 setShowDetails(true);
                                 setShowOption(false);
                              }}
                              edit={() => {}}
                              deleteItem={() => {
                                 setShowDelete(true);
                                 setShowOption(false);
                              }}
                           />
                        )}
                     </td>
                  </tr>
                  <tr className="h-12 border-[#fff] border-b-[15px]">
                     <td className="pl-4">CUS/001</td>
                     <td>21st Nov 2023</td>
                     <td>3rd Nov 2025</td>
                     <td className="mr-4">Kaftan</td>
                     <td>Wedding</td>
                     <td>Guinea</td>
                     <td>Red</td>
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
                     <td>Atiku</td>
                     <td>Red</td>
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
         {showDetails && (
            <CustomerOrderDetails
               closeModal={() => {
                  setShowDetails(false);
               }}
            />
         )}
         {showDelete && (
            <ConfirmatoryModal
               title="Delete Ismail Aremu Order?"
               subtitle="Are you sure you want to delete Ismail Aremu's red kaftan from
               his orders list ?"
               closeModal={() => {
                  setShowDelete(false);
               }}
            />
         )}
      </>
   );
}
