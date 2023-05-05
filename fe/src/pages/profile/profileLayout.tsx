import Sidebar from "@/components/SideBar/SideBar";

export default function LayoutWithSidebar({ children }: any) {
  return (
    <>
      <Sidebar />
      <main>{children}</main>
      {/* </Sidebar> */}
    </>
  );
}
