import CategoryCards from "@/components/CategoryCards/CategoryCards";
import LoginPage from "../components/Login/LoginPage";
import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Story from "@/components/Story/Story";
import Shop from "@/components/Shop/Shop";
import Dogs from "@/components/DogsCard/DogsCard";


const Test = () => {
  return (
    <div className="body">
      <Navbar/>
      <CategoryCards />
      <Dogs/>
      <Story/>
      <Shop/>
      <Footer/>
      {/* <LoginPage /> */}
    </div>
  );
};

export default Test;
