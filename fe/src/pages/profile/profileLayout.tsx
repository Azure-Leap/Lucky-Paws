import React from "react";
import Sidebar from "../../components/SideBar/SideBar";

export default function LayoutWithSidebar({ children }: any) {
  return (
    <div>
      <Sidebar />
      <main className="mt-10">{children}</main>
    </div>
  );
}
