import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import _ from "lodash";

import { useProducts } from "../../hooks/useProducts";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import Pagination from "../../components/Shop/Pagination";
import { ShopFilter } from "@/components/Shop/ShopFilter";

const Products = () => {
  const { products } = useProducts();
  const [filteredList, setFilteredList] = useState(products);
  const router = useRouter();

  useEffect(() => {
    setFilteredList(products);
  }, [products]);

  function handleAll(e: any) {
    setFilteredList(products);
    console.log("All: ", filteredList );
  }

  function handleCategory(e: any) {
    const categoryValue = e.target.value;
    
    const newFilter = _.filter(products, (item: any) => {
      return item.productType.storeCategory === categoryValue;
    });
    
    setFilteredList(newFilter);
  }

  
  function handleType(e: any) {
    const categoryValue = e.target.name;
    const typeValue = e.target.value;

    const newFilter = _.filter(products, (item: any) => {
      return (
        item.productType._id === typeValue &&
        item.productType.storeCategory === categoryValue
      );
    });

    setFilteredList(newFilter);
  }

  const breadCrumbs = [{ name: "Products", link: "" }];

  if (router.isFallback) {
    return <div> Loading ...</div>;
  }
  return (
    <div className="bg-[#fff3d3]">
      <Breadcrumbs breadCrumbs={breadCrumbs} />
      <div className="m-auto container grid grid-cols-5">
        <div className="md:col-span-1 bg-white  md:aspect-[9/12] rounded-lg m-5 sm:col-span-5 max-sm:col-span-5 shadow-[0_8px_16px_rgba(132,74,20,0.25)]">
          <ShopFilter
            handleCategory={handleCategory}
            handleType={handleType}
            handleAll={handleAll}
          />
        </div>
        <div className="mx-auto md:col-span-4 sm:col-span-5 max-sm:col-span-5 grid xl:grid-cols-3 sm:grid-cols-3 md:grid-cols-2  max-sm:grid-cols-1 p-2">
          {filteredList?.map((product: any, idx: number) => (
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
      <Pagination />
    </div>
  );
};

export default Products;
