"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ForgotForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const submitForm = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch(
        "http://localhost/school-project/forgot-pwd.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
          credentials: 'include'
        },
      );

      const drop = await response.json();

      if (drop.success) {
        localStorage.setItem("authToken", drop.user.token);
        localStorage.setItem("email", drop.user.email);

        router.push("/create-new-pwd");
      } else {
        setError(drop.message);

        setTimeout(() => {
          setError("");
        }, 2000);
      }
    } catch (error) {
      setError("Connection to Database Failed. Check if server is running");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-md flex flex-col items-start gap-8 ">
      <div className="text-center w-full">
        <h1 className="text-2xl font-bold mb-3 ">Forgot Password</h1>
        <p className="text-neutral-400 ">
          A code will be sent to the inputted mail
        </p>
      </div>
      {error && (
        <div className="w-full p-3 text-sm text-red-600 bg-red-100 dark:bg-red-900/30 dark:text-red-400 rounded-md">
          {error}
        </div>
      )}
      <form onSubmit={submitForm} className="w-96">
        <div>
          <label className="block mb-2 text-md font-medium " htmlFor="email">
            <span className="text-red-500">*</span> Email:
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="py-1.5 px-2.5 w-full rounded-md outline-0 border border-blue-400 dark:border-gray-400 focus:shadow-[0_0_4px] focus:shadow-blue-400 dark:focus:shadow-gray-400 duration-300 mb-4 "
            placeholder="chritinagabriel@gmail.com"
            required
          />
        </div>
        <div className="flex w-full items-center justify-between ">
          <Link
            href={"/auth"}
            className="text-blue-900 dark:text-blue-600 text-sm "
          >
            Back to Login
          </Link>
        </div>
        <div className="mt-6 ">
          <button
            type="submit"
            className={
              isLoading
                ? "w-full text-center rounded-md bg-blue-900 dark:bg-blue-600 cursor-not-allowed py-2 opacity-80 text-white  "
                : "w-full text-center rounded-md bg-blue-900 dark:bg-blue-600 cursor-pointer py-2 text-white  "
            }
            disabled={isLoading}
          >
            Forgot Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForgotForm;
