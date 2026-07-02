"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const RegisterForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const submitForm = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirm_password) {
      setError("Password do not match");
      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    }
    setIsLoading(true);

    try {
      const response = await fetch(
        "http://localhost/school-project/signup.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
          credentials: "include",
        },
      );

      const drop = await response.json();

      if (drop.success) {
        setSuccess(drop.message);
        localStorage.removeItem("authToken");
        localStorage.removeItem("first_name");
        localStorage.removeItem("last_name");
        localStorage.removeItem("email");

        localStorage.setItem("authToken", drop.token);
        localStorage.setItem("first_name", drop.user.first_name);
        localStorage.setItem("last_name", drop.user.last_name);
        localStorage.setItem("email", drop.user.email);

        setTimeout(() => {
          setSuccess("");

          router.push("/dashboard");
        }, 1500);
      } else {
        setError(drop.message);
        setTimeout(() => {
          setError("");
        }, 2000);
      }
    } catch (error) {
      console.error("Frontend Fetch Error: ", error);
      setError("An Error Occurred");
      setTimeout(() => {
        setError("");
      }, 2000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-md flex flex-col items-start gap-8 ">
      <div className="text-center w-full ">
        <h1 className="text-2xl font-bold mb-3 ">Create an Account</h1>
        <p className="text-neutral-400 ">
          Sign up and start managing multi-service counter operations
        </p>
      </div>
      {error && (
        <div className="w-full p-3 text-sm text-red-600 bg-red-100 dark:bg-red-900/30 dark:text-red-400 rounded-md">
          {error}
        </div>
      )}
      {success && (
        <div className="w-96 p-3 text-sm text-emerald-600 bg-emerald-100 dark:bg-emerald-600/30 dark:text-white rounded-md">
          {success}
        </div>
      )}
      <form onSubmit={submitForm} className="w-full">
        <div className="grid grid-cols-2 gap-2 w-full ">
          <div>
            <label
              className="block my-2 text-md font-medium "
              htmlFor="First-Name"
            >
              <span className="text-red-500">*</span> First Name:
            </label>
            <input
              className="py-1.5 px-2.5 w-full rounded-md outline-0 border border-blue-400 dark:border-gray-400 focus:shadow-[0_0_4px] focus:shadow-blue-400 dark:focus:shadow-gray-400 duration-300 mb-2"
              required
              value={formData.first_name}
              onChange={handleChange}
              type="text"
              placeholder="George"
              name="first_name"
            />
          </div>
          <div>
            <label
              className="block my-2 text-md font-medium "
              htmlFor="LastName"
            >
              <span className="text-red-500">*</span> Last Name:
            </label>
            <input
              className="py-1.5 px-2.5 w-full rounded-md outline-0 border border-blue-400 dark:border-gray-400 focus:shadow-[0_0_4px] focus:shadow-blue-400 dark:focus:shadow-gray-400 duration-300 mb-2"
              required
              value={formData.last_name}
              onChange={handleChange}
              type="text"
              placeholder="Cunningham"
              name="last_name"
            />
          </div>
        </div>
        <div>
          <label className="block mb-2 text-md font-medium " htmlFor="email">
            <span className="text-red-500">*</span> Email Address:
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="py-1.5 px-2.5 w-full rounded-md outline-0 border border-blue-400 dark:border-gray-400 focus:shadow-[0_0_4px] focus:shadow-blue-400 dark:focus:shadow-gray-400 duration-300 "
            placeholder="chritinagabriel@gmail.com"
            required
          />
        </div>
        <div>
          <label className="block my-2 text-md font-medium " htmlFor="password">
            <span className="text-red-500">*</span> Password:
          </label>
          <input
            name="password"
            placeholder="********"
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={handleChange}
            className="py-1.5 px-2.5 w-full rounded-md outline-0 border border-blue-400 dark:border-gray-400 focus:shadow-[0_0_4px] focus:shadow-blue-400 dark:focus:shadow-gray-400 duration-300 mb-2"
            required
          />
          <label className="block my-2 text-md font-medium " htmlFor="password">
            <span className="text-red-500">*</span> Confirm Password:
          </label>
          <input
            name="confirm_password"
            placeholder="********"
            type={showPassword ? "text" : "password"}
            value={formData.confirm_password}
            onChange={handleChange}
            className="py-1.5 px-2.5 w-full rounded-md outline-0 border border-blue-400 dark:border-gray-400 focus:shadow-[0_0_4px] focus:shadow-blue-400 dark:focus:shadow-gray-400 duration-300 mb-2"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="text-blue-900 dark:text-blue-600 text-sm cursor-pointer mb-3 "
          >
            {showPassword ? "Hide Password" : "Show Password"}
          </button>
        </div>
        <div className="mt-6 ">
          <button
            type="submit"
            disabled={isLoading}
            className={
              isLoading
                ? "w-full text-center rounded-md bg-blue-900 dark:bg-blue-600 cursor-not-allowed py-2 opacity-80 text-white  "
                : "w-full text-center rounded-md bg-blue-900 dark:bg-blue-600 cursor-pointer py-2 text-white  "
            }
          >
            {isLoading ? "Creating Account" : "Create Account"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
