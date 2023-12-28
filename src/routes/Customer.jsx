import CustomerOrders from "../components/CustomerOrders";
//import Measurement from "../components/Measurement";
import PageLayout from "../components/layouts/PageLayout";
export default function Customer() {
   return (
      <PageLayout title="Ismail Demoski">
         <div className="customer-initial">
            IS
         </div>
         <div className="mb-7">
            <p className="text-sm opacity-70 mb-1">Phone</p>
            <p className="text-[15px]">08160957487, 08034893295</p>
         </div>
         <div className="flex sm:flex-row flex-col mb-7 gap-y-7 sm:gap-x-36">
            <div>
               <p className="text-sm opacity-70 mb-1">Date Added</p>
               <p className="text-[15px]">21st, Nov 2023</p>
            </div>

            <div>
               <p className="text-sm opacity-70 mb-1">Last updated</p>
               <p className="text-[15px]">21st, Nov 2023</p>
            </div>
         </div>

         <div>
            <p className="text-sm opacity-70 mb-1">General preference</p>
            <p className="max-w-[700px] text-[15px]">
               I have a really slanted shoulder, so my shoulder needs to be
               really slanted. I love my kaftan free and really long like Buhari
               style
            </p>
         </div>

         {/* <Measurement /> */}
         <CustomerOrders />
      </PageLayout>
   );
}
