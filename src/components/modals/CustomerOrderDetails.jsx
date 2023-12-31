import Details from "../Details";
import ModalLayout from "../layouts/ModalLayout";

export default function CustomerOrderDetails({ closeModal }) {
   return (
      <ModalLayout
         modalWidth="w-full sm:w-[550px] sm:w-[620px] h-[550px] xl:h-[670px]"
         closeModal={closeModal}
      >
         <div className="customer-order-details py-5 ">
            <p className="text-lg md:text-2xl font-semibold pb-8">
               Ismail Aremu
            </p>
            <div className="h-[430px] xl:h-[580px] overflow-y-scroll xl:overflow-y-hidden modal-scroll pr-4">
               <div className="flex items-center justify-between">
                  <div className="flex-center gap-x-3">
                     <p className="font-semibold text-sm">Status</p>
                     <p className="bg-[#ffe6e6] text-[#DB353A] flex-center px-3 h-6 rounded">
                        <span className="flex-center">
                           <span className="bg-[#DB353A] h-2 w-2 rounded-full flex mr-2" />
                           <span className="text-sm">Pending</span>
                        </span>
                     </p>
                  </div>

                  <div>
                     <p className="bg-[#f4fdfa] rounded px-2 py-1">
                        <span className="font-semibold text-[13px] mr-4">
                           Fabric Source:
                        </span>
                        <span className="text-sm">In house</span>
                     </p>
                  </div>
               </div>

               <div className="mt-8 mb-4 grid grid-cols-2 gap-3">
                  <Details title="Color" value="Grey" />
                  <Details title="No of yards" value="4" />
                  <Details title="Fabric type" value="Lace" />
                  <Details title="Label" value="Wedding" />
                  <Details title="Style" value="Kaftan" />
                  <Details title="Collection Option" value="Delivery" />
                  <Details title="Entry Date" value="21st, Nov 2020" />
                  <Details title="Delivery Date" value="3rd, Jan 2023" />
               </div>

               <div className="flex flex-col gap-4">
                  <Details
                     title="Special Requirement"
                     value="I want to be shorter than usual. Three quarter sleeve too"
                  />
                  <Details
                     title="Delivery details"
                     value="24, Lanre Fatoye Street, ILupeju Elega."
                  />
               </div>
            </div>
         </div>
      </ModalLayout>
   );
}
