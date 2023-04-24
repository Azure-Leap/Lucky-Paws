import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { useProducts } from "../../hooks/useProducts";

const index = () => {
  const router = useRouter();
  const {} = useRouter();
  if (router.isFallback) {
    return <div> Loading ...</div>;
  }

  const [products] = useProducts();

  return (
    <div className="bg-[#fff3d3]">
      <div className="m-auto container grid grid-cols-5">
        <div className="md:col-span-1 bg-white  md:aspect-[9/12] rounded-lg m-5 sm:col-span-5 max-sm:col-span-5">
          <div className="xl:text-2xl text-center font-bold m-5">
            Product list
          </div>
          <div className="p-2 xl:text-lg sm:text-xs">
            <button className="font-bold">Cat</button>
          </div>
          <div className="p-2 xl:text-lg sm:text-xs">
            <button className="font-bold">Dog</button>
          </div>
        </div>
        <div className="mx-auto md:col-span-4 sm:col-span-5 max-sm:col-span-5 grid xl:grid-cols-3 sm:grid-cols-3 md:grid-cols-2  max-sm:grid-cols-1 p-2">
          {products?.map((product: any, idx: number) => (
            <Link href={`products/${product._id}`} passHref>
              <div
                key={idx}
                className="group bg-white hover:bg-orange-100 rounded-xl m-2 grid grid-cols-2 "
              >
                <div className="sm:aspect-[12/12] md:aspect-[12/12] group grid grid-cols-2">
                  <div className="xl:col-span-2 sm:col-span-1 max-sm:col-span-1">
                    <Image
                      src={product.img}
                      alt="productsPhoto"
                      width={300}
                      height={100}
                      className="max-h-[200px] rounded-lg object-fill"
                    />
                  </div>
                  <div className="xl:col-span-2 sm:col-span-1 max-sm:col-span-1">
                    <div className=" xl:text-xl p-1 max-sm:col-span-1">
                      {product.title}
                    </div>
                    <div className="p-1 max-sm:col-span-1">{product.price}</div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;
