
import * as Tabs from "@radix-ui/react-tabs";
import PageLayout from "../components/layouts/PageLayout";
import InputField from "../components/input-fields/InputField";

export default function CreateCustomerProflie() {
   return (
      <PageLayout title="Create Customer Profile">
         {/* <Tabs.Root defaultValue="basic-info" className="mt-16">
            <Tabs.List className="border-b border-grey-3 mb-10">
               <Tabs.Trigger value="basic-info" className="tab-trigger">
                  Basic Info
               </Tabs.Trigger>
               <Tabs.Trigger value="order" className="tab-trigger">
                  Orders
               </Tabs.Trigger>
            </Tabs.List>

            <Tabs.Content value="basic-info">
               <Measurement />
            </Tabs.Content>

            <Tabs.Content value="order">
               <CustomerOrders />
            </Tabs.Content>
         </Tabs.Root> */}
      </PageLayout>
   );
}
