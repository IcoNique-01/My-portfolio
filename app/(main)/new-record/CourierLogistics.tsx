"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/react";
const CourierLogistics = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState("");
  const [formData, setFormData] = useState({
    customer_name: "",
    waybill_id: "",
    courier_type: "",
    service_type: "Courier Logistics",
    destination: "",
    amount: "",
    weight: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
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
        "http://localhost/school-project/courier-logistics.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
          credentials: "include",
        },
      );

      const drop = await response.json();

      if (drop.message) {
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
      setError("Couldn't Connect to Server");
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
        <h1 className="text-2xl font-bold mb-3 ">Courier Logistics</h1>
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
            <span className="text-red-500">*</span> Customer/Sender's Name:
          </label>
          <input
            type="text"
            name="customer_name"
            value={formData.customer_name}
            onChange={handleChange}
            className="py-1.5 px-2.5 w-full rounded-md outline-0 border border-blue-400 dark:border-gray-400 focus:shadow-[0_0_4px] focus:shadow-blue-400 dark:focus:shadow-gray-400 duration-300 "
            placeholder="David Bryan"
            required
          />
        </div>
        <div>
          <label className="block my-2 text-md font-medium " htmlFor="password">
            <span className="text-red-500">*</span> Waybill No:
          </label>
          <input
            type="text"
            name="waybill_id"
            value={formData.waybill_id}
            onChange={handleChange}
            placeholder="********"
            className="py-1.5 px-2.5 w-full rounded-md outline-0 border border-blue-400 dark:border-gray-400 focus:shadow-[0_0_4px] focus:shadow-blue-400 dark:focus:shadow-gray-400 duration-300 mb-2"
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-2 w-full ">
          <div>
            <label
              htmlFor="Courier Type"
              className="block my-2 text-md font-medium"
            >
              Courier Type:
            </label>
            <Listbox
              value={formData.courier_type}
              onChange={(value) =>
                setFormData((prev) => ({ ...prev, courier_type: value }))
              }
            >
              <ListboxButton className="py-1.5 px-2.5 w-full text-left rounded-md outline-0 border border-blue-400 dark:border-gray-400 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:shadow-[0_0_4px] focus:shadow-blue-400 dark:focus:shadow-gray-400 duration-300 mb-2 flex justify-between items-center">
                {formData.courier_type || "--Select Courier Type--"}
              </ListboxButton>
              <ListboxOptions
                anchor="bottom start"
                className="w-[--button-width] bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-md p-1 shadow-lg text-sm mt-1 focus:outline-none z-50"
              >
                <ListboxOption
                  value="International"
                  className="py-2 px-3 text-slate-900 dark:text-white data-focus:bg-blue-900 dark:data-focus:bg-blue-600 data-focus:text-white cursor-pointer rounded-md duration-150"
                >
                  International
                </ListboxOption>
                <ListboxOption
                  value="Domestic"
                  className="py-2 px-3 text-slate-900 dark:text-white data-focus:bg-blue-900 dark:data-focus:bg-blue-600 data-focus:text-white cursor-pointer rounded-md duration-150"
                >
                  Domestic
                </ListboxOption>
              </ListboxOptions>
            </Listbox>
          </div>
          <div>
            <label
              htmlFor="Destination"
              className="block my-2 text-md font-medium"
            >
              <span className="text-red-500">*</span> Destination:
            </label>
            <input
              type="text"
              value={formData.destination}
              onChange={handleChange}
              name="destination"
              className="py-1.5 px-2.5 w-full rounded-md outline-0 border border-blue-400 dark:border-gray-400 focus:shadow-[0_0_4px] focus:shadow-blue-400 dark:focus:shadow-gray-400 duration-300 mb-2"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 w-full">
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
          <div>
            <label htmlFor="Weight" className="block my-2 text-md font-medium">
              <span className="text-red-500">*</span> Weight (kg):
            </label>
            <input
              className="py-1.5 px-2.5 w-full rounded-md outline-0 border border-blue-400 dark:border-gray-400 focus:shadow-[0_0_4px] focus:shadow-blue-400 dark:focus:shadow-gray-400 duration-300 mb-2"
              required
              value={formData.weight}
              onChange={handleChange}
              placeholder="-- kg"
              name="weight"
              type="number"
            />
          </div>
        </div>
        <div className="flex flex-col items-start gap-2 ">
          <label htmlFor="Description">
            <span className="text-red-500">*</span> Description:
          </label>
          <textarea
            required
            value={formData.description}
            onChange={handleChange}
            placeholder="Document to United Kingdom"
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

export default CourierLogistics;
