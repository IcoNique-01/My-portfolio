import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DocumentServices from "./DocumentServices";
import CourierLogistics from "./CourierLogistics";

const NewRecordForm = () => {
  return (
    <div className="w-full flex justify-center ">
      <Tabs defaultValue="Document Services" className="w-fit items-center ">
        <TabsList className="grid grid-cols-2 w-full dark:bg-slate-800 ">
          <TabsTrigger className="dark:bg-slate-900 " value="Document Services">
            Document Services
          </TabsTrigger>
          <TabsTrigger className="dark:bg-slate-900 " value="Courier Logistics">
            Courier Logistics
          </TabsTrigger>
        </TabsList>
        <TabsContent value="Document Services">
          <DocumentServices />
        </TabsContent>
        <TabsContent value="Courier Logistics">
          <CourierLogistics />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default NewRecordForm;
