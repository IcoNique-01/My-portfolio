"use client";

import { User, Pen } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Profile = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    password: "",
    confirm_password: "",
    email: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [first_name, set_first_name] = useState("");
  const [last_name, set_last_name] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();
  const [success, setSuccess] = useState("");
  const [currentView, setCurrentView] = useState<"view" | "edit" | "delete">(
    "view",
  );

  const logOut = () => {
    localStorage.removeItem("first_name");
    localStorage.removeItem("last_name");
    localStorage.removeItem("email");
    localStorage.removeItem("authToken");

    set_first_name("");
    set_last_name("");
    setEmail("");

    router.push("/auth");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const editForm = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setIsLoading(true);

    try {
      const response = await fetch(
        "http://localhost/school-project/edit-profile.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
          credentials: "include",
        },
      );

      const drop = await response.json();

      if (drop.success) {
        localStorage.setItem("first_name", formData.first_name);
        localStorage.setItem("last_name", formData.last_name);

        set_first_name(formData.first_name);
        set_last_name(formData.last_name);

        setSuccess(drop.message);

        setTimeout(() => {
          setSuccess("");

          setCurrentView("view");
        }, 1500);
      } else {
        setError(drop.message);

        setTimeout(() => {
          setError("");
        }, 2000);
      }
    } catch (error) {
      setError("Can't Connect to the Server");

      setTimeout(() => {
        setError("");
      }, 2000);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteForm = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch(
        "http://localhost/school-project/delete-profile.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
          credentials: "include",
        },
      );

      const drop = await response.json();

      if (drop.success) {
        localStorage.removeItem("authToken");
        localStorage.removeItem("first_name");
        localStorage.removeItem("last_name");
        localStorage.removeItem("email");

        setSuccess(drop.message);

        setTimeout(() => {
          setSuccess("");

          router.push("/auth");
        }, 1500);
      } else {
        setError(drop.message);
        setTimeout(() => {
          setError("");
        }, 2000);
      }
    } catch (error) {
      setError("Can't Connect to the Server");

      setTimeout(() => {
        setError("");
      }, 2000);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const storedFirstName = localStorage.getItem("first_name") ?? "";
    const storedLastName = localStorage.getItem("last_name") ?? "";
    const storedEmail = localStorage.getItem("email") ?? "";

    set_first_name(storedFirstName);
    set_last_name(storedLastName);
    setEmail(storedEmail);

    setFormData({
      first_name: storedFirstName,
      last_name: storedLastName,
      password: "",
      confirm_password: "",
      email: storedEmail,
    });
  }, [router]);

  return (
    <div className="w-full flex flex-col items-center gap-20 pt-8">
      <div className="flex items-center gap-8 ">
        <div className="p-4 rounded-full bg-white dark:bg-slate-800 border border-neutral-200 dark:border-slate-600 flex justify-center items-center ">
          <User className="w-12 h-12 " />
        </div>
        <div className="flex flex-col items-start gap-2.5 ">
          <div className="flex items-center gap-4 ">
            <h2 className="uppercase font-semibold text-xl ">
              {last_name} {first_name}
            </h2>
            <button
              onClick={() =>
                setCurrentView(currentView === "edit" ? "view" : "edit")
              }
              className="px-2 rounded-md bg-white dark:bg-slate-800 cursor-pointer border border-neutral-200 dark:border-slate-600 "
            >
              <Pen className="w-4" />
            </button>
          </div>
          <div className="flex items-center gap-4">
            <div className="px-3.5 py-1 cursor-pointer rounded-md bg-white dark:bg-slate-800 border text-sm border-neutral-200 dark:border-slate-600 ">
              <button className="w-full h-full cursor-pointer" onClick={logOut}>
                Log out
              </button>
            </div>
            <button
              onClick={() =>
                setCurrentView(currentView === "delete" ? "view" : "delete")
              }
              className="bg-red-400/10 hover:bg-red-400/30 duration-300 px-3.5 py-1 cursor-pointer text-rose-600 text-sm font-medium rounded-md "
            >
              Delete Account
            </button>
          </div>
        </div>
      </div>
      {currentView === "view" && (
        <div className="flex flex-col items-start">
          <h2 className="border-b uppercase font-bold w-full pb-2 mb-4">
            Profile
          </h2>
          <div className="grid grid-cols-2 grid-row-4 col-gap-8">
            <span className="mb-4 ">First Name:</span>
            <span>{first_name}</span>
            <span className="mb-4">Last Name:</span>
            <span>{last_name}</span>
            <span className="text-nowrap mb-4">Email Address:</span>
            <span>{email}</span>
          </div>
        </div>
      )}
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
      {currentView === "edit" && (
        <form onSubmit={editForm}>
          <h2 className="border-b uppercase font-bold w-full pb-2 mb-4">
            Edit Profile
          </h2>
          <div className="grid grid-cols-2 gap-2 w-full ">
            <div>
              <label
                className="block my-2 text-md font-medium "
                htmlFor="first_name"
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
                htmlFor="last_name"
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
            <label
              className="block mb-2 text-md font-medium "
              htmlFor="password"
            >
              <span className="text-red-500">*</span> Password:
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="py-1.5 px-2.5 w-full rounded-md outline-0 border border-blue-400 dark:border-gray-400 focus:shadow-[0_0_4px] focus:shadow-blue-400 dark:focus:shadow-gray-400 duration-300 "
              placeholder="********"
              required
            />
          </div>
          <div>
            <label
              className="block my-2 text-md font-medium "
              htmlFor="confirm_password"
            >
              <span className="text-red-500">*</span> Confirm Password:
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="confirm_password"
              value={formData.confirm_password}
              onChange={handleChange}
              className="py-1.5 px-2.5 w-full rounded-md outline-0 border border-blue-400 dark:border-gray-400 focus:shadow-[0_0_4px] focus:shadow-blue-400 dark:focus:shadow-gray-400 duration-300 "
              placeholder="********"
              required
            />
          </div>
          <button
            type="button"
            className="text-blue-900 dark:text-blue-600 text-sm cursor-pointer mt-3"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide Password" : "Show Password"}
          </button>
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
              {isLoading ? "Updating..." : "Edit Profile"}
            </button>
          </div>
        </form>
      )}
      {currentView === "delete" && (
        <form onSubmit={deleteForm} className="w-96">
          <h2 className="border-b uppercase font-bold w-full pb-2 mb-4">
            Delete Profile
          </h2>
          <div>
            <label
              className="block mb-2 text-md font-medium "
              htmlFor="password"
            >
              <span className="text-red-500">*</span> Password:
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="py-1.5 px-2.5 w-full rounded-md outline-0 border border-blue-400 dark:border-gray-400 focus:shadow-[0_0_4px] focus:shadow-blue-400 dark:focus:shadow-gray-400 duration-300 "
              placeholder="********"
              required
            />
          </div>
          <div>
            <label
              className="block my-2 text-md font-medium "
              htmlFor="confirm_password"
            >
              <span className="text-red-500">*</span> Confirm Password:
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="confirm_password"
              value={formData.confirm_password}
              onChange={handleChange}
              className="py-1.5 px-2.5 w-full rounded-md outline-0 border border-blue-400 dark:border-gray-400 focus:shadow-[0_0_4px] focus:shadow-blue-400 dark:focus:shadow-gray-400 duration-300 "
              placeholder="********"
              required
            />
          </div>
          <button
            type="button"
            className="text-blue-900 dark:text-blue-600 text-sm cursor-pointer mt-3"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide Password" : "Show Password"}
          </button>
          <div className="mt-6 ">
            <button
              type="submit"
              disabled={isLoading}
              className={
                isLoading
                  ? "w-full text-center rounded-md bg-rose-900 dark:bg-rose-600 cursor-not-allowed py-2 opacity-80 text-white  "
                  : "w-full text-center rounded-md bg-rose-900 dark:bg-rose-600 cursor-pointer py-2 text-white  "
              }
            >
              {isLoading ? "Deleting..." : "Delete Profile"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Profile;
