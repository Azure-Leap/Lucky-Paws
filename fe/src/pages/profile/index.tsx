import React from "react";

import LayoutWithSidebar from "./profileLayout";

export default function ProfilePage() {
  return <div className=""></div>;
}

ProfilePage.getLayout = function (page: any) {
  return <LayoutWithSidebar>{page}</LayoutWithSidebar>;
};
