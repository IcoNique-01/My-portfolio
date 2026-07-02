import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ForgotForm from "./ForgotForm";

const ForgotPassword = () => {
  return (
    <Tabs defaultValue="Forgot Password" className="w-fit items-center ">
      <TabsContent value="Forgot Password">
        <ForgotForm />
      </TabsContent>
    </Tabs>
  );
};

export default ForgotPassword;
