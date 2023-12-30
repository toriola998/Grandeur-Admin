export default function Details({ title, value }) {
   return (
      <p className="bg-[#f4fdfa] rounded py-2 px-4">
         <span className="font-semibold text-[13px] flex mb-1">{title}</span>
         <span className="text-sm">{value}</span>
      </p>
   );
}
