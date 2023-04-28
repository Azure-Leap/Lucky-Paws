import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { useProducts } from "../../hooks/useProducts";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";

const Products = () => {
  const [products] = useProducts();
  const router = useRouter();
  const {} = useRouter();
  if (router.isFallback) {
    return <div> Loading ...</div>;
  }
  const breadCrumbs = [{ name: "Products", link: "" }];
  return (
    <div className="bg-[#fff3d3]">
      <Breadcrumbs breadCrumbs={breadCrumbs} />
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
            <Link key={idx} href={`products/${product._id}`} passHref>
              <div className="group bg-white hover:scale-110  shadow-[0_8px_16px_rgba(132,74,20,0.25)] rounded-xl m-3 ">
                <div className="sm:aspect-[12/12] md:aspect-[12/12] group grid grid-cols-2">
                  <div className="max-sm:col-span1 sm:col-span-2 md:col-span-2 xl:col-span-2 ">
                    <Image
                      src={product.img[0]}
                      alt="productsPhoto"
                      width={300}
                      height={100}
                      className="h-[200px] w-full rounded-lg object-contain "
                    />
                  </div>
                  <div className="max-sm:col-span1 sm:col-span-2 md:col-span-2 xl:col-span-2 text-center m-auto">
                    <div className=" max-sm:text-2xl sm:text-2xl md:text-xl p-1 ">
                      {product.title}
                    </div>
                    <div className="p-1">{product.price}</div>
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

export default Products;
