import ModalLayout from "../../layouts/ModalLayout";
import InputField from "../../input-fields/InputField";
import InputTextarea from "../../input-fields/InputTextarea";
import InputSelect from "../../input-fields/InputSelect";
import { useState } from "react";

export default function EditCustomerOrder({ closeModal }) {
   const [selectedDeliveryType, setSelectedDeliveryType] = useState(false);
   const [selectedFabricSource, setSelectedFabricSource] = useState(false);
   const [selectedOrderProgress, setSelectedOrderProgress] = useState(false)

   return (
      <ModalLayout
         modalWidth="w-full sm:w-[620px] h-[550px] xl:h-[650px]"
         closeModal={closeModal}
      >
         <p className="text-lg md:text-2xl font-semibold my-5">
            Edit Order For Ismail Aremu
         </p>
         <div className="pt-5 pb-10 h-[400px] xl:h-[480px] overflow-y-scroll modal-scroll pr-4">
            <div className="grid grid-cols-2 gap-x-5 gap-y-8 mb-5">
               <InputField
                  label="Fabric color"
                  placeholder="e.g red, torquoise blue"
                  name="fabric-color"
                  type="text"
               />
               <InputField
                  label="Yards"
                  placeholder="e.g 4"
                  name="fabric-yards"
                  type="number"
               />
               <InputField
                  label="Style"
                  placeholder="e.g kaftan, agbada"
                  name="fabric-style"
                  type="text"
               />
               <InputField
                  label="Fabric Type"
                  placeholder="e.g lace, trouser material"
                  name="fabric-style"
                  type="text"
               />
               <InputField
                  label="Label"
                  placeholder="e.g wedding, ileya"
                  name="order-label"
                  type="text"
               />
               <InputField
                  label="Collection date"
                  placeholder=""
                  name="order-label"
                  type="date"
               />
               <InputSelect
                  label="Mode of delivery"
                  selectedOption={selectedDeliveryType}
                  setSelectedOption={setSelectedDeliveryType}
                  optionsList={["Pickup", "Delivery"]}
               />
               <InputSelect
                  label="Order Progress"
                  selectedOption={selectedOrderProgress}
                  setSelectedOption={setSelectedOrderProgress}
                  optionsList={["Pending", "In progress", "Completed"]}
               />
               <InputSelect
                  label="Fabric Source"
                  selectedOption={selectedFabricSource}
                  setSelectedOption={setSelectedFabricSource}
                  optionsList={["In house", "Customer fabric"]}
               />
            </div>
            <div className="flex flex-col gap-y-5">
               {selectedDeliveryType === "Delivery" && (
                  <InputTextarea
                     label="Delivery details"
                     placeholder="e.g 3 To be sent through GIG to 24, lanre fatoye"
                     name="special-requirement"
                  />
               )}
               <InputTextarea
                  label="Special requirement"
                  placeholder="e.g 3 quarter sleeve"
                  name="special-requirement"
               />
            </div>
         </div>

         <div className="flex justify-end gap-x-4 pt-4 pr-4">
            <button
               className="btn bg-[#E0FBF1] font-medium px-5"
               onClick={closeModal}
            >
               Cancel
            </button>
            <button className="green btn px-5">Save</button>
         </div>
      </ModalLayout>
   );
}
