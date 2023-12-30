import ModalLayout from "../layouts/ModalLayout";

export default function ConfirmatoryModal({ closeModal, title, subtitle }) {
   return (
      <ModalLayout modalWidth="w-full sm:w-[450px]" closeModal={closeModal}>
         <div className="py-8">
            <p className="text-lg font-semibold mb-5">{title}</p>
            <img
               src="/assets/gif/question.gif"
               alt=""
               className="block mx-auto"
            />
            <p className="text-center py-6 text-[15px]">{subtitle}</p>

            <div className="flex justify-center gap-x-4 ">
               <button
                  className="bg-[#E0FBF1] btn px-5"
                  onClick={closeModal}
               >
                  <span class="material-symbols-outlined mr-1">close</span>
                  Cancel
               </button>
               <button className="green btn px-5">
                  <span class="material-symbols-outlined mr-1">check</span>Yes,
                  Proceed
               </button>
            </div>
         </div>
      </ModalLayout>
   );
}
