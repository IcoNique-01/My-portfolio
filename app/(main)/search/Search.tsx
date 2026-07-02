"use client";

import { SearchIcon, FileText, Truck } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface logRecord {
  id: number | string;
  customer_name: string;
  service_type: string;
  description: string;
  amount: string;
  created_at: string;
  waybill_id: string | null;
  courier_type: string | null;
  destination: string | null;
  weight: string | null;
}

const Search = () => {
  const [formData, setFormData] = useState({
    search: "",
  });
  const [record, setRecord] = useState<logRecord[]>([]);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const response = await fetch(
          "http://localhost/school-project/dashboard.php",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            credentials: "include",
          },
        );

        const drop = await response.json();

        if (drop.success && Array.isArray(drop.data)) {
          setRecord(drop.data);
        } else {
          setRecord([]);
        }
      } catch (error) {
        setError("Cannot connect to server");

        setTimeout(() => {
          setError("");
        }, 2000);
      }
    };

    getData();
  }, []);

  const filteredRecords = record.filter((item) => {
    const query = formData.search.toLowerCase().trim();
    if (!query) return true;

    return (
      item.customer_name?.toLowerCase().includes(query) ||
      item.id?.toString().toLowerCase().includes(query) ||
      item.service_type?.toLowerCase().includes(query) ||
      item.description?.toLowerCase().includes(query) ||
      item.waybill_id?.toLowerCase().includes(query)
    );
  });

  const handleFormSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <div className="p-4 bg-white dark:bg-slate-950 rounded-xl shadow-sm border border-gray-100 dark:border-slate-800">
      <div>
        <form className="w-full" onSubmit={handleFormSubmit}>
          <label
            htmlFor="Search"
            className="text-sm font-semibold text-gray-500 dark:text-gray-400"
          >
            Search Your Records
          </label>
          <div className="w-full flex my-3.5 gap-4 items-center justify-between">
            <div className="relative w-full">
              <input
                type="text"
                className="py-2 pl-3 pr-10 w-full text-sm rounded-lg bg-gray-50 dark:bg-slate-900 outline-none border border-gray-200 dark:border-slate-700 focus:border-blue-500 focus:shadow-[0_0_4px_rgba(59,130,246,0.4)] dark:focus:border-blue-500 duration-300 transition-all text-slate-800 dark:text-slate-100"
                name="search"
                value={formData.search}
                onChange={handleChange}
                placeholder="Search by customer name, tracking ID, description, or service type..."
              />
              <SearchIcon className="absolute right-3 top-2.5 w-4 h-4 text-gray-400" />
            </div>
            <button
              type="submit"
              className="flex gap-2 items-center cursor-pointer text-white bg-blue-600 hover:bg-blue-700 duration-300 ease-in-out rounded-lg px-4 py-2 text-sm font-medium shadow-sm h-9.5"
            >
              Filter
            </button>
          </div>
        </form>

        {error && (
          <div className="w-full my-3 p-3 text-sm text-red-600 bg-red-50 dark:bg-red-950/30 dark:text-red-400 rounded-md border border-red-100 dark:border-red-900/50">
            {error}
          </div>
        )}

        <div className="overflow-x-auto rounded-lg border border-gray-100 dark:border-slate-800 mt-4">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-nowrap text-gray-500 dark:bg-slate-900 dark:text-gray-400 text-xs font-semibold uppercase border-b border-gray-100 dark:border-slate-800">
                <th className="p-3.5">TRANSACTION ID</th>
                <th className="p-3.5">CUSTOMER</th>
                <th className="p-3.5">SERVICE TYPE</th>
                <th className="p-3.5">LOG DETAILS</th>
                <th className="p-3.5">AMOUNT</th>
                <th className="p-3.5">TIMESTAMP</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-slate-800 text-sm text-slate-700 dark:text-slate-300">
              {filteredRecords.length > 0 ? (
                filteredRecords.map((item) => {
                  const isCourier =
                    item.service_type?.toLowerCase() === "courier logistics";

                  return (
                    <tr
                      key={item.id}
                      className="hover:bg-gray-50/50 dark:hover:bg-slate-900/50 duration-150 transition-colors"
                    >
                      <td className="p-3.5 font-mono text-xs text-blue-600 dark:text-blue-400 font-bold">
                        {item.id}
                      </td>
                      <td className="p-3.5 text-nowrap font-medium text-slate-900 dark:text-white">
                        {item.customer_name}
                      </td>
                      <td className="p-3.5 text-nowrap">
                        <span
                          className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                            isCourier
                              ? "bg-amber-50 border-amber-200 text-amber-700 dark:bg-amber-950/30 dark:border-amber-900/50 dark:text-amber-400"
                              : "bg-teal-50 border-teal-200 text-teal-700 dark:bg-teal-950/30 dark:border-teal-900/50 dark:text-teal-400"
                          }`}
                        >
                          {item.service_type}
                        </span>
                      </td>
                      <td className="p-3.5 max-w-xs truncate">
                        <div className="font-normal text-wrap text-slate-800 dark:text-slate-200">
                          {item.description}
                        </div>
                        {item.waybill_id && (
                          <div className="text-xs text-gray-400 font-mono mt-0.5">
                            Waybill: {item.waybill_id}
                          </div>
                        )}
                      </td>
                      <td className="p-3.5 text-nowrap font-semibold text-slate-900 dark:text-white">
                        ₦{" "}
                        {parseFloat(item.amount).toLocaleString(undefined, {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </td>
                      <td className="p-3.5 text-nowrap text-xs text-gray-500 dark:text-gray-400">
                        {new Date(item.created_at).toLocaleString("en-NG", {
                          dateStyle: "medium",
                          timeStyle: "short",
                        })}
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td
                    colSpan={6}
                    className="text-center py-12 text-sm text-gray-400 dark:text-slate-500 font-medium bg-gray-50/20 dark:bg-slate-900/10"
                  >
                    No matching records found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Search;
