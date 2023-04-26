import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

const Layout = ({ children }: any) => {
  const breadCrumbs = [
    {name:"Products",link:"/products"},
  ]
  return (
    <div className="h-screen flex flex-col justify-between">
      <Navbar />
      <Breadcrumbs breadCrumbs={breadCrumbs}/>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
