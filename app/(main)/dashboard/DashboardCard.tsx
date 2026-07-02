"use client";

import React from "react";
import { FileText, ArrowLeftRight, Truck, Users } from "lucide-react";

const cardIcon: Record<string, React.ComponentType<any>> = {
  ArrowLeftRight,
  FileText,
  Truck,
  Users,
};

type Stat = {
  id: number;
  title: string;
  value: string | number;
  subtext: string;
  icon: string;
};

type DashboardCardProps = {
  recordFile: Stat;
};

const DashboardCards = ({ recordFile }: DashboardCardProps) => {
  const IconComponent = cardIcon[recordFile.icon] || FileText; // Fail-safe icon configuration guard
  
  return (
    <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-gray-200 dark:border-slate-600 shadow-sm cursor-pointer hover:shadow-md duration-500 ease-in-out">
      <div className="flex mb-4 items-center justify-between">
        <span className="text-gray-500 dark:text-gray-300 text-sm font-medium">
          {recordFile.title}
        </span>
        <span className="p-2.5 rounded-lg bg-blue-900 dark:bg-blue-600">
          <IconComponent className="text-white h-5 w-5" />
        </span>
      </div>
      <div className="flex flex-col gap-1">
        <span className="font-bold text-2xl dark:text-white">{recordFile.value}</span>
        <span className="font-light text-xs text-gray-500 dark:text-gray-300">
          {recordFile.subtext}
        </span>
      </div>
    </div>
  );
};

export default DashboardCards;