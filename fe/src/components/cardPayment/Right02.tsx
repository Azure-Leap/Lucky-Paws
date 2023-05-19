import Image from "next/image";
import React from "react";
const order = require("../../assets/images/CardPayment/order.png");

const Right02 = () => {
  return (
    <div>
      <div className="mt-14">
        <div className="grid grid-cols-2">
          <h5 className="text-sm text-black font-medium">Company</h5>
          <p className="justify-self-end text-sm text-black font-medium">
            Apple
          </p>
        </div>
        <div className="grid grid-cols-2 mt-4">
          <h5 className="text-sm text-black font-medium">Order Number</h5>
          <p className="justify-self-end text-sm text-black font-medium">
            1266201
          </p>
        </div>
        <div className="grid grid-cols-2 mt-4">
          <h5 className="text-sm text-black font-medium">Product</h5>
          <p className="justify-self-end text-sm text-black font-medium">
            Macbook Air
          </p>
        </div>
        <div className="grid grid-cols-2 mt-4">
          <h5 className="text-sm text-black font-medium">VAT (20%)</h5>
          <p className="justify-self-end text-sm text-black font-medium">
            $100.00
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 border-t mt-4">
        <div className="mt-4">
          <p className="text-sm text-black font-medium">You have to pay</p>
          <p className="text-base text-black font-medium mt-2">
            <span className="text-base font-bold text-black">549.99</span>
            USD
          </p>
        </div>
        <div className="justify-self-end place-self-center">
          <Image
           width={100} 
           height={100} 
           src={order} 
           alt="orderIcon" 
           className="w-6" />
        </div>
      </div>
    </div>
  );
};

export default Right02;
