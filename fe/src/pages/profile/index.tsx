import React from "react";

import LayoutWithSidebar from "./profileLayout";
import LineChart from "@/components/Charts/LineChart";
import { Transactions } from "@/components/Transactions/Transactions";

export default function ProfilePage() {
  return (
    <div className=" grid grid-cols-12 col-span-12 gap-3 p-3 mt-20 ml-64">
      <LineChart />
      <Transactions />
    </div>
  );
}

ProfilePage.getLayout = function (page: any) {
  return <LayoutWithSidebar>{page}</LayoutWithSidebar>;
};
