import { useState } from "react";

export default function InputSelect({
   selectedOption,
   setSelectedOption,
   optionsList,
   label,
}) {
   const [dropdown, setDropdown] = useState(false);
   return (
      <div>
         <p className="text-sm mb-2">{label}</p>
         <div className="input-select relative">
            <button
               aria-haspopup="listbox"
               aria-expanded="false"
               id="dropdown-button"
               onClick={() => {
                  setDropdown(!dropdown);
               }}
               type="button"
               className="px-4 py-2 text-sm w-full text-justify"
            >
               {selectedOption ? (
                  selectedOption
               ) : (
                  <span className="flex items-center">
                     Select
                     <span className="material-symbols-outlined">expand_more</span>
                  </span>
               )}
            </button>

            {dropdown && (
               <ul
                  role="listbox"
                  aria-labelledby="dropdown-button"
                  id="dropdown-list"
                  className="absolute bg-white z-50 top-12 dropdown-list"
               >
                  {optionsList.map((option, i) => (
                     <li
                        key={i}
                        onClick={() => {
                           setSelectedOption(option);
                           setDropdown(false);
                        }}
                     >
                        {option}
                     </li>
                  ))}
               </ul>
            )}
         </div>
      </div>
   );
}
