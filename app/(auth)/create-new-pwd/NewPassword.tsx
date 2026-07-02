"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const NewPassword = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirm_password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const submitForm = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const token = localStorage.getItem("authToken");

    try {
      const response = await fetch(
        "http://localhost/school-project/new-pwd.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...formData, token: token }),
          credentials: "include",
        },
      );

      const drop = await response.json();

      if (drop.success) {
        setSuccess(drop.message);

        setTimeout(() => {
          setSuccess("");
          router.push("/auth");

          localStorage.removeItem("authToken");
          localStorage.removeItem("email");
        }, 1500);
      } else {
        setError(drop.message);

        setTimeout(() => {
          setError("");
        }, 2000);
      }
    } catch (error) {
      setError("Connection to Database Failed. Check if the server is running");

      setTimeout(() => {
        setError("");
      }, 2000);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    const token = localStorage.getItem("authToken");

    if (!token || !storedEmail) {
      router.push("/auth");
      return;
    }

    setFormData({
      email: storedEmail,
      password: "",
      confirm_password: "",
    });
  }, [router]);

  return (
    <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-md flex flex-col items-start gap-8 ">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-3 ">Create New Password</h1>
        <p className="text-neutral-400 ">
          Please enter and confirm your new secure password.
        </p>
      </div>
      {error && (
        <div className="w-96 p-3 text-sm text-red-600 bg-red-100 dark:bg-red-900/30 dark:text-red-400 rounded-md">
          {error}
        </div>
      )}
      {success && (
        <div className="w-96 p-3 text-sm text-white bg-emerald-100 dark:bg-emerald-600 dark:text-white rounded-md">
          {success}
        </div>
      )}
      <form onSubmit={submitForm} className="w-full">
        <div>
          <label className="block mb-2 text-md font-medium " htmlFor="email">
            <span className="text-red-500">*</span> Email:
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            readOnly
            onChange={handleChange}
            className="py-1.5 px-2.5 w-full cursor-not-allowed rounded-md outline-0 border border-blue-400 dark:border-gray-400 duration-300 mb-4 "
            placeholder="chritinagabriel@gmail.com"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-md font-medium " htmlFor="email">
            <span className="text-red-500">*</span> Password:
          </label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="py-1.5 px-2.5 w-full rounded-md outline-0 border border-blue-400 dark:border-gray-400 focus:shadow-[0_0_4px] focus:shadow-blue-400 dark:focus:shadow-gray-400 duration-300 mb-4 "
            placeholder="********"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-md font-medium " htmlFor="email">
            <span className="text-red-500">*</span> Confirm Password:
          </label>
          <input
            type={showPassword ? "text" : "password"}
            name="confirm_password"
            value={formData.confirm_password}
            onChange={handleChange}
            className="py-1.5 px-2.5 w-full rounded-md outline-0 border border-blue-400 dark:border-gray-400 focus:shadow-[0_0_4px] focus:shadow-blue-400 dark:focus:shadow-gray-400 duration-300 mb-4 "
            placeholder="********"
            required
          />
        </div>
        <button
          onClick={() => setShowPassword(!showPassword)}
          type="button"
          className="text-blue-900 dark:text-blue-600 text-sm cursor-pointer mb-3"
        >
          {showPassword ? "Hide Password" : "Show Password"}
        </button>
        <div className="flex w-full items-center justify-between "></div>
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
            {isLoading ? "Updating..." : "Update Password"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewPassword;
