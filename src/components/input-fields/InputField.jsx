export default function InputField({
   label,
   name,
   icon,
   type,
   placeholder,
   errorMessage,
   fieldName,
}) {
   return (
      <div className="relative ">
         <label htmlFor={name} className="text-sm mb-2 inline-flex">
            {label}
         </label>

         <div className="flex items-center w-full input-wrapper">
            <span className="material-symbols-outlined absolute left-4 text-dark-grey">
               {icon}
            </span>
            <input
               type={type}
               min="0"
               placeholder={placeholder}
               id={name}
               name={name}
               {...fieldName}
               className={`w-full ${icon ? "pl-12" : "pl-4"} py-2 pr-4`}
            />
         </div>
         <p className="text-red text-xs">{errorMessage}</p>
      </div>
   );
}
