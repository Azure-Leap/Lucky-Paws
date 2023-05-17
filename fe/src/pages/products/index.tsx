import React,{useContext} from 'react'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router"

import { useProducts } from "../../hooks/useProducts";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import ShopSort from "@/components/Shop/ShopSort";
import Pagination from "../../components/Shop/Pagination";
import { IProduct } from '@/utils/interfaces';


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
      <div className="m-auto container grid grid-cols-6">
        <div className="lg:col-span-1 bg-white  md:aspect-[9/12] rounded-lg m-5 sm:col-span-5 max-sm:col-span-6 shadow-[0_8px_16px_rgba(132,74,20,0.25)]">
        <ShopSort/>
        </div>
        <div className="gap-6 mx-auto md:col-span-5 sm:col-span-5 max-sm:col-span-6 grid xl:grid-cols-3 sm:grid-cols-3 md:grid-cols-2  max-sm:grid-cols-1 p-2">
          {products?.map((product: any, idx: number) => (
            <Link key={idx} href={`products/${product._id}`} passHref>
              <div className="group bg-white hover:scale-110  shadow-[0_8px_16px_rgba(132,74,20,0.25)] rounded-3xl m-3">
                <div className="group grid grid-cols-2">
                  <div className="max-sm:col-span1 sm:col-span-2 md:col-span-2 xl:col-span-2 ">
                    <img
                      src={product.imgList[0].src}
                      alt="productsPhoto"
                      width={400}
                      height={100}
                      className="h-[400px] w-full rounded-3xl object-contain "
                    />
                  </div>
                  <div className="max-sm:col-span1 sm:col-span-2 md:col-span-2 xl:col-span-2 text-center rounded-b-3xl my-auto">
                    <div className=" max-sm:text-2xl sm:text-2xl md:text-xl p-1 ">
                      {product.title}
                    </div>
                    <div className="p-1 font-medium">₮{product.price}</div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Pagination/>
    </div>
  );
};

export default Products;
