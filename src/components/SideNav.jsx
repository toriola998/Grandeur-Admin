import { Link } from "react-router-dom";

export default function SideNav() {
   return (
      <nav>
         <ul className="bg-green text-white w-[300px] flex flex-col min-h-screen py-20 px-10 gap-y-6">
            <li className="">
               <img src="" alt="" />
               <Link to="/">Admin</Link>
            </li>
            <li className="">
               <img src="" alt="" />
               <Link to="/">Customers</Link>
            </li>
            <li>
               <img src="" alt="" />
               <Link to="/">Orders</Link>
            </li>
         </ul>
      </nav>
   );
}
