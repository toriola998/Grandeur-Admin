export default function InputTextarea({
   label,
   name,
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
         <textarea
            rows="4"
            cols="50"
            type={type}
            placeholder={placeholder}
            id={name}
            name={name}
            {...fieldName}
            className="border border-grey-1 w-full py-2 px-4"
         ></textarea>

         <p className="text-red text-xs">{errorMessage}</p>
      </div>
   );
}
