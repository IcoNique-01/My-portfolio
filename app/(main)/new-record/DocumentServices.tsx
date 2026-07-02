"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const DocumentServices = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    customer_name: "",
    amount: "",
    description: "",
    service_type: "Document Services",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const submitForm = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setIsLoading(true);

    try {
      const response = await fetch(
        "http://localhost/school-project/document-service.php",
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
      setError("Could not connect to server");
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
        <h1 className="text-2xl font-bold mb-3 ">Document Services</h1>
        <p className="text-neutral-400 ">
          Sign in to manage multi-service counter operations
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
        <div>
          <label className="block mb-2 text-md font-medium " htmlFor="email">
            Customer/Sender's Name:
          </label>
          <input
            type="text"
            name="customer_name"
            value={formData.customer_name}
            onChange={handleChange}
            className="py-1.5 px-2.5 w-full rounded-md outline-0 border border-blue-400 dark:border-gray-400 focus:shadow-[0_0_4px] focus:shadow-blue-400 dark:focus:shadow-gray-400 duration-300 "
            placeholder="David Bryan"
          />
        </div>
        <div>
          <label htmlFor="Amount" className="block my-2 text-md font-medium">
            <span className="text-red-500">*</span> Amount:
          </label>
          <input
            className="py-1.5 px-2.5 w-full rounded-md outline-0 border border-blue-400 dark:border-gray-400 focus:shadow-[0_0_4px] focus:shadow-blue-400 dark:focus:shadow-gray-400 duration-300 mb-2"
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="Amount (#)"
            required
          />
        </div>
        <div className="flex flex-col items-start gap-2 ">
          <label htmlFor="Description">
            <span className="text-red-500">*</span> Description:
          </label>
          <textarea
            required
            value={formData.description}
            onChange={handleChange}
            placeholder="Printing - 30 pages"
            name="description"
            id=""
            rows={8}
            className="resize-none py-1.5 px-2.5 w-full rounded-md outline-0 border border-blue-400 dark:border-gray-400 focus:shadow-[0_0_4px] focus:shadow-blue-400 dark:focus:shadow-gray-400 duration-300 mb-2"
          ></textarea>
        </div>
        <div className="mt-5 ">
          <button
            type="submit"
            disabled={isLoading}
            className="w-full text-center rounded-md bg-blue-900 dark:bg-blue-600 cursor-pointer py-2 text-white  "
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default DocumentServices;
