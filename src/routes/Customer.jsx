import CustomerOrders from "../components/CustomerOrders";
import Measurement from "../components/Measurement";
import * as Tabs from "@radix-ui/react-tabs";
import PageLayout from "../components/layouts/PageLayout";
import CustomerBasicInfo from "../components/CustomerBasicInfo";

export default function Customer() {
   return (
      <PageLayout title="Ismail Demoski">
         <CustomerBasicInfo />

         <Tabs.Root defaultValue="measurement" className="mt-16">
            <Tabs.List className="border-b border-grey-3 mb-10">
               <Tabs.Trigger value="measurement" className="tab-trigger">
                  Measurement
               </Tabs.Trigger>
               <Tabs.Trigger value="order" className="tab-trigger">
                  Orders
               </Tabs.Trigger>
            </Tabs.List>

            <Tabs.Content value="measurement">
               <Measurement />
            </Tabs.Content>

            <Tabs.Content value="order">
               <CustomerOrders />
            </Tabs.Content>
         </Tabs.Root>
      </PageLayout>
   );
}
