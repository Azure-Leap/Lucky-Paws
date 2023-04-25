import React from "react";
import ShopCard from "./ShopCard";
import Advertisement from "./Advertisement";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

const Shop = () => {
  // const breadCrumbs = [
  //   {name:"Products",link:"/products"},
  // ]
  return (
    <div className="m-24 grid grid-cols-4 gap-5 container ">
      {/* <Breadcrumbs breadCrumbs={breadCrumbs}/> */}
      <div className="xl:col-span-3 lg:w-full sm:col-span-4 max-sm:col-span-4 ">
        <ShopCard />
      </div>
      <div className="col-span-1 m-15 hidden xl:block">
        <Advertisement />
      </div>
    </div>
  );
};

export default Shop;
