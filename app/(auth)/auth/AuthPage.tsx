import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const AuthPage = () => {
  return (
    <>
      <Tabs defaultValue="login" className="w-fit items-center ">
        <TabsList className="grid grid-cols-2 w-full dark:bg-slate-800 ">
          <TabsTrigger className="dark:bg-slate-900 " value="login">
            Log In
          </TabsTrigger>
          <TabsTrigger className="dark:bg-slate-900 " value="signUp">
            Sign Up
          </TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <LoginForm />
        </TabsContent>
        <TabsContent value="signUp">
          <RegisterForm />
        </TabsContent>
      </Tabs>
    </>
  );
};

export default AuthPage;
