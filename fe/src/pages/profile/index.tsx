import React from "react";

import LayoutWithSidebar from "./profileLayout";
import Chart from "@/components/Chart/Chart";

export default function ProfilePage() {
  return (
    <div className=" grid grid-cols-12 col-span-12">
      <Chart />
    </div>
  );
}

ProfilePage.getLayout = function (page: any) {
  return <LayoutWithSidebar>{page}</LayoutWithSidebar>;
};
