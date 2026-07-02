"use client";

import { useRouter } from "next/navigation";
import stats from "../../../components/data/stats.json";
import newUser from "@/components/data/newUser.json";
import DashboardCards from "./DashboardCard";
import DashboardTable from "./DashboardTable";
import React, { useEffect, useState } from "react";

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

const MyDashboard = () => {
  const router = useRouter();
  const [first_name, set_first_name] = useState("");
  const [last_name, set_last_name] = useState("");
  const [error, setError] = useState("");
  const [record, setRecord] = useState<logRecord[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const storedFirstName = localStorage.getItem("first_name") || "";
    const storedLastName = localStorage.getItem("last_name") || "";

    if (!token || !storedFirstName || !storedLastName) {
      router.push("/auth");
      return;
    }

    set_first_name(storedFirstName);
    set_last_name(storedLastName);

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
        setError("Cannot connect to server");

        setTimeout(() => {
          setError("");
        }, 2000);
      }
    };

    getData();
  }, [router]);

  const recordLength = record.length;

  const CLL = record.filter(
    (records) =>
      records.service_type?.toLocaleLowerCase() === "courier logistics",
  ).length;
  const DSL = record.filter(
    (records) =>
      records.service_type?.toLocaleLowerCase() === "document service" ||
      records.service_type?.toLocaleLowerCase() === "document services",
  ).length;

  const recordDetails = [
    {
      id: 1,
      title: "Total Transactions",
      value: recordLength,
      subtext: "Combined logs today",
      icon: "ArrowLeftRight",
    },
    {
      id: 2,
      title: "Document Services",
      value: DSL,
      subtext: "Typing, printing, scanning",
      icon: "FileText",
    },
    {
      id: 3,
      title: "Courier Logistics",
      value: CLL,
      subtext: "Parcel dispatches logged",
      icon: "Truck",
    },
  ];

  const recordFile = record.length > 0 ? recordDetails : stats;

  return (
    <div>
      {error && (
        <div className="text-red-500 mb-2 font-medium text-sm">{error}</div>
      )}
      <h2 className="font-medium text-gray-500 dark:text-gray-300 text-md mb-4">
        Welcome, {last_name} {first_name}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 items-center gap-4">
        {recordFile.map((subs) => (
          <DashboardCards key={subs.id} recordFile={subs} />
        ))}
      </div>
      <div className="mt-6">
        <DashboardTable limit={5} head="Recent Transaction" btn={true} />
      </div>
    </div>
  );
};

export default MyDashboard;
