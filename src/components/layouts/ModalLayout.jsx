function ModalLayout({ children, modalWidth, closeModal }) {
   return (
      <div className="overlay">
         <div
            className="flex justify-center items-center h-full modal-inner"
         >
            <div className={`bg-white rounded-xl relative p-4 sm:px-7 ${modalWidth}`}>
               <button
                  className="border-2 rounded-full flex justify-center items-center border-black absolute top-4 right-4"
                  onClick={closeModal}
               >
                  <span className="material-symbols-outlined ">close</span>
               </button>

               {children}
            </div>
         </div>
      </div>
   );
}

export default ModalLayout;
