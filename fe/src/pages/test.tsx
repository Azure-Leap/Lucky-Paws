import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import HomePage from "./home"
import Footer from "@/components/Footer/Footer";
import LoginPage from "../components/Login/LoginPage";


export default function Test() {
  return (
    <div>
      <Navbar/>
      <HomePage/>
      <Footer/>
      {/* <LoginPage /> */}
    </div>
  );
}
