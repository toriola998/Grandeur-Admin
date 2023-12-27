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
      <div className="relative input-wrapper">
         <label htmlFor={name}>{label}</label>

         <div className="flex items-center w-full">
            <span className="material-symbols-outlined absolute left-4 text-dark-grey">
               {icon}
            </span>
            <input
               type={type}
               placeholder={placeholder}
               id={name}
               {...fieldName}
               className="w-full pl-12 py-2 pr-4"
            />
         </div>
         <p className="text-red text-xs">{errorMessage}</p>
      </div>
   );
}
