import React from "react";
import Sidebar from "../../components/SideBar/SideBar";

export default function LayoutWithSidebar({ children }: any) {
  return (
    <div className="bg-gray-50 w-screen h-screen grid grid-cols-12 gap-2">
      <Sidebar />
      <main className="col-span-11 mx-auto mt-20 w-full h-full ">
        {children}
      </main>
    </div>
  );
}
