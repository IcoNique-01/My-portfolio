"use client";

import logs from "../../../components/data/logs.json";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";

interface DashboardTableProps {
  limit: number;
  head: string;
  btn: boolean;
}

interface logRecord {
  id: number;
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

const CourierLogisticsTable = ({ limit, head, btn }: DashboardTableProps) => {
  const [record, setRecord] = useState<logRecord[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          "http://localhost/school-project/dashboard.php",
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
          },
        );

        const drop = await response.json();

        if (drop.success) {
          setRecord(drop.data);
        } else {
          setRecord([]);
        }
      } catch (error) {
        setError("Cannot Connect to Server");

        setTimeout(() => {
          setError("");
        }, 2500);
      }
    };

    getData();
  }, []);

  const filterPost = limit ? record.slice(0, 5) : record;

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl mt-5 shadow-sm overflow-x-hidden">
      <div className=" w-full flex items-center justify-between p-4 border-b">
        <div>
          <h1 className="font-bold text-xl ">{head}</h1>
          <p className="font-medium text-sm text-gray-500 dark:text-gray-100 ">
            Real-time feed of multi-service outlet activity logs
          </p>
        </div>
        <Link
          className="flex gap-2 items-center cursor-pointer text-blue-600 dark:text-blue-50 hover:text-blue-700 bg-blue-50 dark:bg-blue-800 hover:bg-blue-100 dark:hover:bg-blue-700 duration-300 ease-in-out rounded-xl px-2.5 py-1 text-sm "
          href={`${btn ? "/transaction" : "/dashboard"}`}
        >
          {btn ? "View All Logs" : "Go Back"}
          <ArrowRight className={`${btn ? "block" : "hidden"}`} />
          <ArrowLeft className={`${btn ? "hidden" : "block"}`} />
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse ">
          <thead>
            <tr className="bg-gray-50 text-gray-500 dark:bg-gray-500 dark:text-gray-50 text-xs font-semibold uppercase border-b border-gray-200 text-nowrap ">
              <th className="p-3">CUSTOMER</th>
              <th className="p-3">SERVICE TYPE</th>
              <th className="p-3">WAYBILL NO</th>
              <th className="p-3">DESCRIPTION</th>
              <th className="p-3">AMOUNT (₦)</th>
              <th className="p-3">WEIGHT (KG)</th>
              <th className="p-3">DESTINATION</th>
              <th className="p-3">TIMESTAMP</th>
            </tr>
          </thead>
          <tbody>
            {filterPost.length > 0 ? (
              filterPost
                .filter((log) => log.service_type === "Courier Logistics")
                .map((log, index) => (
                  <tr
                    key={index}
                    className="border-b text-xs font-medium dark:border-slate-900 border-gray-200"
                  >
                    <td className="px-3 py-6 text-gray-900 text-nowrap dark:text-white ">
                      {log.customer_name}
                    </td>
                    <td className="px-3 py-6 font-medium ">
                      <span
                        className={`px-2.5 text-nowrap py-0.5 rounded-md ${
                          log.service_type === "Courier Logistics"
                            ? "bg-purple-100 dark:bg-purple-900 dark:text-purple-200 text-purple-900 border border-purple-300 dark:border-purple-200"
                            : "bg-emerald-100 dark:bg-emerald-900 dark:text-emerald-200 text-emerald-900 border border-emerald-300 dark:border-emerald-200 "
                        }`}
                      >
                        {log.service_type}
                      </span>
                    </td>
                    <td className="px-3 py-6 text-gray-500 dark:text-gray-300 font-medium ">
                      {log.waybill_id}
                    </td>
                    <td className="px-3 py-6 text-gray-500 dark:text-gray-300 font-medium ">
                      {log.description}
                    </td>
                    <td className="px-3 py-6 text-right text-gray-900 dark:text-white ">
                      {log.amount}
                    </td>
                    <td className="px-3 py-6 text-gray-500 dark:text-gray-300 font-medium text-right ">
                      {log.weight}
                    </td>
                    <td className="px-3 py-6 text-gray-500 dark:text-gray-300 font-medium ">
                      {log.destination}
                    </td>
                    <td className="px-3 text-nowrap py-6 text-gray-500 dark:text-gray-300 font-medium ">
                      {log.created_at}
                    </td>
                  </tr>
                ))
            ) : (
              <tr>
                <td
                  colSpan={8}
                  className="text-center py-4 text-sm text-gray-400 dark:text-slate-500 font-medium"
                >
                  No Record(s) Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CourierLogisticsTable;
