import InputField from "../components/input-fields/InputField";
import PageLayout from "../components/layouts/PageLayout";

import { Link } from "react-router-dom";

export default function Home() {
   return (
      <PageLayout title="Customers">
         <div className="flex gap-x-2 mt-10 mb-6 justify-between">
            <InputField
               placeholder="Search by name"
               name="Search"
               type="search"
               icon="search"
            />
            <button className="green btn px-2 md:w-[170px]">
               <span className="material-symbols-outlined">add</span>Add
               <span className="hidden sm:flex pl-1">Customer</span>
            </button>
         </div>

         <div className="table-container">
            <table className="w-[900px] lg:w-[1100px] customer-table">
               <thead>
                  <tr>
                     <th className="pr-10 pl-4">S/N</th>
                     <th>Name</th>
                     <th>Phone Number</th>
                     <th>Date Created</th>
                     <th>Last updated</th>
                     <th></th>
                  </tr>
               </thead>
               <tbody className="w-full">
                  <tr className="h-14">
                     <td className="pl-4">1</td>
                     <td>Demosky Ismail</td>
                     <td>
                        <a href="">07060608035</a>
                     </td>
                     <td>12th, Nov 2023</td>
                     <td>2nd, Jan 2025</td>
                     <td>
                        <Link to="/">
                           <span className="material-symbols-outlined">
                              more_vert
                           </span>
                        </Link>
                     </td>
                  </tr>
                  <tr className="h-14">
                     <td className="pl-4">2</td>
                     <td>Ibralia</td>
                     <td>
                        <a href="">08169608035</a>
                     </td>
                     <td>1st, Jun 2023</td>
                     <td>15th, Mar 2025</td>
                     <td>
                        <Link to="/">
                           <span className="material-symbols-outlined">
                              more_vert
                           </span>
                        </Link>
                     </td>
                  </tr>
                  <tr className="h-14">
                     <td className="pl-4">2</td>
                     <td>Mr Tiamiyu Dirisu</td>
                     <td>
                        <a href="">09169690305</a>
                     </td>
                     <td>3rd, Jun 2023</td>
                     <td>4th, Mar 2025</td>
                     <td>
                        <Link to="/">
                           <span className="material-symbols-outlined">
                              more_vert
                           </span>
                        </Link>
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
      </PageLayout>
   );
}
