import React from "react";
import Sidebar from "../../components/SideBar/SideBar";

export default function LayoutWithSidebar({ children }: any) {
  return (
    <div className="bg-red-300 w-screen h-screen grid grid-cols-12 ">
      <Sidebar />
      <main className="col-span-11 w-full h-full ">{children}</main>
    </div>
  );
}
