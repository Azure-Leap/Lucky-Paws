import Image from "next/image";
import LayoutWithSidebar from "./profileLayout";

export default function ProfilePage() {
  return (
    <div className="container mx-auto flex flex-row relative">
      <Image
        src="https://media.tenor.com/ov5y46JFdXIAAAAi/daily-cute.gif"
        alt="wolf"
        width={408}
        height={408}
      />
    </div>
  );
}

ProfilePage.getLayout = function (page: any) {
  return <LayoutWithSidebar>{page}</LayoutWithSidebar>;
};
